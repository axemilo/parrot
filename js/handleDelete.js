const handleDelete = (evt) => {
  evt.preventDefault()
  const element = evt.target
  if (element.matches('.js-delete')) {
    const indexCard = cards.findIndex((item) => element.dataset.id == item.id)
    console.log(indexCard)
    cards.splice(indexCard, 1)

    renderCards(cards)
  }
}
cardList.addEventListener('click', handleDelete)
