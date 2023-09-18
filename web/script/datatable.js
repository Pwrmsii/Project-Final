$(document).ready(function() {
    // ดึงข้อมูลจากฐานข้อมูล Portal Azure ผ่าน Graph API และนำมาแสดงใน DataTable
    $.ajax({
        url: 'https://graph.microsoft.com/v1.0/users', // URL ของ API ที่คุณต้องการเรียก
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkN0VXpxLWRLenFjaFJyeHI5R3NMVGwzd29jY2RvdDdWUmZ6LWFZbF8wTWsiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81YzFmOTMwMy05OGI3LTQ2NTEtOTRiNC0zYjg0MzEyYTMwNTAvIiwiaWF0IjoxNjk1MDI2OTUwLCJuYmYiOjE2OTUwMjY5NTAsImV4cCI6MTY5NTExMzY1MCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQWw5R3VycERxOUZlMnFJMk5oQ0NJKzh0MGVIdTZLM29OQ0MwQWxOTGhGMEhoU0hhWGtRQVpPMUtkUVppSFVjcGsiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IihJVCkiLCJnaXZlbl9uYW1lIjoiQnJ1bm8iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxODMuODguMTc2LjE1MSIsIm5hbWUiOiJCcnVubyAoSVQpIiwib2lkIjoiYjAzNjFjODAtYWQ0Ni00ZjM2LWJjYmItYzY4NjI4OGM5YmVjIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAyOEFCNUQ5QzgiLCJyaCI6IjAuQVVvQUE1TWZYTGVZVVVhVXREdUVNU293VUFNQUFBQUFBQUFBd0FBQUFBQUFBQUNKQUQwLiIsInNjcCI6IkFQSUNvbm5lY3RvcnMuUmVhZFdyaXRlLkFsbCBEZXZpY2VNYW5hZ2VtZW50QXBwcy5SZWFkV3JpdGUuQWxsIERldmljZU1hbmFnZW1lbnRDb25maWd1cmF0aW9uLlJlYWRXcml0ZS5BbGwgRGV2aWNlTWFuYWdlbWVudE1hbmFnZWREZXZpY2VzLlJlYWRXcml0ZS5BbGwgRGV2aWNlTWFuYWdlbWVudFNlcnZpY2VDb25maWcuUmVhZFdyaXRlLkFsbCBEaXJlY3RvcnkuUmVhZC5BbGwgRGlyZWN0b3J5LlJlYWRXcml0ZS5BbGwgb3BlbmlkIHByb2ZpbGUgVXNlci5SZWFkIFVzZXIuUmVhZFdyaXRlLkFsbCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Im82VVdtQVFqNlhqZXJZSUpUdTFOejJZbnFFQzhoMkU5aUdrTDJGUlBuUlkiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI1YzFmOTMwMy05OGI3LTQ2NTEtOTRiNC0zYjg0MzEyYTMwNTAiLCJ1bmlxdWVfbmFtZSI6ImFkbWluQE0zNjVFRFUxNjI0MTEub25taWNyb3NvZnQuY29tIiwidXBuIjoiYWRtaW5ATTM2NUVEVTE2MjQxMS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJ4TTZ4ek5BX3gwR1p0QWwzSW1nSEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfc3NtIjoiMSIsInhtc19zdCI6eyJzdWIiOiI3SDRSbXFMTmpyNVFrRjhmcTFZUzVONGdSQkw1cEp2OXM1dkhteWJ0cWRNIn0sInhtc190Y2R0IjoxNjc5NjUxNTU3fQ.PIIKN4KzOvEnsYAniDspOawjK6UKTeuPJG8R73V1QV7UWHTRSt8EIoWgner5vwSI0dKbyUDo7ZOY8asmWQQkkcV1qRU0sGIcQ2hSrujsecfKBV0wiD9ju2FOsPXv_g_vdp_AjUm5wQ_yJ0kVSI9IkEzn2x_HeM96Rzr9r20v5YjH580GFQMt_8h2DzDrPJFJCSDQSx33LFvq5YtRo_LXem0WOMhjNk9wqsYICJvXUg8Z2oZe3PsdrqqYYJ-eLoNIZe81MO_1gBE61iXMOELR-2RFIKIAW0vKh9LxTLuwSfEnmUrK85pnjqEEXSkNyZwrbAiX6h2MqncnvlJxySY4aw', // เพิ่ม Access Token ที่ได้จากการอนุญาตแล้ว
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
