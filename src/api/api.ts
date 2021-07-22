import axios from 'axios'

const url = 'https://city-mobil.ru/api/cars'

export async function getCarsData() {
  try {
    const responce = await axios.get(url)
    return responce
  } catch (error) {
    console.error(error)
  }
}