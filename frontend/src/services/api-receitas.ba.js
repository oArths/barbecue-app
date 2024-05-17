import axios from 'axios'
import { config } from 'dotenv'


config();

const api = axios.create({
    baseURL: process.env.API_HOST,
});


export const get_by_search_name = async (name) => await api.get(`/search?name=${name}`)

export const get_by_id = async (id) => await api.get(`/${id}`)

export const get_latest_recipe = async () => await api.get('/latest')