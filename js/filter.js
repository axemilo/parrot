const sortSelect = document.getElementById('sort-select')
const filterBtn = document.getElementById('filter-btn')

const fromPrice = document.getElementById('from-price')
const toPrice = document.getElementById('to-price')
const fromWidth = document.getElementById('from-width')
const toWidth = document.getElementById('to-width')
const fromHeight = document.getElementById('from-height')
const toHeight = document.getElementById('to-height')

const sortFunctions = {
  name: (a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1
    } else {
      return -1
    }
  },
  prLowest: (a, b) => {
    if (a.price > b.price) {
      return 1
    } else {
      return -1
    }
  },
  prHighest: (a, b) => {
    if (a.price > b.price) {
      return -1
    } else {
      return 1
    }
  },
  dtNew: (a, b) => {
    firstDate = new Date(a.birthDate)
    secondDate = new Date(b.birthDate)

    if (firstDate.getTime() > secondDate.getTime()) {
      return -1
    } else {
      return 1
    }
  },
  dtOld: (a, b) => {
    firstDate = new Date(a.birthDate)
    secondDate = new Date(b.birthDate)

    if (firstDate.getTime() > secondDate.getTime()) {
      return 1
    } else {
      return -1
    }
  },
}

const handleFilter = (evt) => {
  evt.preventDefault()
  let filtredCards = cards.sort(sortFunctions[sortSelect.value])
  const foundCards = cards.filter((item) => {
    if (item.price >= fromPrice.value && item.price <= toPrice.value)
      return item
    if (
      item.sizes.width >= fromWidth.value &&
      item.sizes.width <= toWidth.value
    )
      return item
    if (
      item.sizes.height >= fromHeight.value &&
      item.sizes.height <= toHeight.value
    )
      return item
  })
  filtredCards = foundCards
  renderCards(filtredCards)
}

filterBtn.addEventListener('click', handleFilter)
