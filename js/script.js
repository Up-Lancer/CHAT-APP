
const emojiBtn = document.getElementById('emoji-btn');
const emojiList = document.querySelector('.emoji-list');
const inputField = document.querySelector('.input-container input');

emojiBtn.addEventListener('click', () => {
    emojiList.style.display = emojiList.style.display === 'block' ? 'none' : 'block';
});

emojiList.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        inputField.value += event.target.textContent;
        emojiList.style.display = 'none';
    }
});


sendBtn.addEventListener('click', () => {
    const messageText = inputField.value.trim();
    if (messageText) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('d-flex', 'flex-column', 'message', 'receiver');

        const textSpan = document.createElement('span');
        textSpan.classList.add('text');
        textSpan.textContent = messageText;

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('time');
        const currentTime = new Date();
        timeSpan.textContent = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.appendChild(textSpan);
        messageDiv.appendChild(timeSpan);
        chatContainer.appendChild(messageDiv);

        inputField.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});



// ملف script.js

// const mobileMenu = document.getElementById('mobile-menu');
// const navbar = document.querySelector('.navbar');

// mobileMenu.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });