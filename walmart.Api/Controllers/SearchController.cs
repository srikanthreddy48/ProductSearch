using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using walmart.Api.Models;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;
using walmart.Api.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace walmart.Api.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        List<ProductDetails> ProductList = new List<ProductDetails>();
        private IOptions<Appsettings> _appSettings;
        private readonly SearchService _searchService;
        public SearchController(IOptions<Appsettings> appsettings)
        {
            this._appSettings = appsettings;
            _searchService = new SearchService(_appSettings);
        }
        // GET: Get the Search Results based the entered string.
        [HttpGet]
        [Route("getSearchResults")]
        public IActionResult GetSearchResults(string searchText)
        {

            try
            {
                ProductList = _searchService.GetSearchResults(searchText).Result;
                return Ok(ProductList);
            }
            catch (Exception e)
            {

                return StatusCode(500, e.Message);
            }
        }

        //Get the recommended results based on the selected Product.
        [HttpGet]
        [Route("getRecommendationProducts")]
        public IActionResult GetRecommendationProducts(int itemId)
        {
            try
            {
                ProductList = _searchService.GetRecomendationResults(itemId).Result;
                return Ok(ProductList);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
