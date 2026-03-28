// Dark Mode Toggle
const darkToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
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

// Chat Widget
const toggleChat = document.getElementById('toggle-chat');
const closeChat = document.getElementById('close-chat');
const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');

toggleChat.addEventListener('click', () => {
    chatWindow.classList.remove('hidden');
    messageInput.focus();
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
});

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userMsg = messageInput.value.trim();
    if (!userMsg) return;

    // Add user message
    chatBox.innerHTML += `
        <div class="bg-black text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-[85%] ml-auto">
            ${userMsg}
        </div>`;
    
    messageInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // Add AI thinking bubble
    const aiId = 'ai-' + Date.now();
    chatBox.innerHTML += `
        <div id="${aiId}" class="bg-white p-3 rounded-2xl rounded-tl-none border text-sm max-w-[85%]">
            <span class="text-gray-400">Typing...</span>
        </div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate AI response (replace with your actual API call)
    setTimeout(() => {
        document.getElementById(aiId).innerText = "Thanks for your message! I'm currently in demo mode.";
    }, 1000);
});

// Certification Modal
function openModal(imgSrc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imgSrc;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('certModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Close modal when clicking on backdrop
document.getElementById('certModal').addEventListener('click', (e) => {
    if (e.target.id === 'certModal') closeModal();
});
