

function openMenu() {
  document.getElementById("sideMenu").style.left = "20px";
  document.getElementById("menuOverlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sideMenu").style.left = "-320px";
  document.getElementById("menuOverlay").style.display = "none";
}



const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.blog-card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    // ✅ Active button styling reset
    buttons.forEach(b => {
      b.classList.remove('border-[#b8965a]', 'text-[#b8965a]', 'bg-white');
      b.classList.add('border-[#d6d3cc]', 'text-[#6b6b6b]');
    });

    // ✅ Active button highlight
    btn.classList.add('border-[#b8965a]', 'text-[#b8965a]', 'bg-white');
    btn.classList.remove('border-[#d6d3cc]', 'text-[#6b6b6b]');

    const filter = btn.getAttribute('data-filter');

    // ✅ Filter cards
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});