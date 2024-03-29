export const galeria = () => {
  const carousel = document.querySelector('.carousel');
  const firstImg = carousel.querySelectorAll('img')[0];
  const arrowIcons = document.querySelectorAll('.wrapper i');
  let isDragStart = false;
  let prevPageX;
  let isDragging = false;
  let prevScrollLeft;
  let positionDiff;
  const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  const showHideIcons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
    arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'block';
  };
  arrowIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const firstImgWidth = firstImg.clientWidth + 14;
      carousel.scrollLeft += icon.id === 'left' ? -firstImgWidth : firstImgWidth;
      showHideIcons();
    });
  });

  const autoSlide = () => {
    if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth) {
      return;
    }
    positionDiff = Math.abs(positionDiff);
    const firstImgWidth = firstImg.clientWidth + 14;
    const valDifferent = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) {
      return (carousel.scrollLeft +=
        positionDiff > firstImgWidth / 3 ? valDifferent : -positionDiff);
    }
    return (carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifferent : -positionDiff);
  };
  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add('dragging');
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    carousel.scrollLeft = e.pageX;
    showHideIcons();
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  };
  carousel.addEventListener('mousedown', dragStart);
  carousel.addEventListener('touchstart', dragStart);

  carousel.addEventListener('mousemove', dragging);
  carousel.addEventListener('touchmove', dragging);

  carousel.addEventListener('mouseup', dragStop);
  carousel.addEventListener('mouseleave', dragStop);
  carousel.addEventListener('touchend', dragStop);

  carousel.addEventListener('scroll', showHideIcons);
};

export function getHour() {
  const fecha = new Date();
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();

  if (horas < 10) {
    horas = '0' + horas;
  }

  if (minutos < 10) {
    minutos = '0' + minutos;
  }

  const horaActual = horas + ':' + minutos;
  return horaActual;
}

export const Select = () => {
  const items = document.querySelectorAll('.bar-item');

  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((item) => {
        item.classList.remove('selected');
      });
      item.classList.add('selected');
    });
  });
};


export const SelectNavBar = () => {
  const navLinks = document.querySelectorAll('.lista-elementos li a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Agregar la clase `.active` al enlace seleccionado
      event.currentTarget.classList.add('active');

      // Eliminar la clase `.active` de todos los demás enlaces
      navLinks.forEach((navLink) => {
        if (navLink !== link) {
          navLink.classList.remove('active');
        }
      });
    });
  });
};

export const Whatsapp = () => {
  const whatsappMessage = 'Hola, estoy interesado en tu trabajo ✌️';
  const phoneNumber = '967760813';
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;
  return url;
};

