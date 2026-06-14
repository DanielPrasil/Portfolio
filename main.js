const links = document.querySelectorAll('.nav-links a[data-page]');
const pages = document.querySelectorAll('.page-content');
const wrapper = document.getElementById('page-wrapper');

function showPage(pageId) {
    // Hide all pages
    pages.forEach(p => p.classList.remove('active-page'));
    // Show target
    document.getElementById('page-' + pageId).classList.add('active-page');
    // Update active nav link
    links.forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
    // Scroll to top
    window.scrollTo(0, 0);
}

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(this.dataset.page);
    });
});