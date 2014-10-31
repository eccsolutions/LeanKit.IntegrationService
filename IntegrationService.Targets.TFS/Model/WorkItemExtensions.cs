using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.TeamFoundation.WorkItemTracking.Client;

namespace IntegrationService.Targets.TFS.Model
{
    public static class WorkItemExtensions
    {
        public static string GetTags(this WorkItem item)
        {
            string value = null;
            var areaPath = GetFieldValue(item, "System.AreaPath") as string;
            var iterationPath = GetFieldValue(item, "System.IterationPath") as string;
            var workItemTags = GetFieldValue(item, "Tags") as string;
            var areaPathTags = areaPath.Replace('\\', ',');
            var iterationPathTags = iterationPath.Replace('\\', ',');
            var tags = areaPathTags + "," + iterationPathTags;

            if (!string.IsNullOrEmpty(workItemTags))
            {
                value = workItemTags + "," + tags;
            }
            else
            {
                value = tags;
            }

            value = value.Replace(";", ",");

            var tagList = value.Split(',');

            return string.Join(",", tagList.Distinct());
        }

        private static object GetFieldValue(WorkItem item, string fieldName)
        {
            // Contract: Field must exist
            if (!item.Fields.Contains(fieldName))
                return null;
            if (item.Fields[fieldName] == null)
                return null;

            return item.Fields[fieldName].Value;
        }
    }
}
