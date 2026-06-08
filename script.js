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
    { src: 'Images/LibraryManagementSystem/overdue.jpg',  caption: 'Overdue Book' },
    { src: 'Images/LibraryManagementSystem/lostbook.jpg',  caption: 'Lost Book' },
    { src: 'Images/LibraryManagementSystem/damagedbook.jpg',  caption: 'Damaged Book' },
    { src: 'Images/LibraryManagementSystem/bookfine.jpg',  caption: 'Book Fine' },
    { src: 'Images/LibraryManagementSystem/replacebook.jpg',  caption: 'Replace Book' },
    { src: 'Images/LibraryManagementSystem/studentregistration.jpg',  caption: 'Student Registration' },
    { src: 'Images/LibraryManagementSystem/studentlogs.jpg',  caption: 'Timein/Timeout' },
    { src: 'Images/LibraryManagementSystem/studentbook.jpg',  caption: 'Search Books' },
    { src: 'Images/LibraryManagementSystem/addaccount.jpg',  caption: 'Account' },
    { src: 'Images/LibraryManagementSystem/activitylogs.jpg',  caption: 'Activity Logs' },
    { src: 'Images/LibraryManagementSystem/navigationmenus.jpg',  caption: 'Navigation Menus' }
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


// ==================================
// MOCKEXAM PORTAL
// ==================================
const mockSlides = [
    { src: 'Images/MockExamPortal/welcome.jpg',       caption: 'Welcome Page' },
    { src: 'Images/MockExamPortal/createaccount.jpg',   caption: 'Sign Up' },
    { src: 'Images/MockExamPortal/signin.jpg', caption: 'Sign In' },
    { src: 'Images/MockExamPortal/dashboard.jpg',     caption: 'Admin Dashboard' },
    { src: 'Images/MockExamPortal/exams.jpg',  caption: 'Exams' },
    { src: 'Images/MockExamPortal/createexam.jpg',  caption: 'Create Exam' },
    { src: 'Images/MockExamPortal/questions.jpg',  caption: 'Create Questions' },
    { src: 'Images/MockExamPortal/result.jpg',  caption: 'Result' },
    { src: 'Images/MockExamPortal/users.jpg',  caption: 'Users' },
    { src: 'Images/MockExamPortal/activitylogs.jpg',  caption: 'Activity Logs' },
    { src: 'Images/MockExamPortal/studentdashboard.jpg',  caption: 'Student Dashboard' },
    { src: 'Images/MockExamPortal/studentexam.jpg',  caption: 'Browse Exam' },
    { src: 'Images/MockExamPortal/takingexam.jpg',  caption: 'Student Exam' },
    { src: 'Images/MockExamPortal/examhistory.jpg',  caption: 'Exam History' },
    { src: 'Images/MockExamPortal/reviewanswer.jpg',  caption: 'Review' }
];

let mockCurrent = 0;

function openMockModal(startIndex) {
    mockCurrent = startIndex || 0;
    renderMockSlide();
    renderMockDots();
    const modal = document.getElementById('mockModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeMockModal() {
    const modal = document.getElementById('mockModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

function changeMockSlide(dir) {
    mockCurrent = (mockCurrent + dir + mockSlides.length) % mockSlides.length;
    renderMockSlide();
    renderMockDots();
}

function renderMockSlide() {
    const s = mockSlides[mockCurrent];
    document.getElementById('mockSlideContainer').innerHTML =
        `<img src="${s.src}" class="w-full h-[220px] sm:h-[380px] md:h-[520px] object-contain bg-gray-900" alt="Slide ${mockCurrent + 1}"
              onerror="this.style.objectFit='contain';this.style.background='#1f2937'">`;
    document.getElementById('mockCaption').textContent = s.caption;
}

function renderMockDots() {
    document.getElementById('mockDotWrap').innerHTML = mockSlides.map((_, i) =>
        `<div onclick="mockCurrent=${i}; renderMockSlide(); renderMockDots()"
            class="w-2 h-2 rounded-full cursor-pointer transition-all duration-200 ${i === mockCurrent ? 'bg-blue-400 scale-125' : 'bg-gray-600 hover:bg-gray-400'}"></div>`
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
