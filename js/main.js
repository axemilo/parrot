const cardTemplate = document.getElementById('card-template').content
const cardList = document.getElementById('card-list')
const searchInput = document.getElementById('search')
const addBtn = document.getElementById('add-button')

const cards = []
console.log(cards)
const renderCards = (products) => {
  cardList.innerHTML = null
  products.forEach((item) => {
    const { title, img, price, features, birthDate, sizes } = item
    const card = cardTemplate.cloneNode(true)
    const cardTitle = card.getElementById('card-title')
    const cardPrice = card.getElementById('card-price')
    const cardImage = card.getElementById('card-img')
    const cardBadge = card.getElementById('card-badge')
    const cardDate = card.getElementById('card-date')
    const cardBadges = card.querySelectorAll('.badge')
    cardBadges.forEach((badge, index) => (badge.textContent = features[index]))
    cardTitle.textContent = title
    cardPrice.textContent = price + '$'
    cardImage.src = img
    cardBadge.textContent = `${sizes.width}sm x ${sizes.height}sm`
    cardDate.textContent = birthDate
    cardList.appendChild(card)
  })
}

renderCards(products)
cards.push(...products)

const handleSearch = (evt) => {
  const searchText = evt.target.value.trim()

  const regex = new RegExp(searchText, 'gi')

  const foundCards = cards.filter((card) => card.title.match(regex))
  renderCards(foundCards)
}

searchInput.addEventListener('keyup', handleSearch)
