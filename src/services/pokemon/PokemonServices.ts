
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Api } from '../../configuracion/ConfiguracionApi';
import { Pokemon, ResulArrayPokemon } from './../../modelo/Pokemon';



const api = Api.url;
const modulo = 'pokemon/';

export async function getTodosPokemon(): Promise<ResulArrayPokemon> {
    return  await axios.get<ResulArrayPokemon>(api + modulo+'?limit=10000').then(response => { return response.data })
}

export async function getNamePokemon(name: string): Promise<Pokemon> {
    return  await axios.get<Pokemon>(api + modulo+name).then(response => { return response.data })
}


export async function getIdPokemon(id: number): Promise<Pokemon> {
    return  await axios.get<Pokemon>(api + modulo+id).then(response => { return response.data })
}

// export const useGetEmployees = (filters: any) => {
//     // Notice we only use `employees` as query key, because we want to preserve our cache
//     return useQuery(
//       ['employees'],
//       () => (filters),
//       // We pass a third argument to our useQuery function, an options object
//       {
//         select: (employees) => employees.filter((employee) => employee.name.includes(filters.name) ),
//       }
//     );
//   };