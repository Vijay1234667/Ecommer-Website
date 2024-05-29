
var messages = [
    "Type Below",
    "Hello",
    "Welcome",
    "Message 2",
    "Message 3",
    "Message 4",
    "Message 5",
    "Message 6",
    "Message 7",
    "Message 8",
    "Message 9",
    "Message 10",
    "Message 11",
    "Message 12",
    "Message 13",
    "Message 14",
    "Message 1",
    "Message 16",
    "Message 17",
    "Message 19",
    "Message 20",
    "Message 21",
    "Message 22"
];
var currentMessageIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    sendAutoReply();
    document.getElementById("sendButton").addEventListener("click", sendMessage);
    document.getElementById("messageInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    var input = document.getElementById("messageInput");
    var message = input.value.trim();
    if (message === "") {
        return;
    }
    addOutgoingMessage(message);
    input.value = "";
    setTimeout(sendAutoReply, 1000);
}

function sendAutoReply() {
    if (currentMessageIndex < messages.length) {
        addIncomingMessage(messages[currentMessageIndex]);
        currentMessageIndex++;
    }
}

function addOutgoingMessage(message) {
    var chatContainer = document.getElementById("chatContainer");
    var outgoingMessage = document.createElement("div");
    outgoingMessage.classList.add("message", "outgoing");
    outgoingMessage.innerHTML = `
        <img src="./img/user-profile.jpg" alt="Avatar" class="message-avatar">
        <div class="message-content">${message}</div>
        <div class="message-time">${getCurrentTime()}</div>
    `;
    chatContainer.appendChild(outgoingMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addIncomingMessage(message) {
    var chatContainer = document.getElementById("chatContainer");
    var incomingMessage = document.createElement("div");
    incomingMessage.classList.add("message", "incoming");
    incomingMessage.innerHTML = `
        <img src="./img/About-Us person.jpg" alt="Avatar" class="message-avatar">
        <div class="message-content">${message}</div>
        <div class="message-time">${getCurrentTime()}</div>
    `;
    chatContainer.appendChild(incomingMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}
