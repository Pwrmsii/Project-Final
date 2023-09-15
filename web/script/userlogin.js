// สร้างฟังก์ชันเพื่อดึงข้อมูลผู้ใช้จาก Microsoft Graph API
async function fetchUserData() {
    const token = "YOUR_ACCESS_TOKEN"; // คุณต้องมี Access Token จากการตรวจสอบสิทธิ์กับ Azure AD
    const graphApiEndpoint = "https://graph.microsoft.com/v1.0/me";

    try {
        const response = await fetch(graphApiEndpoint, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (response.ok) {
            const userData = await response.json();
            displayUserData(userData);
        } else {
            console.error("Failed to fetch user data.");
        }
    } catch (error) {
        console.error(error);
    }
}

// ฟังก์ชันเพื่อแสดงข้อมูลผู้ใช้ในการ์ด
function displayUserData(userData) {
    const userImage = document.getElementById("user.image");
    const userName = document.getElementById("user.displayName");
    const userPosition = document.getElementById("user.jobTitle");
    const userEmail = document.getElementById("user.mail");

    userImage.src = userData.photo ? userData.photo : "default-user-image.jpg"; // แสดงรูปภาพผู้ใช้หรือรูปภาพเริ่มต้น
    userName.textContent = userData.displayName ? userData.displayName : "No Name";
    userPosition.textContent = userData.jobTitle ? userData.jobTitle : "No Position";
    userEmail.textContent = userData.mail ? userData.mail : "No Email";
}

// เรียกใช้งานฟังก์ชันเพื่อดึงข้อมูลผู้ใช้เมื่อหน้าเว็บโหลดเสร็จ
window.addEventListener("load", fetchUserData);
