import '../../css/phone.css'
import '../../css/home-phone-responsive/phone.css'
import { FiWifi } from 'react-icons/fi'
import { MdBatteryFull } from 'react-icons/md'
import { BiCaretLeft, BiCaretRight, BiCircle, BiSignal4 } from 'react-icons/bi'
import { RiInstagramFill } from 'react-icons/ri'
import { IoLogoWhatsapp, IoLogoJavascript } from 'react-icons/io'
import { BsTelegram, BsFacebook } from 'react-icons/bs'
import { TbBrandCSharp } from 'react-icons/tb'
import { FaTwitter } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { ImLinkedin } from 'react-icons/im'
import { DiReact } from 'react-icons/di'
import imagen from '../../../imgs/Yo.webp'
import { FcAndroidOs } from 'react-icons/fc'
import { getHour } from './js/GetDate.js'
import { Select } from './js/Select.js'
import { useEffect } from 'react'
import { Whatsapp } from './js/Whatsapp.js'
const iconst = [RiInstagramFill, IoLogoWhatsapp, BsTelegram]
const lista = Array(iconst).fill(null)

export const Phone = () => {
  const twitter = 'https://twitter.com/RommelPalm89723'
  const github = 'https://github.com/Rommelpalma123'
  const linkedin = 'https://www.linkedin.com/in/rommel-palma-675b8a272/'
  const linkedin1 = 'https://www.linkedin.com/in/rommel-palma-7aa5b1223/'
  const facebook = 'https://www.facebook.com/profile.php?id=100010333634907'

  useEffect(Select, [])
  return (
    <>
      <section className='secction-description'>
        <div>
          <img
            className='imagen-perfil'
            src={imagen}
          />
        </div>
        <div className='info-home'>
          <h2 className='contenido fade-in'>
            HOLA A TODOS MI NOMBRE ES ROMMEL SANTIAGO PALMA PLUA
          </h2>
          <h2 className='contenido fade-in'>BIENVENIDOS A MI PORTAFOLIO</h2>
        </div>
      </section>
      <div className='container-description'>
        <p>
          Soy desarollador de software, soy un gran fan de las tecnologias,
          desde muy pequeño me ha llamado la atencion el mundo de la tecnologia,
          desde ese punto tome la decision de estudiar una carrera de
          programación, porque queria tener esa capacidad de construir cosas
          solo con un poco de imaginación, siempre me gusta aprender cosas
          nuevas.
        </p>
      </div>
      <div className='secction-phone'>
        <div className='phone-background'>
          <div className='phone'>
            <div className='phone-bar'>
              <div className='phone-camera-operador'>
                <div className='phone-camera' />
                <div className='phone-operador'>{getHour()}</div>
              </div>
              <div className='phone-signal-battery'>
                <div className='phone-signal'>
                  <BiSignal4 />
                </div>
                <div className='phone-wifi'>
                  <FiWifi />
                </div>
                <div className='phone-battery'>
                  <MdBatteryFull />
                </div>
              </div>
            </div>
            <div className='list-elements'>
              {lista.map((square, index) => {
                // eslint-disable-next-line react/jsx-key
                return (
                  <div
                    key={index}
                    className='contenedor-app'
                  >
                    <div className='app-instagran'>
                      <a
                        href={Whatsapp()}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <RiInstagramFill />
                      </a>
                      <h6 className='app-name'>Instagran</h6>
                    </div>
                    <div className='app-linkedin'>
                      <a href={linkedin1}>
                        <ImLinkedin />
                      </a>
                      <h6 className='app-name'>Linkedin</h6>
                    </div>
                    <div className='app-facebook'>
                      <a
                        href={facebook}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <BsFacebook />
                      </a>
                      <h6 className='app-name'>Facebook</h6>
                    </div>
                    <div className='app-telegrmam'>
                      <a>
                        <BsTelegram />
                      </a>
                      <h6 className='app-name'>Telegram</h6>
                    </div>
                    <div className='app-twitter'>
                      <a
                        href={twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaTwitter />
                      </a>
                      <h6 className='app-name'>Twitter</h6>
                    </div>
                    <div className='app-whatsapp'>
                      <a
                        href={Whatsapp()}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <IoLogoWhatsapp />
                      </a>
                      <h6 className='app-name'>Whatsappp</h6>
                    </div>
                    <div className='app-github'>
                      <a
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <AiFillGithub />
                      </a>
                      <h6 className='app-name'>Github</h6>
                    </div>
                    <div className='app-instagran'>
                      <a
                        href={Whatsapp()}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <RiInstagramFill />
                      </a>
                      <h6 className='app-name'>Instagran</h6>
                    </div>
                    <div className='app-linkedin'>
                      <a
                        href={linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ImLinkedin />
                      </a>
                      <h6 className='app-name'>Linkedin</h6>
                    </div>
                    <div className='app-whatsapp'>
                      <a
                        href={Whatsapp()}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <IoLogoWhatsapp />
                      </a>
                      <h6 className='app-name'>Whatsappp</h6>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='phone-bottoms'>
              <div>
                <BiCaretLeft />
              </div>
              <div>
                <BiCircle />
              </div>
              <div>
                <BiCaretRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container-tablet'>
          <div className='back-tablet'>
            <div className='tablet-item' />
            <div className='tablet-item' />
            <div className='tablet-item' />
            <div className='vertical-bar'>
              <div className='container-imagen'>
                <img
                  src={imagen}
                  alt='imagen-portafolio'
                  className='imagen-perfil-bar'
                />
                <h4 className='nombre-bar'>Rommel</h4>
              </div>
              <h5 className='bar-item-color'>Board</h5>
              <h5 className='bar-item'>Settings</h5>
              <h5 className='bar-item'>Information</h5>
            </div>
            <div className='container-info-personal'>
              <h3>Trabajos realizados</h3>
              <div className='info-personal'>
                <div className='board-info-personal'>
                  <div>
                    <div className='container-icon'>
                      <h5>React</h5>
                      <DiReact className='icon-react' />
                    </div>
                    <p>
                      Actualmente uno de mis framework es react, este me permite
                      desarollar de una maneras mucho mas facil, este proyecto esta hecho en react, ya que contiene
                      varias funcionalidades que le dan un extra, una de sus
                      caracteristicas con el uso de useEffect, useState, Hooks
                      entre otras mas funciones que este brinda el cual es facil
                      para desarollar applicaciones web.
                    </p>
                  </div>
                </div>
              </div>
              <div className='info-personal'>
                <div className='board-info-personal'>
                  <div>
                    <div className='container-icon'>
                      <h5>JavaScript</h5>
                      <IoLogoJavascript className='icon-javascript' />
                    </div>
                    <p>
                      JavaScript como lenguaje de programacion me parece genial, es con el lenguaje que mas he
                      interactuado. Con la web es super flaxible, y en la mayor parte de mis proyectos, practicas uso
                      javascript.
                    </p>
                  </div>
                </div>
              </div>
              <div className='info-personal'>
                <div className='board-info-personal'>
                  <div>
                    <div className='container-icon'>
                      <h5>csharp</h5>
                      <TbBrandCSharp className='icon-csharp' />
                    </div>
                    <p>
                      Csharp es un lenguaje estupendo con este he trabajado para realizar mis practicas de la universidad
                      y desarollar un software bastante robusto, ya que en este se aplica arquitectura de software la que se
                      aplica es "vertical slice" para la arquuitectura de la misma, tambien en el uso de test unitarios y test
                      de integracion, el proyecto que se esta realizando es para la web.
                    </p>
                  </div>
                </div>
              </div>
              <div className='info-personal'>
                <div className='board-info-personal'>
                  <div>
                    <div className='container-icon'>
                      <h5>Android nativo con java</h5>
                      <FcAndroidOs className='icon-java' />
                    </div>
                    <p>
                      Durante mi proceso de estudios realizamos una app movil nativa con android, esta aplicacion fue
                      realizada en un grupo de 4 personas, donde se aplicaron conocimientos intermedios para la construccion de
                      la aplicacion, esta aplicacion va a seguir siendo desarollada en un futuro, ya que es bastante elegante,
                      el plan es migrar la app a otro lenguaje que nos de mas opciones de desarollo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
