const cardTemplate = document.getElementById('card-template').content
const cardList = document.getElementById('card-list')
const searchInput = document.getElementById('search')
const countText = document.getElementById('count-text')

let cards = []

const generatorId = () =>
  Math.floor((1 + Math.random()) * 0x10000000000)
    .toString(16)
    .substring(2)

const renderCards = (products) => {
  cardList.innerHTML = null
  products.forEach((item, index) => {
    const { title, img, price, features, birthDate, sizes, id } = item
    const card = cardTemplate.cloneNode(true)
    const cardTitle = card.getElementById('card-title')
    const cardPrice = card.getElementById('card-price')
    const cardImage = card.getElementById('card-img')
    const cardBadge = card.getElementById('card-badge')
    const cardDate = card.getElementById('card-date')
    const cardChangeBtn = card.getElementById('change-btn')
    const cardDeleteBtn = card.getElementById('delete-btn')
    const cardBadges = card.querySelectorAll('.badge')
    item.id = generatorId()

    countText.textContent = 'Count: ' + (1 + index)

    cardChangeBtn.dataset.id = item.id
    cardDeleteBtn.dataset.id = item.id

    cardBadges.forEach((badge, index) => (badge.textContent = features[index]))
    cardTitle.textContent = title
    cardPrice.textContent = price + '$'
    cardImage.src = img
    cardBadge.textContent = `${sizes.width}sm x ${sizes.height}sm`
    cardDate.textContent = birthDate
    cardList.appendChild(card)
  })
}

cards.push(...products)
renderCards(cards)

const handleSearch = (evt) => {
  const searchText = evt.target.value.trim()
  const regex = new RegExp(searchText, 'gi')

  let foundCards = cards.filter((card) => card.title.match(regex))
  if (searchInput.value !== null) {
    cards = foundCards
    renderCards(foundCards)
  }
  if (searchInput.value == '') {
    cards = products
    renderCards(cards)
  }
}

searchInput.addEventListener('keyup', handleSearch)
