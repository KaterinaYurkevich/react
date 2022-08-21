import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/server'

export async function getNews() {
  try {
    const response = await axios.get(`${BASE_URL}arts.json?api-key=${API_KEY}`);
    return response.data
  } catch (error) {
    console.error(error);
  }
}