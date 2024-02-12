import '@/styles/footer.css';
import '@/styles/home-phone-responsive/footer.css';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Whatsapp } from '@/helpers/utils';
import { AiFillGithub } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';
export const Footer = () => {
  const github = 'https://github.com/Rommelpalma123';
  const linkedin = 'https://www.linkedin.com/in/rommel-palma-675b8a272/';

  return (
    <footer>
      <div className='contenedor-footer'>
        <div className='footer-grid-items'>
          <div className='item-whatsapp'>
            <IoLogoWhatsapp />
          </div>
          <p>Whatsapp</p>
          <p>You can contact me directly by whatsapp</p>
          <a href={Whatsapp()} target='_blank' rel='noopener noreferrer'>
            Contact me
          </a>
        </div>
        <div className='footer-grid-items'>
          <div className='item-github'>
            <AiFillGithub />
          </div>
          <p>Github</p>
          <p>Check some of my completed projects</p>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            Check the code
          </a>
        </div>
        <div className='footer-grid-items'>
          <div className='item-linkedin'>
            <ImLinkedin />
          </div>
          <p>Linkedin</p>
          <p>Check my linkedin profile</p>
          <a href={linkedin} target='_blank' rel='noopener noreferrer'>
            Check my profile
          </a>
        </div>
        <div className='footer-grid-items'>
          <div className='item-gmail'>
            <SiGmail />
          </div>
          <p>Gmail</p>
          <p>You can contact palmarommel.78@gmail.com</p>
          <a rel='noopener noreferrer'>Write me</a>
        </div>
      </div>
    </footer>
  );
};
