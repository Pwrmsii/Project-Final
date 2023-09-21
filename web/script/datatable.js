// Function สำหรับดึงข้อมูลผู้ใช้
async function fetchUsers() {
    try {
        const response = await fetch('https://graph.microsoft.com/v1.0/users', {
            headers: {
                'Authorization': 'Bearer accesstoken', // เปลี่ยน YOUR_ACCESS_TOKEN เป็น Access Token ที่ได้จากการตรวจสอบตัวตน
            },
        });

        if (!response.ok) {
            throw new Error('ไม่สามารถดึงข้อมูลผู้ใช้ได้');
        }

        const data = await response.json();

        // เรียกฟังก์ชันสำหรับแสดงข้อมูลผู้ใช้ในตาราง
        displayUsers(data.value);
    } catch (error) {
        console.error('เกิดข้อผิดพลาด: ', error.message);
    }
}

// Function สำหรับแสดงข้อมูลผู้ใช้ในตาราง
function displayUsers(users) {
    const userTableBody = document.getElementById('usertable');

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.displayName}</td>
            <td>${user.jobTitle}</td>
            <td>${user.mail}</td>
            <td>
                <button class="edit-button" data-user-id="${user.id}">Edit</button>
                <button class="remove-button" data-user-id="${user.id}">Remove</button>
            </td>
        `;

        userTableBody.appendChild(row);
    });
}

// เรียกฟังก์ชันเพื่อดึงข้อมูลผู้ใช้เมื่อหน้าเว็บโหลด
window.addEventListener('load', () => {
    fetchUsers();
});
