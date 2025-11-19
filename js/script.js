document.addEventListener('DOMContentLoaded', function() {
    
    const userSessionData = sessionStorage.getItem('loggedInUser');

    if (userSessionData) {
        
        const user = JSON.parse(userSessionData);
        document.querySelector(".username").textContent =  user.username
        document.querySelector(".user-email").textContent =  user.email
    } else {
        console.warn("No active user session found. Redirecting to sign-in.");
    }
});
