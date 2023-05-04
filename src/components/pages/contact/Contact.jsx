import React, { useEffect, useState } from 'react'
import '../../css/contact.css'
import { Footer } from './../home/Footer.jsx'
import { API, graphqlOperation } from 'aws-amplify'
import { createContacto } from '../../../graphql/mutations'
import { listContactos } from '../../../graphql/queries'

export const Contact = () => {
  const [post, setPost] = useState({
    name: '',
    email: '',
    asunto: '',
    description: ''
  })
  const [contactos, setContactos] = useState([])
  const [nombreError, setNombreError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [asuntoError, setAsuntoError] = useState('')
  const [descripcionError, setDescripcionError] = useState('')
  const [enviado, setEnviado] = useState(false) // Nuevo estado
  const [mensaje, setMensaje] = useState()

  useEffect(() => {
    async function loadContacts () {
      const resultado = await API.graphql(graphqlOperation(listContactos))
      setContactos(resultado.data.listContactos.items)
    }
    loadContacts()
  })

  function verificarCampos () {
    let isValid = true

    if (!post.name) {
      setNombreError('Por favor, ingrese su nombre')
      isValid = false
    }

    if (!post.email) {
      setEmailError('Por favor, ingrese su correo electrónico')
      isValid = false
    }

    if (!post.asunto) {
      setAsuntoError('Por favor, ingrese un asunto')
      isValid = false
    }

    if (!post.description) {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviado(verificarCampos())
    await API.graphql(graphqlOperation(createContacto, { input: post }))
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
              {enviado ? 'send success' : 'Error to send, verify your info'}
            </div>
            )
          : null}
      </div>
      <div className='form-container'>
        <form
          className='form'
          onSubmit={handleSubmit}
        >
          <div className='form-input-name'>
            <input
              type='text'
              className='input-name'
              name='name'
              id='username'
              placeholder='Write your name'
              onChange={(e) => {
                setPost({ ...post, name: e.target.value })
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
              name='email'
              className='input-email'
              placeholder='ejemplo@gmail.com'
              onChange={(e) => {
                setPost({ ...post, email: e.target.value })
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
              name='asunto'
              placeholder='Escriba un asunto'
              onChange={(e) => {
                setPost({ ...post, asunto: e.target.value })
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
              name='description'
              className='input-description'
              rows='3'
              onChange={(e) => {
                setPost({ ...post, description: e.target.value })
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
            <button className='buttom'>Sent</button>
          </div>
        </form>
      </div>
      <div>
        {
          contactos.map((contacto) => {
            return (
              <div key={contacto.id}>
                <table className='tabla-info'>
                  <h3>{contacto.name}</h3>
                  <h3>{contacto.asunto}</h3>
                  <h3>{contacto.description}</h3>
                </table>
              </div>
            )
          })
        }
      </div>
      <br />
      <Footer />
    </div>
  )
}
