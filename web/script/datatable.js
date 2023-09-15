$(document).ready(function () {
    // สร้าง DataTable
    const dataTable = $('#table').DataTable();

    // เรียกข้อมูลจาก Microsoft Graph API
    $.ajax({
        url: 'https://graph.microsoft.com/v1.0/users', // URL ของ API ที่คุณต้องการเรียก
        headers: {
            'Authorization': 'Bearer ......', // เพิ่ม Access Token ที่ได้จากการอนุญาตแล้ว
        },
        method: 'GET',
        success: function (response) {
            // นำข้อมูลมาแสดงใน DataTable
            response.value.forEach(function (user) {
                dataTable.row.add([
                    user.displayName,
                    user.jobTitle,
                    user.mail,
                    editButton = '<button class="edit-button">Edit</button>',
                    removeButton = '<button class="remove-button">Remove</button>',
                    // เพิ่มข้อมูลจาก response อื่นๆ ตามที่คุณต้องการ
                ]).draw();
            });
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
});
