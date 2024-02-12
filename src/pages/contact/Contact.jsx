import React, { useState } from 'react';
import '@/styles/contact.css';
import { Footer } from '@/components/Footer.jsx';
import { createContact } from '@/helpers/constans';
import { useServer } from '@/contexts/serverContext.jsx';

export const Contact = () => {
  const server = useServer();
  const [post, setPost] = useState(createContact);

  const createContactUser = async () => {
    try {
      const data = {
        nombre: post.nombre,
        email: post.email,
        asunto: post.asunto,
        descripcion: post.descripcion,
      };
      await server.CreateContact(data);
    } catch (err) {
      console.log('error', err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className='form-info'>
        <b>
          Aqui puedes contactarte conmigo, al enviar los datos solicitados, respondere, lo mas
          rapido posible, cuando me llegue la notificacion de un nuevo registro, gracias por tu
          atencion.
        </b>
      </div>
      <div className='form-container'>
        <form className='form'>
          <div className='form-input-name'>
            <input
              type='text'
              className='input-name'
              name='name'
              id='username'
              placeholder='Write your name'
              onChange={(e) => {
                setPost({ ...post, nombre: e.target.value });
              }}
            />
            <label htmlFor='username' className='label-name'>
              Nombre
            </label>
          </div>
          <div className='form-input-email'>
            <input
              type='email'
              id='email'
              name='email'
              className='input-email'
              placeholder='ejemplo@gmail.com'
              onChange={(e) => {
                setPost({ ...post, email: e.target.value });
              }}
            />
            <label htmlFor='email' className='label-email'>
              Email
            </label>
          </div>
          <div className='form-input-asunto'>
            <input
              className='input-asunto'
              type='text'
              id='asunto'
              name='asunto'
              placeholder='Escriba un asunto'
              onChange={(e) => {
                setPost({ ...post, asunto: e.target.value });
              }}
            />
            <label htmlFor='asunto' className='label-asunto'>
              Asunto
            </label>
          </div>

          <div className='form-input-description'>
            <textarea
              placeholder='Descripción'
              id='description'
              name='description'
              className='input-description'
              rows='3'
              onChange={(e) => {
                setPost({ ...post, descripcion: e.target.value });
              }}
            />
            <label htmlFor='description' className='label'>
              Descripción
            </label>
          </div>
          <div className='form-buttom'>
            <button onClick={() => createContactUser()} className='buttom'>
              Sent
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
