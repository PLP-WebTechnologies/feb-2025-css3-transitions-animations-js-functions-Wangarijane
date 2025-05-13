// Check if animation state is saved in localStorage
if (localStorage.getItem('isAnimated') === 'true') {
    document.getElementById('animationBox').classList.add('animate');
}

// Get references to elements
const animateBtn = document.getElementById('animateBtn');
const animationBox = document.getElementById('animationBox');

// Add click event listener to button
animateBtn.addEventListener('click', function() {
    // Toggle the animation class
    animationBox.classList.toggle('animate');
    
    // Save the state in localStorage
    const isAnimated = animationBox.classList.contains('animate');
    localStorage.setItem('isAnimated', isAnimated);
});
