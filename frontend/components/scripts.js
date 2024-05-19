// Umschalt-Button für den Chatbot
document.getElementById('toggleChatbot').addEventListener('click', function() {
    var chatbotContainer = document.getElementById('chatbot-container');
    var toggleButton = document.getElementById('toggleChatbot');

    chatbotContainer.style.display = 'block'; // Show the chatbot
    toggleButton.style.display = 'none'; // Hide the "Chatbot anzeigen" button
});

// "X"-Button zum Schließen des Chatbots
document.getElementById('closeChatbot').addEventListener('click', function() {
    var chatbotContainer = document.getElementById('chatbot-container');
    var toggleButton = document.getElementById('toggleChatbot');

    chatbotContainer.style.display = 'none'; // Hide the chatbot
    toggleButton.style.display = 'block'; // Show the "Chatbot anzeigen" button
});
