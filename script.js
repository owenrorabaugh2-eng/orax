<!-- =========================== script.js =========================== -->
<script>
// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger) {
hamburger.addEventListener('click', () => {
const isOpen = nav.style.display === 'flex' || nav.style.display === '' && getComputedStyle(nav).display === 'flex';
nav.style.display = isOpen ? 'none' : 'flex';
});
}


// Category filtering
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
buttons.forEach(btn => btn.addEventListener('click', () => {
buttons.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const f = btn.dataset.filter;
cards.forEach(card => {
const match = f === 'all' || card.dataset.cat === f;
card.style.display = match ? '' : 'none';
});
}));


// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
</script>
