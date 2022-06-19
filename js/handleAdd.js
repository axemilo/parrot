// Form-add elements
const titleAdd = document.getElementById('title-add')
const priceAdd = document.getElementById('price-add')
const imgAdd = document.getElementById('img-add')
const dateAdd = document.getElementById('date-add')
const widthAdd = document.getElementById('width-add')
const heightAdd = document.getElementById('height-add')
const formAddCards = document.getElementById('form-add')
const featuresAdd = document.getElementById('features-add')
const inputsAdd = document.querySelectorAll('.js-add-input')

const handleAddCards = (evt) => {
  console.log(cards)
  evt.preventDefault()
  const newObject = {
    id: '',
    title: titleAdd.value,
    img: imgAdd.value,
    price: priceAdd.value,
    birthDate: dateAdd.value,
    sizes: {
      width: widthAdd.value,
      height: heightAdd.value,
    },
    isFavorite: false,
    features: featuresAdd.value.split(','),
  }
  if (imgAdd.value !== '') {
    cards.push(newObject)
    renderCards(cards)
  } else if (imgAdd.value === '') {
    imgAdd.classList.add('is-invalid')
  }
}

formAddCards.addEventListener('submit', handleAddCards)
