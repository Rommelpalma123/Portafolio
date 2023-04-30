import '../../css/skills.css'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { galeria } from './js/galeria.js'
import { useEffect } from 'react'
import { Footer } from '../home/Footer'
export const Skills = () => {
  const imagenes = [
    'https://sigdeletras.com/images/blog/202004_react_leaflet/react.png',
    'https://mochikit.com/wp-content/uploads/2019/01/node-js.jpg',
    'https://imgs.search.brave.com/4jdYYQ1ZkAhlmd4Ub_dVmu7dAuUBKXty5iq_D3DjKto/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9zb2Z0/d2FyZS4zbWV0YXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA2L2dpdC5w/bmc',
    'https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg',
    'https://borjaarandavaquero.com/wp-content/uploads/2021/07/que-es-html.jpg',
    'https://extassisnetwork.com/tutoriales/wp-content/uploads/Que-es-CSS.jpg',
    'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-java/sta-je-java.jpg',
    'https://codigoonclick.com/wp-content/uploads/2019/05/npm-nodejs.jpeg',
    'https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2019/01/mongodb.png?width=1200&enable=upscale',
    'https://audviklabs.in/wp-content/uploads/2022/01/postgreSQL.png',
    'https://www.escolati.com.br/wp-content/uploads/2022/08/bootstrap-750x410.png'
  ]
  useEffect(galeria, [])

  return (
    <>
      <div className='container-skills'>
        <p>En esta seccion podras encontrar algunas de las tecnologias que uso con mas frecuancia en el desarollo
          habitual de mis aplicaciones web
        </p>
      </div>
      <div className='center'>
        <div className='wrapper'>
          <i id='left'>
            <IoMdArrowDropleft />
          </i>
          <div className='carousel'>
            {imagenes.map((imagen, index) => {
              return (
                <img
                  draggable='false'
                  key={index}
                  src={imagen}
                  alt={`image ${index}`}
                />
              )
            })}
          </div>
          <i id='right'>
            <IoMdArrowDropright />
          </i>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
