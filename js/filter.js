const sortSelect = document.getElementById('sort-select')
const filterBtn = document.getElementById('filter-btn')
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
  const foundCards = cards.sort(sortFunctions[sortSelect.value])
  renderCards(foundCards)
}

filterBtn.addEventListener('click', handleFilter)
