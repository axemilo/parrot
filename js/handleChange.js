// Form-change elements
const changeBtn = document.getElementById('change-btn')

const titleChange = document.getElementById('title-change')
const priceChange = document.getElementById('price-change')
const imgChange = document.getElementById('img-change')
const dateChange = document.getElementById('date-change')
const widthChange = document.getElementById('width-change')
const heightChange = document.getElementById('height-change')
const featuresChange = document.getElementById('features-change')

const formChange = document.getElementById('form-change')
let foundItem = []

const handleChange = (evt) => {
  foundItem = []
  const element = evt.target
  if (element.matches('.js-edit')) {
    const foundCard = cards.find((item) => element.dataset.id == item.id)
    foundItem.push(foundCard)
    const { title, price, img, features, birthDate, sizes } = foundCard
    titleChange.value = title
    priceChange.value = price
    featuresChange.value = features.join(',')
    dateChange.value = birthDate
    widthChange.value = sizes.width
    heightChange.value = sizes.height
    imgChange.value = img
  }
}

const handleFilterChange = (evt) => {
  evt.preventDefault()
  foundItem[0].title = titleChange.value
  foundItem[0].price = priceChange.value
  foundItem[0].birthDate = dateChange.value
  foundItem[0].img = imgChange.value
  foundItem[0].sizes.width = widthChange.value
  foundItem[0].sizes.height = heightChange.value
  foundItem[0].features = featuresChange.value.split(',')

  renderCards(cards)
}

cardList.addEventListener('click', handleChange)
formChange.addEventListener('submit', handleFilterChange)
