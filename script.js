document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation (Optional, can remove if you prefer instant jump)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Section Switching Logic
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove 'active' from all links and hide all sections
            navLinks.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('active');
            });

            // Add 'active' to clicked link
            this.classList.add('active');

            // Show the corresponding section
            const targetSectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('active');
            }
        });
    });

    // Daily Journal Card Expand/Collapse Logic
    const dayCards = document.querySelectorAll('.day-card');

    dayCards.forEach(card => {
        const summary = card.querySelector('.day-summary');
        const details = card.querySelector('.day-details');
        const readMoreBtn = card.querySelector('.read-more-btn');

        // Add click listener to the entire card
        summary.addEventListener('click', () => {
            details.classList.toggle('active');
            if (details.classList.contains('active')) {
                readMoreBtn.textContent = 'Read Less';
            } else {
                readMoreBtn.textContent = 'Read More';
            }
        });
    });

    // Initialize: Show the home section and activate its nav link on load
    document.getElementById('home').classList.add('active');
    document.querySelector('.nav-link[data-section="home"]').classList.add('active');
});