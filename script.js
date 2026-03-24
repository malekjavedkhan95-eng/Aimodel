document.addEventListener('DOMContentLoaded', () => {
    
    // Search elements ko pakadna
    const searchInput = document.getElementById('searchInput');
    const toolCards = document.querySelectorAll('.tool-card');

    // Jab bhi user search bar mein kuch type karega, ye function chalega
    searchInput.addEventListener('input', (e) => {
        // User ne jo likha use lowercase mein convert karna taaki easily match ho sake
        const searchText = e.target.value.toLowerCase();

        // Har ek tool card ko check karna
        toolCards.forEach(card => {
            // Card ka title aur hidden category tags nikalna
            const title = card.querySelector('h3').innerText.toLowerCase();
            const category = card.getAttribute('data-category').toLowerCase();

            // Agar search text title ya category se match karta hai, toh dikhao, warna chupao
            if (title.includes(searchText) || category.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

});
