
import axios from 'axios';
import { Api } from '../../Configuracion';
import { Pokemon, ResulArrayPokemon } from './../../modelo/Pokemon';



const api = Api.url;
const modulo = 'pokemon/';

export async function getTodosPokemon(): Promise<ResulArrayPokemon> {
    return  await axios.get<ResulArrayPokemon>(api + modulo).then(response => { return response.data })
}

export async function getNamePokemon(name: string): Promise<Pokemon> {
    return  await axios.get<Pokemon>(api + modulo+name).then(response => { return response.data })
}


export async function getIdPokemon(id: number): Promise<Pokemon> {
    return  await axios.get<Pokemon>(api + modulo+id).then(response => { return response.data })
}
