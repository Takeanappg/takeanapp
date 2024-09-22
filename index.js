document.addEventListener('DOMContentLoaded', function() {
    // Game card click effect
    const games = document.querySelectorAll('.game');
    games.forEach(game => {
        game.addEventListener('click', () => {
            const details = game.nextElementSibling;
            details.classList.toggle('active');
            
            // Close other open game details
            games.forEach(otherGame => {
                if (otherGame !== game) {
                    const otherDetails = otherGame.nextElementSibling;
                    otherDetails.classList.remove('active');
                }
            });
        });

        game.addEventListener('mouseover', () => {
            game.style.transform = 'scale(1.05)';
            game.style.boxShadow = '0 0 10px #0f0';
        });
        game.addEventListener('mouseout', () => {
            game.style.transform = 'scale(1)';
            game.style.boxShadow = 'none';
        });
    });

    // Random pixel animation for retro effect
    function createPixel() {
        console.log('Pixel oluşturuluyor');
        const pixel = document.createElement('div');
        pixel.style.position = 'fixed';
        pixel.style.width = '3px'; 
        pixel.style.height = '3px'; 
        pixel.style.backgroundColor = '#0f0';
        pixel.style.left = Math.random() * window.innerWidth + 'px';
        pixel.style.top = Math.random() * window.innerHeight + 'px';
        pixel.style.opacity = Math.random() * 0.5 + 0.5; 
        pixel.style.zIndex = '9999'; 
        document.body.appendChild(pixel);

        setTimeout(() => {
            pixel.remove();
        }, 1000);
    }

    setInterval(createPixel, 300); // 100ms yerine 500ms
});
