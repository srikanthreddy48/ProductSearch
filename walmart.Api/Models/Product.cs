using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace walmart.Api.Models
{
    public class Product
    {
        public string query { get; set; }
        public string sort { get; set; }
        public string responseGroup { get; set; }
        public string start { get; set; }
        public int numItems { get; set; }
        public Item[] items;
    }
    
        public class Item
        {
            public int itemId { get; set; }
            public int parentItemId { get; set; }
            public string name { get; set; }
            public float msrp { get; set; }
            public float salePrice { get; set; }
            public string upc { get; set; }
            public string categoryPath { get; set; }
            public string shortDescription { get; set; }
            public string longDescription { get; set; }
            public string thumbnailImage { get; set; }
            public string mediumImage { get; set; }
            public string largeImage { get; set; }
            public string productTrackingUrl { get; set; }
            public float standardShipRate { get; set; }
            public bool marketplace { get; set; }
            public string modelNumber { get; set; }
            public string productUrl { get; set; }
            public string customerRating { get; set; }
            public int numReviews { get; set; }
            public string customerRatingImage { get; set; }
            public string categoryNode { get; set; }
            public string brandName { get; set; }
            public string rhid { get; set; }
            public bool bundle { get; set; }
            public string stock { get; set; }
            public string addToCartUrl { get; set; }
            public string affiliateAddToCartUrl { get; set; }
            public Giftoptions giftOptions { get; set; }
            public Imageentity[] imageEntities { get; set; }
            public string offerType { get; set; }
            public bool isTwoDayShippingEligible { get; set; }
            public bool availableOnline { get; set; }

        }

        public class Giftoptions
        {
            public bool allowGiftWrap { get; set; }
            public bool allowGiftMessage { get; set; }
            public bool allowGiftReceipt { get; set; }
        }

        public class Imageentity
        {
            public string thumbnailImage { get; set; }
            public string mediumImage { get; set; }
            public string largeImage { get; set; }
            public string entityType { get; set; }
        }
    

   

}
