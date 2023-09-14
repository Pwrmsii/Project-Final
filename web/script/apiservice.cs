public async Task<User> GetUserProfileAsync()
{
    var client = new GraphServiceClient(_msGraphAuthenticationProvider);
    return await client.Me.Request().GetAsync();
}

public async Task<List<User>> SearchUsersAsync(string search, int limit)
{
    var client = new GraphServiceClient(_msGraphAuthenticationProvider);
    var users = new List<User>();

    var currentReferencesPage = await client.Users
        .Request()
        .Top(limit)
        .Filter($"startsWith(displayName, '{search}') or startswith(mail, '{search}')")
        .GetAsync();

    users.AddRange(currentReferencesPage);

    return users;
}