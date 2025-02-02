function closeDialog() {
    document.getElementById("dialogOverlay").style.display = "none";
    let cards = document.querySelectorAll(".u-card");
    cards.forEach(card => {
        card.style.display = "block";
    });
}
