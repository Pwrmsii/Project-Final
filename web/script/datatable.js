$(document).ready(function() {
    $('#table').DataTable({
        "ajax": {
            "url": "https://graph.microsoft.com/v1.0/users",
            "dataType": "json",
            "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6InAxaVBidEdjenYtSHRGY0JtWS1HNVY4SGNXQ2hwMHVDdFhlSlYwazNpckUiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81YzFmOTMwMy05OGI3LTQ2NTEtOTRiNC0zYjg0MzEyYTMwNTAvIiwiaWF0IjoxNjk1NDA2NTU0LCJuYmYiOjE2OTU0MDY1NTQsImV4cCI6MTY5NTQ5MzI1NCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQS9WclhiekcxVWdydko4cjRZeTBkTmRyY0dmeG4rbDE1cW9OZ1huYzh6YUVrYjdPVy81a1A4N01SaXFESnllK0UiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IihJVCkiLCJnaXZlbl9uYW1lIjoiQnJ1bm8iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxODMuODguMTc5Ljg3IiwibmFtZSI6IkJydW5vIChJVCkiLCJvaWQiOiJiMDM2MWM4MC1hZDQ2LTRmMzYtYmNiYi1jNjg2Mjg4YzliZWMiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDI4QUI1RDlDOCIsInJoIjoiMC5BVW9BQTVNZlhMZVlVVWFVdER1RU1Tb3dVQU1BQUFBQUFBQUF3QUFBQUFBQUFBQ0pBRDAuIiwic2NwIjoiQVBJQ29ubmVjdG9ycy5SZWFkV3JpdGUuQWxsIERldmljZU1hbmFnZW1lbnRBcHBzLlJlYWRXcml0ZS5BbGwgRGV2aWNlTWFuYWdlbWVudENvbmZpZ3VyYXRpb24uUmVhZFdyaXRlLkFsbCBEZXZpY2VNYW5hZ2VtZW50TWFuYWdlZERldmljZXMuUmVhZFdyaXRlLkFsbCBEZXZpY2VNYW5hZ2VtZW50U2VydmljZUNvbmZpZy5SZWFkV3JpdGUuQWxsIERpcmVjdG9yeS5SZWFkLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQgVXNlci5SZWFkLkFsbCBVc2VyLlJlYWRXcml0ZS5BbGwgZW1haWwiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJvNlVXbUFRajZYamVyWUlKVHUxTnoyWW5xRUM4aDJFOWlHa0wyRlJQblJZIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFTIiwidGlkIjoiNWMxZjkzMDMtOThiNy00NjUxLTk0YjQtM2I4NDMxMmEzMDUwIiwidW5pcXVlX25hbWUiOiJhZG1pbkBNMzY1RURVMTYyNDExLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbWluQE0zNjVFRFUxNjI0MTEub25taWNyb3NvZnQuY29tIiwidXRpIjoiVW1NeDhqcDF1MG14V0MxM1N0UWxBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3NzbSI6IjEiLCJ4bXNfc3QiOnsic3ViIjoiN0g0Um1xTE5qcjVRa0Y4ZnExWVM1TjRnUkJMNXBKdjlzNXZIbXlidHFkTSJ9LCJ4bXNfdGNkdCI6MTY3OTY1MTU1N30.JFG5xf2mt6ipvmOwVUwtnEUwXJuIJpUMgENC-plsvaZdAc3ezTmL6UeiQYgwEdOuCHlrHFN17_9Pm6s_LyrSoGvektLcyVDpCbiUo4nQBYmGCE0CuGW9XiAxxgez-xwljgj86bi-snxhT-6RMakZjJN8fqN70cKtdQisChDjanwKa4x9GInR9SkQDQkZPNC7KM19MHnfyRNNSJCCghxiLVksYdVU3J63aqyTW9YVIh9BSSucoJ_AeZwnCuOU-a7cKj96o6bSaQJXvvOpNxqarBnjrLd8Z1mBERFXIv8EF0CbRCJLzJo8tcEAwpI3S9sMM1Q04Xb_FZhjwEeHHxe8jw"
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
