// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get feedback element
    const feedback = document.getElementById('feedback');

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the selected answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
