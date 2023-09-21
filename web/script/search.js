// รับอ้างอิงไปยังช่องค้นหาและตาราง
const searchInput = document.getElementById('searchInput');
const dataTable = document.getElementById('table').DataTable();

// เพิ่มกฎของช่องค้นหา
searchInput.addEventListener('keyup', function () {
    const keyword = this.value.toLowerCase(); // รับคำค้นหาและแปลงเป็นตัวพิมพ์เล็ก

    // ค้นหาและแสดงผลในตาราง
    dataTable.search(keyword).draw();
});
