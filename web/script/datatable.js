$(document).ready(function() {
    $('#table').DataTable({
        "ajax": {
            "url": "https://graph.microsoft.com/v1.0/users",
            "dataType": "json",
            "headers": {
                "Authorization": "Bearer ........."
            },
            "dataSrc": "value" // ใช้ "value" เพื่อให้ DataTables รับข้อมูลจาก "value" ใน JSON ที่ได้รับ
        },
        "columns": [
            { "data": "displayName" }, // กำหนดคอลัมน์ที่คุณต้องการแสดงในตาราง
            { "data": "jobTitle" },
            { "data": "mail" },
            // เพิ่มคอลัมน์อื่น ๆ ตามที่คุณต้องการ
        ]
    });
});
