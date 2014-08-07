//------------------------------------------------------------------------------
// <copyright company="LeanKit Inc.">
//     Copyright (c) LeanKit Inc.  All rights reserved.
// </copyright> 
//------------------------------------------------------------------------------

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using IntegrationService.Util;
using LeanKit.API.Client.Library.TransferObjects;
using Microsoft.TeamFoundation.WorkItemTracking.Client;
using RestSharp.Contrib;

namespace IntegrationService.Targets.TFS
{
    public static class ConversionExtensions
    {
        public static long? GetClassOfService(this WorkItem workItem, IEnumerable<ClassOfService> classOfServices)
        {
            if (!workItem.Fields.Contains("Baker.ClassOfService")) return null;
            if (workItem.Fields["Baker.ClassOfService"].Value == null) return null;

            long classOfServiceId = 0;
            var classOfServiceTitle = workItem.Fields["Baker.ClassOfService"].Value.ToString();
            var result = classOfServices.FirstOrDefault(x => x.Title == classOfServiceTitle);

            if (result != null)
            {
                return result.Id;
            }

            return null;
        }

        public static void SetClassOfService(this WorkItem workItem, long? id, IEnumerable<ClassOfService> classOfServices)
        {
            if (!workItem.Fields.Contains("Baker.ClassOfService")) return;
            if (id == null) return;

            var title = classOfServices.Where(x => x.Id == id).Select(x => x.Title).FirstOrDefault();
            workItem.Fields["Baker.ClassOfService"].Value = title;
        }

        public static string GetLaneTitle(this WorkItem workItem)
        {
            if (!workItem.Fields.Contains("Baker.LeankitLane")) return null;
            var laneTitle = workItem.Fields["Baker.LeankitLane"].Value;
            return laneTitle == null ? null : laneTitle.ToString();
        }
        public static int LeanKitPriority(this WorkItem workItem)
        {
			const int lkPriority = 1; // default to 1 - Normal

            if (workItem == null) return lkPriority;

			var tfsPriority = "";
            if (workItem.Fields != null)
            {
                if (workItem.Fields.Contains("Priority") && workItem.Fields["Priority"].Value != null)
                    tfsPriority = workItem.Fields["Priority"].Value.ToString();
            }

            return CalculateLeanKitPriority(tfsPriority);

        }

        public static string LeanKitDescription(this WorkItem workItem, int tfsVersion)
        {
            if (workItem.Fields == null) return "";
			var description = workItem.Fields.Contains("Repro Steps") 
				? workItem.Fields["Repro Steps"].Value.ToString() 
				: EnsureHtmlEncode(workItem.Fields["Description"].Value.ToString(), tfsVersion);
	        return description.SanitizeCardDescription();
        }

		private static string EnsureHtmlEncode(string text, int tfsVersion)
		{
			if (string.IsNullOrEmpty(text.Trim()))
				return text;

			if (tfsVersion > 2010)
				return text;

			if (IsHtmlEncoded(text))
				return text;
			
			return HttpUtility.HtmlEncode(text);
		}

		private static bool IsHtmlEncoded(string text)
		{
			return (HttpUtility.HtmlDecode(text) != text);
		}

		public static int CalculateLeanKitPriority(string tfsPriority)
		{
			var lkPriority = 1; // default to 1 - Normal

			if (string.IsNullOrEmpty(tfsPriority))
				return lkPriority;

			int tfsPriorityInt;
			if (!int.TryParse(tfsPriority, out tfsPriorityInt)) return lkPriority;

			//LK Priority: 0 = Low, 1 = Normal, 2 = High, 3 = Critical
			//TFS Priority: 1-4

			if (tfsPriorityInt > 5) return lkPriority;

			if (tfsPriorityInt > 0)
				lkPriority = 4 - tfsPriorityInt;
			if (lkPriority < 0) lkPriority = 0;

			return lkPriority;
		}

        public static bool UseReproSteps(this WorkItem workItem)
        {
			return (workItem.Fields != null && workItem.Fields.Contains("Repro Steps"));
        }

        public static CardType LeanKitCardType(this WorkItem workItem, BoardMapping project)
        {
            return CalculateLeanKitCardType(project, workItem.Type.Name);
        }

        public static CardType CalculateLeanKitCardType(BoardMapping project, string tfsWorkItemTypeName)
        {
            if (!String.IsNullOrEmpty(tfsWorkItemTypeName))
            {
                var mappedWorkType = project.Types.FirstOrDefault(x => x.Target.ToLowerInvariant() == tfsWorkItemTypeName.ToLowerInvariant());
                if (mappedWorkType != null)
                {
                    var definedVal = project.ValidCardTypes.FirstOrDefault(x => x.Name.ToLowerInvariant() == mappedWorkType.LeanKit.ToLowerInvariant());
                    if (definedVal != null)
                    {
                        return definedVal;
                    }
                }
                var implicitVal = project.ValidCardTypes.FirstOrDefault(x => x.Name.ToLowerInvariant() == tfsWorkItemTypeName.ToLowerInvariant());
                if (implicitVal != null)
                {
                    return implicitVal;
                }
            }
            return project.ValidCardTypes.FirstOrDefault(x => x.IsDefault);

        }
    }

}