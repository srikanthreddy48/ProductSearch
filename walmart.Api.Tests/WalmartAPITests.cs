using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using walmart.Api.Services;
using Xunit;

namespace walmart.Api.Tests
{
    public class WalmartAPITests
    {

        [Fact]
        public async Task TestGetSearchResults()
        {
            using (var client = new APITestClientProvider().Client)
            {
                var response = await client.GetAsync("api/Search/getSearchResults/searchText=Ipod");
                response.EnsureSuccessStatusCode();
                response.StatusCode.Should().Be(HttpStatusCode.OK);
                //Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            }
        }

        [Fact]
        public async Task TestGetRecomendationResults()
        {
            using (var client = new APITestClientProvider().Client)
            {
                var response = await client.GetAsync("api/Search/getRecommendationProducts/itemId=715039016");
                response.EnsureSuccessStatusCode();
                response.StatusCode.Should().Be(HttpStatusCode.OK);
                //Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            }
        }

        [Fact]
        public void CheckGetSearchResults()
        {
            var searchService = new SearchService();
            var result = searchService.GetSearchResults("Ipod");

            Assert.True(result != null);
        }

        [Fact]
        public void CheckGetRecomendationResults()
        {
            var searchService = new SearchService();

            var result = searchService.GetRecomendationResults(715039016);

            Assert.True(result != null);
        }


        [Fact]
        public void CheckGetRecomendationResults2()
        {
            var searchService = new SearchService();
            var result = searchService.GetRecomendationResults(573609844);

            Assert.True(result != null);
        }

        
    }
}
