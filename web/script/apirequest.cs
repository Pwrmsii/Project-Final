public async Task AuthenticateRequestAsync(HttpRequestMessage request)
{
    var httpContext = _httpContextAccessor.HttpContext;

    string token = await httpContext.GetTokenAsync("access_token");

    string assertionType = "urn:ietf:params:oauth:grant-type:jwt-bearer";

    var user = httpContext.User;
    var claim = user.FindFirst(ClaimTypes.Upn) ?? user.FindFirst(ClaimTypes.Email);
    string userName = claim?.Value;

    var userAssertion = new UserAssertion(token, assertionType, userName);

    var authContext = new AuthenticationContext(_authSettings.Authority);
    var clientCredential = new ClientCredential(_authSettings.ClientId, _authSettings.ClientSecret);

    var result = await authContext.AcquireTokenAsync("https://graph.microsoft.com", clientCredential, userAssertion);

    request.Headers.Authorization = new AuthenticationHeaderValue(result.AccessTokenType, result.AccessToken);
}