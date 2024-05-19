function addChatbot() {
    const chatbotHTML = `
        <button id="toggleChatbot">
        <i class="fas fa-comments"></i>  ..Hi
        </button>

        <div id="chatbot-container">
            <button id="closeChatbot"><i class="fas fa-times"></i></button>
            <iframe id="chatBotFrame" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/76681bab-dc51-4183-b7f2-aff63e54797c"></iframe>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
}

document.addEventListener('DOMContentLoaded', function() {
    addChatbot();
});
