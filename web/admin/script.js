document.getElementById('gotopage').addEventListener('click', function() {
    // ตรวจสอบสิทธิ์ของผู้ใช้ และทำการเปลี่ยน URL หากมีสิทธิ์
    if (userHasPermission()) {
        window.location.href = 'หน้าเว็บอื่น.html'; // เปลี่ยน URL ไปยังหน้าเว็บอื่น
    } else {
        alert('คุณไม่มีสิทธิ์เข้าถึงหน้านี้'); // แสดงข้อความแจ้งเตือนหากไม่มีสิทธิ์
    }
});

function userHasPermission() {
    // ตรวจสอบสิทธิ์ของผู้ใช้ และส่งค่าเป็น true หากมีสิทธิ์ หรือ false หากไม่มีสิทธิ์
    return true; // ตัวอย่าง: ให้สมมุติว่าผู้ใช้มีสิทธิ์เข้าถึงเสมอ
}
