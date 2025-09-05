const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");

toggleBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("active");
        sidebar.classList.remove("collapsed");
    } else {
        sidebar.classList.toggle("collapsed");
        sidebar.classList.remove("active");
    }
});

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
}
