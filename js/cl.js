document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dialogOverlay").classList.add("active");
});
function closeDialog() {
    document.getElementById("dialogOverlay").classList.remove("active");
}