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
let indexCard = null
const handleChange = (evt) => {
  foundItem = []
  const element = evt.target
  if (element.matches('.js-edit')) {
    const foundCard = cards.find((item) => element.dataset.id == item.id)
    const indexCardItem = cards.findIndex(
      (item) => element.dataset.id == item.id
    )
    indexCard = indexCardItem
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
  cards[indexCard].title = titleChange.value
  cards[indexCard].price = priceChange.value
  cards[indexCard].birthDate = dateChange.value
  cards[indexCard].img = imgChange.value
  cards[indexCard].sizes.width = widthChange.value
  cards[indexCard].sizes.height = heightChange.value
  cards[indexCard].features = featuresChange.value.split(',')

  renderCards(cards)
}

cardList.addEventListener('click', handleChange)
formChange.addEventListener('submit', handleFilterChange)
