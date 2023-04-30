export const Select = () => {
  const items = document.querySelectorAll('.bar-item')

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(item => {
        item.classList.remove('selected')
      })
      item.classList.add('selected')
    })
  })
}
