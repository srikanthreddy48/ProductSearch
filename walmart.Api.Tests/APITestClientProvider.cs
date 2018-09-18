using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using System;
using System.Net.Http;

namespace walmart.Api.Tests
{
    public class APITestClientProvider : IDisposable
    {
        public HttpClient Client { get;  private set; }

        private TestServer server;

        public APITestClientProvider()
        {
            server = new TestServer(new WebHostBuilder().UseStartup<Startup>());

            Client  =  server.CreateClient();
        }

        public void Dispose()
        {
            server.Dispose();
            Client.Dispose();
        }
    }
}
