function render(texttt){
    localStorage.setItem(Math.floor(Math.random() * (10000 - 1)) + 1, texttt)

    var li = document.createElement("li");
    var t = document.createTextNode(texttt);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInputName").value = "";
    document.getElementById("myInputText").value = "";


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("🖒");
    span.className = 'like';
    span.appendChild(txt);
    li.appendChild(span);

    span.addEventListener('click', event => {

        event.preventDefault();
        if (span.classList.contains('liked')) {
            span.classList.remove('liked')
        } else {
            span.classList.add('liked')
        }
    })
}


let keys = Object.keys(localStorage);
for (let key of keys) {
    render(`${localStorage.getItem(key)}`);
}

const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = form.querySelector('[name="name"]'), //получаем поле name
        text = form.querySelector('[name="text"]') //получаем поле text

    const data = {
        name: name.value,
        text: text.value
    };
    var tex = `${data.name}: ${data.text}`
    if (data.text === '' || data.name === '') {
        alert("Type smth!");
    } else {
        render(tex)
    }    

});

// card.innerHTML = `
//         <img src="${img}" alt="" class="item__photo">
//         <p class="item__name">${name}</p>
//         <button class="item__add-to-cart">${price}</button>`;

// Create a "close" button and append it to each list item
