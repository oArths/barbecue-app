import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-receitas-ba.onrender.com/recipes",
});


export const get_by_search_name = async (name) => (await api.get(`/search?name=${name}`)).data

export const get_by_id = async (id) => (await api.get(`/${id}`)).data

export const get_latest_recipe = async () => (await (api.get('/latest'))).data

