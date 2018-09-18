using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace walmart.Api.Models
{
    public class ProductDetails
    {
        public string name { get; set; }
        public string moddelNumber { get; set; }
        public float salePrice { get; set; }
        
        public string BrandName { get; set; }

        public string  ThumbnailImg { get; set; }
        public string MediumImage  { get; set; }
        public string Description { get; set; }

        public int ItemId { get; set; }
    }
}
