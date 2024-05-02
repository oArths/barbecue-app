import axios from 'axios'
import * as fs from 'expo-file-system';

// cria a conexão com a api
const api = axios.create({
    baseURL: "https://gold-anemone-wig.cyclic.app/receitas"
})

const pathReceitasDatabase = "./backend/database/receitas.txt"

// consulta e guarda as receitas
export const consultarTodasReceitas = async () => {
    return fs.readAsStringAsync(pathReceitasDatabase)
        .then((receitas) => JSON.parse(receitas))
        .catch((err) => api
            // consultas as receitas caso não existam
            .get("/todas")
            .then((response) => {
                // guarda as receitas em um arquivo local
                fs.writeAsStringAsync(pathReceitasDatabase, JSON.stringify(response.data))
                return response.data
            }))

}

export const pesquisarReceitaPorNome = async (nome) => {

    console.log(nome)
    return await
        consultarTodasReceitas()
            .then((receitas) => receitas
                .filter((receita) => removerFormatacao(receita.receita).startsWith(removerFormatacao(nome))))
}


export const consultarReceitaPorId = async (id) => await
    consultarTodasReceitas()
        .then((receitas) => receitas
            .find((receita) => receita.id == id))

const removerFormatacao = (texto) => removerAcentos(texto.toLowerCase())

function removerAcentos(texto) {
    return texto.replace(/[áàâã]/g, 'a')
        .replace(/[éèê]/g, 'e')
        .replace(/[íìî]/g, 'i')
        .replace(/[óòôõ]/g, 'o')
        .replace(/[úùû]/g, 'u')
        .replace(/[ÁÀÂÃ]/g, 'A')
        .replace(/[ÉÈÊ]/g, 'E')
        .replace(/[ÍÌÎ]/g, 'I')
        .replace(/[ÓÒÔÕ]/g, 'O')
        .replace(/[ÚÙÛ]/g, 'U')
        .replace(/[ç]/g, 'c')
        .replace(/[Ç]/g, 'C');
}











// console.log(await consultarTodasReceitas())
// console.log(await consultarReceitaPorId(1))
// console.log(await pequisarReseita("ma"))
