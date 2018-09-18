using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using walmart.Api.Models;

namespace walmart.Api.Services
{
    public class SearchService
    {
        List<ProductDetails> ProductList = new List<ProductDetails>();

        List<ProductDetails> RecommendedProductList = new List<ProductDetails>();

        private IOptions<Appsettings> _settings;
        public SearchService(IOptions<Appsettings> appSettings)
        {
            this._settings = appSettings;
        }

        public SearchService()
        {
        }

        public async Task<List<ProductDetails>> GetSearchResults(string searchText)
        {
            if ((searchText != "") && (searchText != null))
            {

                string SearchAPI = _settings.Value.SearchAPI;
                SearchAPI = string.Format(SearchAPI, searchText);
                HttpResponseMessage response;
                using (HttpClient client = new HttpClient())
                {
                    response = await client.GetAsync(SearchAPI);
                }
                var result = response.Content.ReadAsStringAsync().Result;

                Product productArray = JsonConvert.DeserializeObject<Product>(result);
                // Loop through the List to get the 10 items from the responce.
                for (int i = 0; i <= 9; i++)
                {
                    ProductDetails singleproductDetail = new ProductDetails();
                    Item LookUpItem = new Item();
                    singleproductDetail.ItemId = productArray.items[i].itemId;
                    string LookUpAPI = _settings.Value.LookUpAPI;
                    LookUpAPI = string.Format(LookUpAPI, singleproductDetail.ItemId);
                    HttpResponseMessage lookUpResponse;
                    using (HttpClient client = new HttpClient())
                    {
                        lookUpResponse = await client.GetAsync(LookUpAPI);
                    }
                    var lookUpResult = lookUpResponse.Content.ReadAsStringAsync().Result;

                    LookUpItem = JsonConvert.DeserializeObject<Item>(lookUpResult);
                    singleproductDetail.Description = LookUpItem.shortDescription;
                    singleproductDetail.name = LookUpItem.name;
                    singleproductDetail.salePrice = LookUpItem.salePrice;
                    singleproductDetail.MediumImage = LookUpItem.mediumImage;
                    singleproductDetail.ThumbnailImg = LookUpItem.thumbnailImage;
                    singleproductDetail.BrandName = LookUpItem.brandName;
                    singleproductDetail.moddelNumber = LookUpItem.modelNumber;
                    ProductList.Add(singleproductDetail);

                }

            }

            return ProductList;
        }


        //Sarch Results based on the selected Item.
        public async Task<List<ProductDetails>> GetRecomendationResults(int itemId)
        {
            string ProductRecommendationAPI = _settings.Value.ProductRecommendationAPI;
            ProductRecommendationAPI = string.Format(ProductRecommendationAPI,itemId);
            Item[] ProductRecommendationItems = null;

            HttpResponseMessage ProductRecomendationResponse;
            using (HttpClient client = new HttpClient())
            {
                ProductRecomendationResponse = await client.GetAsync(ProductRecommendationAPI);
            }
            var ProductRecommendationResult = ProductRecomendationResponse.Content.ReadAsStringAsync().Result;

            ProductRecommendationItems = JsonConvert.DeserializeObject<Item[]>(ProductRecommendationResult);

            // Choose 10 recommended items from the List.
            for (int i = 0; i <= 9; i++)
            {
                ProductDetails singleproductDetail = new ProductDetails();
                
                singleproductDetail.ItemId = ProductRecommendationItems[i].itemId;
                singleproductDetail.Description = ProductRecommendationItems[i].shortDescription;
                singleproductDetail.name = ProductRecommendationItems[i].name;
                singleproductDetail.salePrice = ProductRecommendationItems[i].salePrice;
                singleproductDetail.MediumImage = ProductRecommendationItems[i].mediumImage;
                singleproductDetail.BrandName = ProductRecommendationItems[i].brandName;
                singleproductDetail.moddelNumber = ProductRecommendationItems[i].modelNumber;

                RecommendedProductList.Add(singleproductDetail);
            }

            return RecommendedProductList;

        }
    }
}
