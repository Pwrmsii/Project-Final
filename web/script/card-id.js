// Replace with your Azure AD app's client ID and client secret
const clientId = '.........';
const clientSecret = '.........';
const scopes = ['https://graph.microsoft.com/.default'];

const msalConfig = {
    auth: {
        clientId,
        authority: 'https://login.microsoftonline.com/tanent',
        clientSecret,
    },
};

const msalApplication = new msal.PublicClientApplication(msalConfig);

const request = {
    scopes,
};

msalApplication
    .acquireTokenByClientCredential(request)
    .then((response) => {
        const accessToken = response.accessToken;
        getUserProfile(accessToken);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

function getUserProfile(accessToken) {
    fetch('https://graph.microsoft.com/v1.0/me', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const profileImage = document.getElementById('profile-image');
            const userName = document.getElementById('user-name');
            const jobTitle = document.getElementById('job-title');
            const userEmail = document.getElementById('user-email');

            profileImage.src = data.photo ? data.photo : 'default-profile-image.png';
            userName.textContent = data.displayName;
            jobTitle.textContent = data.jobTitle ? data.jobTitle : 'Job Title Not Provided';
            userEmail.textContent = data.mail ? data.mail : 'Email Not Provided';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
