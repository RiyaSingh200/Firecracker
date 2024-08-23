document.addEventListener("DOMContentLoaded", () => {
    const firecracker = document.querySelector('.firecracker');
    const explosion = document.querySelector('.explosion');

    function startFirecracker() {
        firecracker.style.display = 'block';
        firecracker.style.animation = 'launch 4s ease-in forwards, sparkle 0.5s linear infinite';

        firecracker.addEventListener('animationend', () => {
            firecracker.style.display = 'none';
            explosion.style.display = 'block';

            for (let i = 0; i < 30; i++) {  // Number of glitter particles
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
                particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
                explosion.appendChild(particle);
            }

            setTimeout(() => {
                explosion.style.display = 'none';
                explosion.innerHTML = '';  // Clear previous particles
                setTimeout(startFirecracker, 1000);  // Restart the firecracker after 1 second delay
            }, 2000);  // Duration for explosion to be visible
        });
    }

    startFirecracker();  // Initiate the first firecracker launch
});
