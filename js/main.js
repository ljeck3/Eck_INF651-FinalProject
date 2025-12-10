//Personilzed welcome message---------------------
function getWelcomeMessage() {
    const hour = new Date().getHours();
    let welcomeMessage = "Welcome!";
    console.log(hour);

    if (hour < 12) {
        welcomeMessage = "Good Morning!";
    } else if (hour < 18) {
        welcomeMessage = "Good Afternoon!";
    } else {
        welcomeMessage = "Good Evening!";
    }

    console.log(welcomeMessage);
    document.getElementById("time-welcome").textContent = welcomeMessage;
}

//Footer copyright---------------------
const year = new Date().getFullYear();
const copyrightMessage = `© ${year} Levi Eck`;
document.getElementById("footer-copyright").textContent = copyrightMessage;