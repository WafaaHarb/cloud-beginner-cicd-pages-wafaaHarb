function changeText() {
    const demoText = document.getElementById('demo-text');
    const messages = [
        'You clicked the button! This demonstrates JavaScript interactivity.',
        'CI/CD automates our deployment!',
        'GitHub Actions makes this possible!',
        'Now your site is live on GitHub Pages!'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    demoText.textContent = messages[randomIndex];
}

// Add console message to show script is loaded
console.log('JavaScript loaded successfully!');
