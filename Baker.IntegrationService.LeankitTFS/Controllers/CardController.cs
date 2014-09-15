using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LeanKit.API.Client.Library;
using LeanKit.API.Client.Library.TransferObjects;

namespace Baker.IntegrationService.LeankitTFS.Controllers
{
    public class CardsController : ApiController
    {
        public IEnumerable<SimpleCard> GetCards()
        {
            var factory = new LeanKitClientFactory();
            var api = factory.Create(new LeanKitAccountAuth()
            {
                Hostname = "https://bakerdonelsondev.leankit.com",
                Username = "pdavis@bakerdonelson.com",
                Password = "p8z57vy3",
                UrlTemplateOverride = "https://bakerdonelsondev.leankit.com"
            });

            var board = api.GetBoard(30906978);
            var cards = board.Lanes.SelectMany(x => x.Cards);

            return cards.ToSimpleCards();
        }
    }

    public static class CardMapper
    {
        public static IEnumerable<SimpleCard> ToSimpleCards(this IEnumerable<CardView> cards)
        {
            return cards.Select(card => card.ToSimpleCard()).ToList();
        }

        public static SimpleCard ToSimpleCard(this CardView card)
        {
            return new SimpleCard
            {
                Id = card.Id,
                ExternalCardID = card.ExternalCardID
            };
        }
    }

    public class SimpleCard
    {
        public long Id { get; set; }
        public string ExternalCardID { get; set; }
    }
}
