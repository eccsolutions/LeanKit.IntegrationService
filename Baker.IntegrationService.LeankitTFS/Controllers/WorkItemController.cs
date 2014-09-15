using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LeanKit.API.Client.Library.TransferObjects;
using Microsoft.TeamFoundation.Client;
using Microsoft.TeamFoundation.WorkItemTracking.Client;

namespace Baker.IntegrationService.LeankitTFS.Controllers
{
    public class WorkItemsController : ApiController
    {
        public IEnumerable<SimpleWorkItem> GetWorkItems()
        {
            var collection = new TfsTeamProjectCollection(new Uri("http://intranetapp1:8080/tfs/defaultcollection"), new NetworkCredential(@"BDBC_NT\svcTFS", "Manage.TFS"));
            var workItemStore = new WorkItemStore(collection);

            const string queryString = "SELECT [System.Id], [System.WorkItemType], [System.State], [System.AssignedTo], [System.Title]," +
                                       " [System.Description]" +
                                       " FROM WorkItems" +
                                       " WHERE [System.TeamProject] = 'Baker'" +
                                       " ORDER BY [System.TeamProject]";

            var query = new Query(workItemStore, queryString, null, false);

            var cancelable = query.BeginQuery();
            var workItems = query.EndQuery(cancelable);

            return workItems.ToSimpleWorkItems();
        }
    }


    public static class WorkItemMapper
    {
        public static IEnumerable<SimpleWorkItem> ToSimpleWorkItems(this WorkItemCollection collection)
        {
            var workItems = collection.Cast<WorkItem>();
            var simpleWorkItems = workItems.Select(workItem => workItem.ToSimpleWorkItem()).ToList();

            return simpleWorkItems;
        }

        public static SimpleWorkItem ToSimpleWorkItem(this WorkItem workItem)
        {
            return new SimpleWorkItem()
            {
                Id = workItem.Id
            };
        }
    }

    public class SimpleWorkItem
    {
        public int Id { get; set; }
    }
}
