function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const chatContainer = document.getElementById("chat-container");

  const message = messageInput.value;
  if (message.trim() === "") return;

  const newMessage = document.createElement("div");
  newMessage.innerText = message;
  chatContainer.appendChild(newMessage);

  messageInput.value = "";
}
