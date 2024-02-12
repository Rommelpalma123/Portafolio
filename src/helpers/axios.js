import Axios from 'axios'

export const postAxios = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    Axios.post(url, data)
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  })
}