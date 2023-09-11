// ใช้ event listener เพื่อเรียกใช้ฟังก์ชันเมื่อปุ่มถูกคลิก
document.getElementById('connect').addEventListener('click', connectToDatabase);

const sql = require('mssql');

const config = {
    server: 'http://localhost:81/',
    database: '5c1f9303-98b7-4651-94b4-3b84312a3050',
    user: 'admin@M365EDU162411.onmicrosoft.com',
    password: '4A+d%EP]22q:e0Fx',
    options: {
        encrypt: true // ใช้การเข้ารหัส SSL
    }
};

sql.connect(config, (err) => {
    if (err) {
        console.error('การเชื่อมต่อล้มเหลว:', err);
        return;
    }

    // ทำงานกับฐานข้อมูลที่นี่
});


// ตัวอย่างโค้ด JavaScript สำหรับเรียกใช้ Microsoft Graph API
const clientId = '21aac38b-944f-4f21-9c6c-41298a0e2abd';
const clientSecret = '749b2df7-6df4-4932-9eb7-7fd57d2f341f';
const scopes = ['https://graph.microsoft.com/.default']; // สิทธิ์ของแอปพลิเคชัน

async function getToken() {
  const tokenUrl = `https://login.microsoftonline.com/5c1f9303-98b7-4651-94b4-3b84312a3050/oauth2/v2.0/token`;

  const formData = new URLSearchParams();
  formData.append('client_id', clientId);
  formData.append('scope', scopes.join(' '));
  formData.append('client_secret', clientSecret);
  formData.append('grant_type', 'client_credentials');

  const response = await fetch(tokenUrl, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to obtain access token');
  }

  const data = await response.json();
  return data.access_token;
}

async function callGraphAPI() {
  const accessToken = await getToken();

  //const apiUrl = 'https://graph.microsoft.com/v1.0/me'; // เปลี่ยนเป็น API URL ที่ต้องการเรียกใช้
  const apiUrl = 'http://localhost:81/';

  const graphResponse = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!graphResponse.ok) {
    throw new Error('Failed to fetch data from Microsoft Graph API');
  }

  const userData = await graphResponse.json();
  console.log('User data:', userData);
}

// เรียกใช้งานฟังก์ชันเมื่อคลิกปุ่มหรือเหตุการณ์อื่น
document.getElementById('callGraphButton').addEventListener('click', callGraphAPI);

