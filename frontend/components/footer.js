function addFooter() {
    const footerHTML = `
        <footer class="text-center mt-4" style="color: black;">
            <p>&copy; 2024 HomeTechAI</p>
        </footer>`;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', function() {
    addFooter();
});
