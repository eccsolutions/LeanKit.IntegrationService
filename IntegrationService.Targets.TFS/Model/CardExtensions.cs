using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using LeanKit.API.Client.Library.TransferObjects;
using Microsoft.TeamFoundation.WorkItemTracking.Client;

namespace IntegrationService.Targets.TFS.Model
{
    public static class CardExtensions
    {
        public static void CleanUpTags(this Card card)
        {
            if (!string.IsNullOrEmpty(card.Tags))
            {
                var tags = card.Tags.Split(',');
                var validTags = tags.Where(tag => !tag.Contains("\\")).ToList();
                card.Tags = string.Join(",", validTags);
            }
        }
    }
}
