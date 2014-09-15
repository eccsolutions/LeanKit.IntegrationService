using System.Web;
using System.Web.Mvc;

namespace Baker.IntegrationService.LeankitTFS
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
