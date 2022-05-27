function addToCart() {
  // здесь должно быть добавление в корзину
  notifyCard()
  console.log("added to cart")
}

function notifyCard() {
  const message = {
    name: "Someone",
    text: "Added item"
  }

  console.log("notf")
  socket.emit("msgToServer", message)
}

function receiveNotification(message) {
  console.log("recieved")
  toastr.info(message.text, message.name)

}

socket = io()

socket.on('msgToClient', (notification) => {
  receiveNotification(notification)
})