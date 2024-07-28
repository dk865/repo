//Welcome to my Lair!

// Use Canvas Confetti Script to create confetti when the user has the correct decision to add my repo
function createConfetti(color) {
    return function(event) {
        confetti({
            particleCount: 15,
            spread: 70,
            origin: {
                x: event.clientX / window.innerWidth,
                y: event.clientY / window.innerHeight
            },
            colors: [color]
        });
    };
}

const buttons = document.querySelectorAll('.button');

// Emits 1 confetti piece when they hover a mouse over it (hmmm... not useful for a mobile device adding my repo...)
function createHoverConfetti(color) {
    return function(event) {
        confetti({
            particleCount: 1,
            spread: 20,
            origin: {
                x: event.clientX / window.innerWidth,
                y: event.clientY / window.innerHeight
            },
            colors: [color]
        });
    };
}

buttons.forEach(button => {
    let color;
    if (button.classList.contains('button-blue')) {
        color = '#00d9ff';
    } else if (button.classList.contains('button-purple')) {
        color = '#b64bfd';
    } else if (button.classList.contains('button-red')) {
        color = '#ff9d4e';
    } else if (button.classList.contains('button-brown-orange')) {
        color = '#ffc400';
    }

    button.addEventListener('click', createConfetti(color));
    button.addEventListener('mouseover', createHoverConfetti(color));
});


// Platform detection
const platform = navigator.platform.toLowerCase();
const iosButtons = document.getElementById('ios-buttons');
const altOption = document.getElementById('alt-option');
const linuxRepo = document.getElementById('linux-repo');

if (platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod') || platform.includes('linux')) {
    iosButtons.style.display = 'flex';
    altOption.style.display = 'block';
    linuxRepo.style.display = 'block';
} else {
    iosButtons.style.display = 'none';
    altOption.style.display = 'none';
    linuxRepo.style.display = 'none';
}