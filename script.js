const chat = document.getElementById("chat");
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");

let isWaiting = false;

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;

  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage(userMessage) {
  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userMessage })
  });

  if (!response.ok) {
    throw new Error("Server error");
  }

  const data = await response.json();
  return data.reply;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (isWaiting) return;

  const userMessage = input.value.trim();
  if (!userMessage) return;

  isWaiting = true;

  addMessage(userMessage, "user");
  input.value = "";
  input.disabled = true;

  addMessage("Thinking...", "ai");

  try {
    const reply = await sendMessage(userMessage);

    // Remove "Thinking..."
    chat.removeChild(chat.lastChild);

    addMessage(reply, "ai");

  } catch (error) {
    chat.removeChild(chat.lastChild);
    addMessage("Photon AI encountered an error.", "ai");
    console.error(error);
  }

  input.disabled = false;
  input.focus();
  isWaiting = false;
});
