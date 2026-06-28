// Login JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    // Default credentials (you can change this)
    const DEFAULT_USERNAME = 'zain';
    const DEFAULT_PASSWORD = 'zain206';
    
    // Check if user is already logged in
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'dashboard.html';
    }
    
    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');
        
        if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            // Set login session
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('loginTime', new Date().getTime());
            sessionStorage.setItem('username', DEFAULT_USERNAME);
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Show error message
            errorMessage.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
            errorMessage.style.display = 'block';
            
            // Clear fields
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            
            // Shake animation
            document.querySelector('.login-card').style.animation = 'shake 0.5s';
            setTimeout(() => {
                document.querySelector('.login-card').style.animation = 'none';
            }, 500);
        }
    });
});

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
