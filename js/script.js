// Wait for the page to load before applying any animation
document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('main input');
    const mainText = document.querySelector('main p');

    // Simple animation for text appearance in the main section
    mainText.classList.add('fade-in');

    // Animation for input field on focus
    input.addEventListener('focus', function () {
        this.style.borderColor = '#ff5722';
        this.style.boxShadow = '0 0 8px rgba(255, 87, 34, 0.8)';
    });

    input.addEventListener('blur', function () {
        this.style.borderColor = '#ccc';
        this.style.boxShadow = 'none';
    });

    // Implement a basic fade-in effect for main text
    setTimeout(() => {
        mainText.classList.remove('fade-in');
    }, 3000);
});

// Fade-in effect for the main text
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .fade-in {
        animation: fadeIn 2s ease-in-out;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);
