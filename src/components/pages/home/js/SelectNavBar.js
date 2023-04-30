export const SelectNavBar = () => {
  const navLinks = document.querySelectorAll('.lista-elementos li a')

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Agregar la clase `.active` al enlace seleccionado
      event.currentTarget.classList.add('active')

      // Eliminar la clase `.active` de todos los demás enlaces
      navLinks.forEach((navLink) => {
        if (navLink !== link) {
          navLink.classList.remove('active')
        }
      })
    })
  })
}
