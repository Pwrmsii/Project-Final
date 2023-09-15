$(document).ready(function () {
    // สร้าง DataTable
    const dataTable = $('#table').DataTable();

    // เรียกข้อมูลจาก Microsoft Graph API
    $.ajax({
        url: 'https://graph.microsoft.com/v1.0/users', // URL ของ API ที่คุณต้องการเรียก
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6Ik5OMmJiNTVDU0ktRi1xbXhqc091Sks4RTBuOERYWnZ2Z05faFU4M055Q1kiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81YzFmOTMwMy05OGI3LTQ2NTEtOTRiNC0zYjg0MzEyYTMwNTAvIiwiaWF0IjoxNjk0NzY2NDMzLCJuYmYiOjE2OTQ3NjY0MzMsImV4cCI6MTY5NDg1MzEzMywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQVNJR2Q4WE5MVkRuUUQrak5UdmFTSyt3d1NTWVB5eVNzR0lEcVNpa3RGUlkrK2tMaURjeStLdmZMMUIvbXk3dnoiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IihJVCkiLCJnaXZlbl9uYW1lIjoiQnJ1bm8iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI0OS4yMzEuMTkuMjM4IiwibmFtZSI6IkJydW5vIChJVCkiLCJvaWQiOiJiMDM2MWM4MC1hZDQ2LTRmMzYtYmNiYi1jNjg2Mjg4YzliZWMiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDI4QUI1RDlDOCIsInJoIjoiMC5BVW9BQTVNZlhMZVlVVWFVdER1RU1Tb3dVQU1BQUFBQUFBQUF3QUFBQUFBQUFBQ0pBRDAuIiwic2NwIjoiQVBJQ29ubmVjdG9ycy5SZWFkV3JpdGUuQWxsIERldmljZU1hbmFnZW1lbnRBcHBzLlJlYWRXcml0ZS5BbGwgRGV2aWNlTWFuYWdlbWVudENvbmZpZ3VyYXRpb24uUmVhZFdyaXRlLkFsbCBEZXZpY2VNYW5hZ2VtZW50TWFuYWdlZERldmljZXMuUmVhZFdyaXRlLkFsbCBEZXZpY2VNYW5hZ2VtZW50U2VydmljZUNvbmZpZy5SZWFkV3JpdGUuQWxsIERpcmVjdG9yeS5SZWFkLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQgVXNlci5SZWFkV3JpdGUuQWxsIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoibzZVV21BUWo2WGplcllJSlR1MU56MllucUVDOGgyRTlpR2tMMkZSUG5SWSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJBUyIsInRpZCI6IjVjMWY5MzAzLTk4YjctNDY1MS05NGI0LTNiODQzMTJhMzA1MCIsInVuaXF1ZV9uYW1lIjoiYWRtaW5ATTM2NUVEVTE2MjQxMS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZG1pbkBNMzY1RURVMTYyNDExLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IndqUG5ETEprV2tHODVtN01qTWtqQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc19zc20iOiIxIiwieG1zX3N0Ijp7InN1YiI6IjdINFJtcUxOanI1UWtGOGZxMVlTNU40Z1JCTDVwSnY5czV2SG15YnRxZE0ifSwieG1zX3RjZHQiOjE2Nzk2NTE1NTd9.HugYAs0kAS4oH0uTKD2zq5Bdt4ljBnm08-4n_4gvi8F-TjgVCngDwvR3wOS5M_pjKX-dGolRkfFpj3NmyNTEqmZnyNaYQtBVjlyWlh8qz7gzbyztVHfIRN4s59HeiUMcMRrMkhs5YHqDc2cSXYx8507OiPUIc55sE_06nPjEvcSAqDJ0Ubq7eM_N6neArWyMk3eULc0pzH45Z-Kcs_Xpgn8ZrNpcEzt5IkAJ4Cyu_drPjT-BmP-D7TovvT9vuSS3scU8CRyuJIuJcYxMRIE3NEqe6X0LPXlusriYJ0TkHaTQuuGZRr9jz_pYLPnBngMFpKCxQD26Y9WmGjrclRvolA', // เพิ่ม Access Token ที่ได้จากการอนุญาตแล้ว
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
