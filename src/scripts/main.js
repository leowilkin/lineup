let scriptSentences = [];
    let currentSentenceIndex = 0;
    let outputDiv = document.getElementById('output');
    let endButtonsDiv = document.getElementById('end-buttons');
    let canAcceptInput = true;

    function showScriptButton() {
      const scriptText = document.getElementById('script').value;
      const startLearningBtn = document.getElementById('start-learning-btn');
      startLearningBtn.classList.toggle('hidden', scriptText.trim() === '');
    }

    function startLearning() {
      const scriptText = document.getElementById('script').value;
      scriptSentences = scriptText.match(/[^\.!\?]+[\.!\?]+/g);
      document.getElementById('script').classList.add('hidden');
      document.getElementById('start-learning-btn').classList.add('hidden');
      document.getElementById('output-container').classList.remove('hidden');
      showNextSentence();
      window.addEventListener('keypress', handleKeyPress);
    }

    function showNextSentence() {
      if (currentSentenceIndex < scriptSentences.length) {
        outputDiv.textContent = scriptSentences[currentSentenceIndex];
        currentSentenceIndex++;
      } else {
        outputDiv.textContent = 'End of script';
        endButtonsDiv.classList.remove('hidden');
        window.removeEventListener('keypress', handleKeyPress);
      }
      canAcceptInput = false;
      setTimeout(() => {
        canAcceptInput = true;
      }, 750); // 750 milliseconds = 0.75 second
    }

    function handleKeyPress(event) {
      if (event.code === 'Space' && canAcceptInput) {
        showNextSentence();
      }
    }

    function resetScript() {
      document.getElementById('script').value = '';
      document.getElementById('start-learning-btn').classList.add('hidden');
      document.getElementById('output-container').classList.add('hidden');
      document.getElementById('end-buttons').classList.add('hidden');
      document.getElementById('script').classList.remove('hidden');
      currentSentenceIndex = 0;
      scriptSentences = [];
    }

    function restartScript() {
      currentSentenceIndex = 0;
      document.getElementById('output-container').classList.remove('hidden');
      endButtonsDiv.classList.add('hidden');
      showNextSentence();
      window.addEventListener('keypress', handleKeyPress);
    }