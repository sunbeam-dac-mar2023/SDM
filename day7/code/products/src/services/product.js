import axios from 'axios'

const BASE_URL = 'http://13.234.20.103:4000'

export const getProducts = async () => {
  const response = await axios.get(BASE_URL + '/product')
  return response.data
}
