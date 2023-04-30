import React, { useState } from 'react'
import axios from 'axios'
import '../../css/contact.css'
import uniquid from 'uniquid'
import { Footer } from './../home/Footer.jsx'

export const Contact = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [asunto, setAsunto] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [nombreError, setNombreError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [asuntoError, setAsuntoError] = useState('')
  const [descripcionError, setDescripcionError] = useState('')
  const [enviado, setEnviado] = useState(false) // Nuevo estado
  const [mensaje, setMensaje] = useState()

  function verificarCampos () {
    let isValid = true

    if (!nombre.trim()) {
      setNombreError('Por favor, ingrese su nombre')
      isValid = false
    }

    if (!email) {
      setEmailError('Por favor, ingrese su correo electrónico')
      isValid = false
    }

    if (!asunto.trim()) {
      setAsuntoError('Por favor, ingrese un asunto')
      isValid = false
    }

    if (!descripcion) {
      setDescripcionError('Por favor, ingrese una descripción')
      isValid = false
    }

    if (!isValid) {
      setMensaje('Llene todos los campos')
      isValid = false
    } else {
      setMensaje('Enviado correctamente')
      isValid = true
    }

    return isValid
  }

  function agregar () {
    const usuario = {
      nombre,
      email,
      asunto,
      descripcion,
      idcontacto: uniquid()
    }

    function limpiarInputs () {
      setNombre('')
      setEmail('')
      setAsunto('')
      setDescripcion('')
    }

    axios
      .post('https://portafolio-5yko.onrender.com/api/contacto', usuario)
      .then((res) => {
        limpiarInputs()
        console.log(res)
        setEnviado(verificarCampos(), true) // Establecer el estado como true
      })
      .catch((err) => {
        console.log('error al enviar los datos', err.message)
      })
  }

  return (
    <div>
      <div className='form-info'>
        <b>
          Aqui puedes contactarte conmigo, al enviar los datos solicitados,
          respondere, lo mas rapido posible, cuando me llegue la notificacion de
          un nuevo registro, gracias por tu atencion.
        </b>
      </div>

      <div>
        {mensaje
          ? (
            <div
              className={enviado ? 'alert-success' : 'alert-error'}
              role='alert'
            >
              {enviado
                ? 'send success'
                : 'Error to send, verify your info'}
            </div>
            )
          : null}
      </div>

      <div className='form-container'>
        <div className='form'>
          <div className='form-input-name'>
            <input
              type='text'
              className='input-name'
              id='username'
              placeholder='Write your name'
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value)
              }}
              onFocus={() => {
                setNombreError('')
              }}
            />
            <label
              htmlFor='username'
              className='label-name'
            >
              Nombre
            </label>
            {nombreError && (
              <div
                className='alerta'
                role='alert'
              >
                {nombreError}
              </div>
            )}
          </div>
          <div className='form-input-email'>
            <input
              type='email'
              id='email'
              className='input-email'
              placeholder='ejemplo@gmail.com'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              onFocus={() => {
                setEmailError('')
              }}
            />
            <label
              htmlFor='email'
              className='label-email'
            >
              Email
            </label>
            {emailError && <div className='alerta'>{emailError}</div>}
          </div>
          <div className='form-input-asunto'>
            <input
              className='input-asunto'
              type='text'
              id='asunto'
              placeholder='Escriba un asunto'
              value={asunto}
              onChange={(e) => {
                setAsunto(e.target.value)
              }}
              onFocus={() => {
                setAsuntoError('')
              }}
            />
            <label
              htmlFor='asunto'
              className='label-asunto'
            >
              Asunto
            </label>
            {asuntoError && (
              <div
                className='alerta'
                role='alert'
              >
                {asuntoError}
              </div>
            )}
          </div>

          <div className='form-input-description'>
            <textarea
              placeholder='Descripción'
              id='description'
              className='input-description'
              rows='3'
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value)
              }}
              onFocus={() => {
                setDescripcionError('')
              }}
            />
            <label
              htmlFor='description'
              className='label'
            >
              Descripción
            </label>
            {descripcionError && (
              <div className='alerta'>{descripcionError}</div>
            )}
          </div>
          <div className='form-buttom'>
            <button
              onClick={agregar}
              className='buttom'
            >
              Sent
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
