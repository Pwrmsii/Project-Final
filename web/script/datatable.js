$(document).ready(function() {
    // ดึงข้อมูลจากฐานข้อมูล Portal Azure ผ่าน Graph API และนำมาแสดงใน DataTable
    $.ajax({
        url: 'https://graph.microsoft.com/v1.0/users', // URL ของ API ที่คุณต้องการเรียก
        headers: {
            'Authorization': 'Bearer access-token', // เพิ่ม Access Token ที่ได้จากการอนุญาตแล้ว
        },
        method: 'GET',
        success: function(response) {
            const dataTable = $('#employee-table').DataTable();

            response.value.forEach(function(user) {
                // สร้างปุ่มแก้ไขและลบ
                const editButton = '<button class="edit-button" data-id="' + user.id + '">Edit</button>';
                const removeButton = '<button class="remove-button" data-id="' + user.id + '">Remove</button>';

                // เพิ่มข้อมูลลงใน DataTable
                dataTable.row.add([
                    user.displayName,
                    user.jobTitle,
                    user.mail,
                    editButton + ' ' + removeButton
                ]).draw();
            });
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
});
