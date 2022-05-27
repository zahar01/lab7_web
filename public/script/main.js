const container = document.querySelector('.container');
const categories = document.querySelectorAll('.categories__type');
// https://brilliant-xd.herokuapp.com
const getItems = async () => {
  const result = await fetch('/items');

  if (!result.ok) {
    throw 'ASHIBKA: ' + result.status;
  }
  return await result.json();
};

// getItems().then(function (data) {
//     console.log(data);
// })

const createItem = function ({ name, img, price }) {
  const card = document.createElement('div');
  card.className = 'item';
  // <img src="${img}" alt="" className="item__photo">
  card.innerHTML = `
        <p class="item__name">${name}</p>
        <button class="item__add-to-cart" onclick="addToCart()">${price}</button>
	`;

  return card;
};

const renderItems = function (data) {
  container.textContent = '';
  const cards = data.map(createItem);
  container.append(...cards);
  // document.body.classList.add('show-goods')
};

const filterItems = function (field, value) {
  getItems()
    .then((data) => data.filter((item) => item[field] === value))
    .then(renderItems);
};

getItems().then(filterItems('label', 'new'));

categories.forEach(function (link) {
  link.addEventListener('click', (event) => {
    // document.querySelectorAll('.main__title').classList.add('disabled')
    // console.log(document.querySelectorAll('main__title'))
    categories.forEach(function (lined) {
      lined.classList.remove('clicked');
      document.querySelector('main').style.paddingTop = '0px';
    });
    event.preventDefault();
    const field = link.dataset.field;
    const value = link.dataset.type;
    filterItems(field, value);
    if (link.dataset.type === 'All') {
      getItems().then(renderItems);
    }
    link.classList.add('clicked');
    document.querySelector('.main__title').classList.add('disabled');
    document.querySelector('.event').classList.add('disabled');
    document.querySelector('main').style.paddingTop = '120px';
  });
});
