// Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadDashboardData();
    setupNavigation();
    setupImageUploads();
    setupSaveButtons();
});

// Load saved data into dashboard inputs
function loadDashboardData() {
    // Hero Section
    const heroProfileImg = localStorage.getItem('heroProfileImg');
    const heroTitle = localStorage.getItem('heroTitle');
    const heroSubtitle = localStorage.getItem('heroSubtitle');
    
    if (heroProfileImg) {
        document.getElementById('hero-profile-preview').src = heroProfileImg;
    }
    if (heroTitle) {
        document.getElementById('hero-title-input').value = heroTitle;
    }
    if (heroSubtitle) {
        document.getElementById('hero-subtitle-input').value = heroSubtitle;
    }
    
    // About Section
    const aboutImg = localStorage.getItem('aboutImg');
    const aboutTitle = localStorage.getItem('aboutTitle');
    const aboutDescription = localStorage.getItem('aboutDescription');
    const statYears = localStorage.getItem('statYears');
    const statProjects = localStorage.getItem('statProjects');
    const statClients = localStorage.getItem('statClients');
    
    if (aboutImg) {
        document.getElementById('about-img-preview').src = aboutImg;
    }
    if (aboutTitle) {
        document.getElementById('about-title-input').value = aboutTitle;
    }
    if (aboutDescription) {
        document.getElementById('about-description-input').value = aboutDescription;
    }
    if (statYears) {
        document.getElementById('stat-years-input').value = statYears;
    }
    if (statProjects) {
        document.getElementById('stat-projects-input').value = statProjects;
    }
    if (statClients) {
        document.getElementById('stat-clients-input').value = statClients;
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
    
    if (expCurrentTitle) document.getElementById('exp-current-title-input').value = expCurrentTitle;
    if (expCurrentCompany) document.getElementById('exp-current-company-input').value = expCurrentCompany;
    if (expCurrentDesc) document.getElementById('exp-current-desc-input').value = expCurrentDesc;
    if (expPrevTitle) document.getElementById('exp-prev-title-input').value = expPrevTitle;
    if (expPrevCompany) document.getElementById('exp-prev-company-input').value = expPrevCompany;
    if (expPrevDesc) document.getElementById('exp-prev-desc-input').value = expPrevDesc;
    if (expStartTitle) document.getElementById('exp-start-title-input').value = expStartTitle;
    if (expStartCompany) document.getElementById('exp-start-company-input').value = expStartCompany;
    if (expStartDesc) document.getElementById('exp-start-desc-input').value = expStartDesc;
    
    // Portfolio Section
    for (let i = 1; i <= 6; i++) {
        const portfolioImg = localStorage.getItem(`portfolio${i}Img`);
        const portfolioTitle = localStorage.getItem(`portfolio${i}Title`);
        const portfolioDesc = localStorage.getItem(`portfolio${i}Desc`);
        
        if (portfolioImg) {
            document.getElementById(`portfolio${i}-preview`).src = portfolioImg;
        }
        if (portfolioTitle) {
            document.getElementById(`portfolio${i}-title`).value = portfolioTitle;
        }
        if (portfolioDesc) {
            document.getElementById(`portfolio${i}-desc`).value = portfolioDesc;
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
    
    if (contactEmail) document.getElementById('contact-email-input').value = contactEmail;
    if (contactPhone) document.getElementById('contact-phone-input').value = contactPhone;
    if (contactLocation) document.getElementById('contact-location-input').value = contactLocation;
    if (socialFacebook) document.getElementById('social-facebook-input').value = socialFacebook;
    if (socialInstagram) document.getElementById('social-instagram-input').value = socialInstagram;
    if (socialLinkedin) document.getElementById('social-linkedin-input').value = socialLinkedin;
    if (socialTwitter) document.getElementById('social-twitter-input').value = socialTwitter;
}

// Setup sidebar navigation
function setupNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    const editorSections = document.querySelectorAll('.editor-section');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            // Update active menu item
            menuItems.forEach(mi => mi.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding editor section
            editorSections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(`${section}-editor`).classList.add('active');
        });
    });
}

// Setup image upload functionality
function setupImageUploads() {
    // Hero profile image
    document.getElementById('hero-profile-upload').addEventListener('change', function(e) {
        handleImageUpload(e, 'hero-profile-preview');
    });
    
    // About image
    document.getElementById('about-img-upload').addEventListener('change', function(e) {
        handleImageUpload(e, 'about-img-preview');
    });
    
    // Portfolio images
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`portfolio${i}-upload`).addEventListener('change', function(e) {
            handleImageUpload(e, `portfolio${i}-preview`);
        });
    }
}

// Handle image upload from device
function handleImageUpload(event, previewId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(previewId).src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Setup save buttons
function setupSaveButtons() {
    const saveButtons = document.querySelectorAll('.save-btn');
    
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            saveSectionData(section);
        });
    });
}

// Save section data to localStorage
function saveSectionData(section) {
    switch(section) {
        case 'hero':
            saveHeroSection();
            break;
        case 'about':
            saveAboutSection();
            break;
        case 'skills':
            saveSkillsSection();
            break;
        case 'experience':
            saveExperienceSection();
            break;
        case 'portfolio':
            savePortfolioSection();
            break;
        case 'contact':
            saveContactSection();
            break;
    }
    
    showSuccessModal();
}

function saveHeroSection() {
    const heroProfileImg = document.getElementById('hero-profile-preview').src;
    const heroTitle = document.getElementById('hero-title-input').value;
    const heroSubtitle = document.getElementById('hero-subtitle-input').value;
    
    localStorage.setItem('heroProfileImg', heroProfileImg);
    localStorage.setItem('heroTitle', heroTitle);
    localStorage.setItem('heroSubtitle', heroSubtitle);
}

function saveAboutSection() {
    const aboutImg = document.getElementById('about-img-preview').src;
    const aboutTitle = document.getElementById('about-title-input').value;
    const aboutDescription = document.getElementById('about-description-input').value;
    const statYears = document.getElementById('stat-years-input').value;
    const statProjects = document.getElementById('stat-projects-input').value;
    const statClients = document.getElementById('stat-clients-input').value;
    
    localStorage.setItem('aboutImg', aboutImg);
    localStorage.setItem('aboutTitle', aboutTitle);
    localStorage.setItem('aboutDescription', aboutDescription);
    localStorage.setItem('statYears', statYears);
    localStorage.setItem('statProjects', statProjects);
    localStorage.setItem('statClients', statClients);
}

function saveSkillsSection() {
    for (let i = 1; i <= 5; i++) {
        const skillName = document.getElementById(`skill${i}-name`).value;
        const skillDesc = document.getElementById(`skill${i}-desc`).value;
        const skillLevel = document.getElementById(`skill${i}-level`).value;
        
        localStorage.setItem(`skill${i}Name`, skillName);
        localStorage.setItem(`skill${i}Desc`, skillDesc);
        localStorage.setItem(`skill${i}Level`, skillLevel);
    }
}

function saveExperienceSection() {
    const expCurrentTitle = document.getElementById('exp-current-title-input').value;
    const expCurrentCompany = document.getElementById('exp-current-company-input').value;
    const expCurrentDesc = document.getElementById('exp-current-desc-input').value;
    const expPrevTitle = document.getElementById('exp-prev-title-input').value;
    const expPrevCompany = document.getElementById('exp-prev-company-input').value;
    const expPrevDesc = document.getElementById('exp-prev-desc-input').value;
    const expStartTitle = document.getElementById('exp-start-title-input').value;
    const expStartCompany = document.getElementById('exp-start-company-input').value;
    const expStartDesc = document.getElementById('exp-start-desc-input').value;
    
    localStorage.setItem('expCurrentTitle', expCurrentTitle);
    localStorage.setItem('expCurrentCompany', expCurrentCompany);
    localStorage.setItem('expCurrentDesc', expCurrentDesc);
    localStorage.setItem('expPrevTitle', expPrevTitle);
    localStorage.setItem('expPrevCompany', expPrevCompany);
    localStorage.setItem('expPrevDesc', expPrevDesc);
    localStorage.setItem('expStartTitle', expStartTitle);
    localStorage.setItem('expStartCompany', expStartCompany);
    localStorage.setItem('expStartDesc', expStartDesc);
}

function savePortfolioSection() {
    for (let i = 1; i <= 6; i++) {
        const portfolioImg = document.getElementById(`portfolio${i}-preview`).src;
        const portfolioTitle = document.getElementById(`portfolio${i}-title`).value;
        const portfolioDesc = document.getElementById(`portfolio${i}-desc`).value;
        
        localStorage.setItem(`portfolio${i}Img`, portfolioImg);
        localStorage.setItem(`portfolio${i}Title`, portfolioTitle);
        localStorage.setItem(`portfolio${i}Desc`, portfolioDesc);
    }
}

function saveContactSection() {
    const contactEmail = document.getElementById('contact-email-input').value;
    const contactPhone = document.getElementById('contact-phone-input').value;
    const contactLocation = document.getElementById('contact-location-input').value;
    const socialFacebook = document.getElementById('social-facebook-input').value;
    const socialInstagram = document.getElementById('social-instagram-input').value;
    const socialLinkedin = document.getElementById('social-linkedin-input').value;
    const socialTwitter = document.getElementById('social-twitter-input').value;
    
    localStorage.setItem('contactEmail', contactEmail);
    localStorage.setItem('contactPhone', contactPhone);
    localStorage.setItem('contactLocation', contactLocation);
    localStorage.setItem('socialFacebook', socialFacebook);
    localStorage.setItem('socialInstagram', socialInstagram);
    localStorage.setItem('socialLinkedin', socialLinkedin);
    localStorage.setItem('socialTwitter', socialTwitter);
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('active');
}
