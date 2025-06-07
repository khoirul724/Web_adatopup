firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const form = document.getElementById("order-form");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const game = form.game.value;
  const userId = form.userId.value;
  const server = form.server.value;
  const amount = parseInt(form.amount.value);
  const price = amount * 100 + 1000;

  form.price.value = price;

  try {
    await db.collection("orders").add({ game, userId, server, amount, price });
    msg.textContent = "Pesanan berhasil dikirim!";
    form.reset();
  } catch (err) {
    msg.textContent = "Gagal kirim pesanan: " + err.message;
  }
});