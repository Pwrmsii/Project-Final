# Example file from www.debontonline.com
# Setup Microsoft 365 environment https://developer.microsoft.com/en-us/microsoft-365/dev-program
# Microsoft graph api documentation: https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0


# Minimum Required API permission for execution to list users
# User.Read.All




# Connection information for Graph API connection - specific to Agency
$clientID = "24061091-0881-450e-bb07-cb8c7383a031" #  App Id MS Graph API Connector App registration
$tenantName = "<admin@m365edu162411.onmicrosoft.com" # your tenantname (example: debontonlinedev.onmicrosoft.com)
$clientSecret = "f59ee0ef-67e9-4c28-a4ff-f43f3d7510c8" # Secret MS Graph API Connector App registration
$resource = "https://graph.microsoft.com/"
 
$ReqTokenBody = @{
    Grant_Type    = "client_credentials"
    Scope         = "https://graph.microsoft.com/.default"
    client_Id     = $clientID
    Client_Secret = $clientSecret
} 
 
$TokenResponse = Invoke-RestMethod -Uri "https://login.microsoftonline.com/$tenantName/oauth2/v2.0/token" -Method POST -Body $ReqTokenBody
$TokenAccess = $Tokenresponse.access_token

# Get all Azure AD Users via Microsoft Graph API
$GetUsersUrl = "https://graph.microsoft.com/v1.0/users"
$Data = Invoke-RestMethod -Uri $GetUsersUrl -Headers @{Authorization = "Bearer $($TokenAccess)" }  -Method Get 
$Result = ($Data | select-object Value).Value
$Users = $Result | select DisplayName,UserPrincipalName,Id