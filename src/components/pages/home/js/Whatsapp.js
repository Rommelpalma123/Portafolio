export const Whatsapp = () => {
  const whatsappMessage = 'Hola, estoy interesado en tu trabajo ✌️'
  const phoneNumber = '967760813'
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`
  return url
}
