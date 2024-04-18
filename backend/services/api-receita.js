import axios from "axios";
import { writeFile, readFileSync } from "fs";
import { removerAcentos } from "../utils/formatText";

// https://github.com/DenilsonRabelo/API-Receitas
const api = axios.create({
  baseURL: "https://gold-anemone-wig.cyclic.app/receitas",
});

export async function buscarReceitaPorId(id = 0) {
  // id da receita buscada
  const receitaId = id || 1;

  return (await api.get(`/${receitaId}`)).data;
}

export async function buscarTodasAsReceitas() {
  // consultas todas as receitas salgadas
  return api.get("/tipo/salgado").then(response => {
    writeFile("receitas.txt", JSON.stringify(response.data), (err) => {
      if (err) return ("Erro ao guardar a lista de receitas: " + err);
    });

    return response.data;    
  });

  // salva as receitas em um arquivo de texto
}

export function buscarReceita(nomeReceita = "") {

  // pega o arquivo de receitas guardado como texto
  const receitas = readFileSync("./receitas.txt", "utf8");

  // tran0sforma o arquivo em JSON
  return JSON.parse(receitas)
  
  // seleciona as receitas que correspondem ao nome da receita digitado
  .filter((receita) => {

    console.log(receita.receita.includes(nomeReceita))
    return removerAcentos(receita.receita.toLowerCase()).includes(nomeReceita.toLowerCase())
  }
  );

}