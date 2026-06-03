// ==================
// DARK MODE TOGGLE
// ==================
const darkToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');

if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
}

darkToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});


// =======================
// CERTIFICATION MODAL
// =======================
function openCertModal(imgSrc) {
    document.getElementById('certModalImage').src = imgSrc;
    const modal = document.getElementById('certModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}


// ==================================
// LIBRARY MANAGEMENT SYSTEM MODAL
// ==================================
const libSlides = [
    { src: 'Images/LibraryManagementSystem/login.jpg',       caption: 'Login' },
    { src: 'Images/LibraryManagementSystem/dashboard.jpg',   caption: 'Main Dashboard' },
    { src: 'Images/LibraryManagementSystem/listofbooks.jpg', caption: 'List of Books' },
    { src: 'Images/LibraryManagementSystem/addbook.jpg',     caption: 'Add Book' },
    { src: 'Images/LibraryManagementSystem/borrowbook.jpg',  caption: 'Borrow Book' },
    { src: 'Images/LibraryManagementSystem/returnbook.jpg',  caption: 'Return Book' },
];

let libCurrent = 0;

function openLibModal(startIndex) {
    libCurrent = startIndex || 0;
    renderLibSlide();
    renderLibDots();
    const modal = document.getElementById('libModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeLibModal() {
    const modal = document.getElementById('libModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

function changeLibSlide(dir) {
    libCurrent = (libCurrent + dir + libSlides.length) % libSlides.length;
    renderLibSlide();
    renderLibDots();
}

function renderLibSlide() {
    const s = libSlides[libCurrent];
    document.getElementById('libSlideContainer').innerHTML =
        `<img src="${s.src}" class="w-full h-[220px] sm:h-[380px] md:h-[520px] object-contain bg-gray-900" alt="Slide ${libCurrent + 1}"
              onerror="this.style.objectFit='contain';this.style.background='#1f2937'">`;
    document.getElementById('libCaption').textContent = s.caption;
}

function renderLibDots() {
    document.getElementById('libDotWrap').innerHTML = libSlides.map((_, i) =>
        `<div onclick="libCurrent=${i}; renderLibSlide(); renderLibDots()"
            class="w-2 h-2 rounded-full cursor-pointer transition-all duration-200 ${i === libCurrent ? 'bg-blue-400 scale-125' : 'bg-gray-600 hover:bg-gray-400'}"></div>`
    ).join('');
}


// =======================
// KEYBOARD NAVIGATION
// =======================
document.addEventListener('keydown', (e) => {
    // Certification modal
    if (document.getElementById('certModal').classList.contains('flex')) {
        if (e.key === 'Escape') closeCertModal();
    }
    // Library modal
    if (document.getElementById('libModal').classList.contains('flex')) {
        if (e.key === 'ArrowLeft')  changeLibSlide(-1);
        if (e.key === 'ArrowRight') changeLibSlide(1);
        if (e.key === 'Escape')     closeLibModal();
    }
});
