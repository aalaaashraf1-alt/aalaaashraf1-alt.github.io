// Load saved data from localStorage
document.addEventListener('DOMContentLoaded', function() {
    loadSavedData();
});

function loadSavedData() {
    // Hero Section
    const heroProfileImg = localStorage.getItem('heroProfileImg');
    const heroTitle = localStorage.getItem('heroTitle');
    const heroSubtitle = localStorage.getItem('heroSubtitle');
    
    if (heroProfileImg) {
        document.getElementById('hero-profile-img').src = heroProfileImg;
    }
    if (heroTitle) {
        document.getElementById('hero-title').textContent = heroTitle;
    }
    if (heroSubtitle) {
        document.getElementById('hero-subtitle').textContent = heroSubtitle;
    }
    
    // About Section
    const aboutImg = localStorage.getItem('aboutImg');
    const aboutTitle = localStorage.getItem('aboutTitle');
    const aboutDescription = localStorage.getItem('aboutDescription');
    const statYears = localStorage.getItem('statYears');
    const statProjects = localStorage.getItem('statProjects');
    const statClients = localStorage.getItem('statClients');
    
    if (aboutImg) {
        document.getElementById('about-img').src = aboutImg;
    }
    if (aboutTitle) {
        document.getElementById('about-title').textContent = aboutTitle;
    }
    if (aboutDescription) {
        document.getElementById('about-description').textContent = aboutDescription;
    }
    if (statYears) {
        document.getElementById('stat-years').textContent = statYears;
    }
    if (statProjects) {
        document.getElementById('stat-projects').textContent = statProjects;
    }
    if (statClients) {
        document.getElementById('stat-clients').textContent = statClients;
    }
    
    // Experience Section
    const expCurrentTitle = localStorage.getItem('expCurrentTitle');
    const expCurrentCompany = localStorage.getItem('expCurrentCompany');
    const expCurrentDesc = localStorage.getItem('expCurrentDesc');
    const expPrevTitle = localStorage.getItem('expPrevTitle');
    const expPrevCompany = localStorage.getItem('expPrevCompany');
    const expPrevDesc = localStorage.getItem('expPrevDesc');
    const expStartTitle = localStorage.getItem('expStartTitle');
    const expStartCompany = localStorage.getItem('expStartCompany');
    const expStartDesc = localStorage.getItem('expStartDesc');
    
    if (expCurrentTitle) document.getElementById('exp-current-title').textContent = expCurrentTitle;
    if (expCurrentCompany) document.getElementById('exp-current-company').textContent = expCurrentCompany;
    if (expCurrentDesc) document.getElementById('exp-current-desc').textContent = expCurrentDesc;
    if (expPrevTitle) document.getElementById('exp-prev-title').textContent = expPrevTitle;
    if (expPrevCompany) document.getElementById('exp-prev-company').textContent = expPrevCompany;
    if (expPrevDesc) document.getElementById('exp-prev-desc').textContent = expPrevDesc;
    if (expStartTitle) document.getElementById('exp-start-title').textContent = expStartTitle;
    if (expStartCompany) document.getElementById('exp-start-company').textContent = expStartCompany;
    if (expStartDesc) document.getElementById('exp-start-desc').textContent = expStartDesc;
    
    // Portfolio Section
    for (let i = 1; i <= 6; i++) {
        const portfolioImg = localStorage.getItem(`portfolio${i}Img`);
        const portfolioTitle = localStorage.getItem(`portfolio${i}Title`);
        const portfolioDesc = localStorage.getItem(`portfolio${i}Desc`);
        
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        if (portfolioItems[i-1]) {
            if (portfolioImg) {
                portfolioItems[i-1].querySelector('img').src = portfolioImg;
            }
            if (portfolioTitle) {
                portfolioItems[i-1].querySelector('h3').textContent = portfolioTitle;
            }
            if (portfolioDesc) {
                portfolioItems[i-1].querySelector('p').textContent = portfolioDesc;
            }
        }
    }
    
    // Contact Section
    const contactEmail = localStorage.getItem('contactEmail');
    const contactPhone = localStorage.getItem('contactPhone');
    const contactLocation = localStorage.getItem('contactLocation');
    const socialFacebook = localStorage.getItem('socialFacebook');
    const socialInstagram = localStorage.getItem('socialInstagram');
    const socialLinkedin = localStorage.getItem('socialLinkedin');
    const socialTwitter = localStorage.getItem('socialTwitter');
    
    if (contactEmail) document.getElementById('contact-email').textContent = contactEmail;
    if (contactPhone) document.getElementById('contact-phone').textContent = contactPhone;
    if (contactLocation) document.getElementById('contact-location').textContent = contactLocation;
    if (socialFacebook) document.getElementById('social-facebook').href = socialFacebook;
    if (socialInstagram) document.getElementById('social-instagram').href = socialInstagram;
    if (socialLinkedin) document.getElementById('social-linkedin').href = socialLinkedin;
    if (socialTwitter) document.getElementById('social-twitter').href = socialTwitter;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.');
    this.reset();
});
