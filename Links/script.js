const questions = document.querySelectorAll('.question');
  const nextBtn = document.getElementById('nextBtn');
  let currentQuestion = 0;

  nextBtn.addEventListener('click', () => {
    const currentInput = questions[currentQuestion].querySelector('input, select');

    // Check of de huidige vraag ingevuld is
    if (!currentInput.checkValidity()) {
      currentInput.reportValidity();
      return;
    }

    // Huidige vraag verbergen
    questions[currentQuestion].classList.remove('active');
    currentQuestion++;

    // Volgende vraag tonen of formulier verzenden
    if (currentQuestion < questions.length) {
      questions[currentQuestion].classList.add('active');
    } else {
      alert("Dank je wel! Je antwoorden zijn opgeslagen.");
      document.getElementById('quizForm').submit();
    }
  });