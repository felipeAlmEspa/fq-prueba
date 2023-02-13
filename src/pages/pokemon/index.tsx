

import { Box, Button, Center, Grid, GridItem, Input, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react';
import { ResulArrayPokemon, Result } from '../../modelo/Pokemon';
import { getTodosPokemon } from '../../services/pokemon/PokemonServices';
import PokemonModal from './Pokemon';

const PokemonPage = () => {
    const [listaPokemon, setListaPokemon] = useState<Result[]>();
    const pokemonsResult = useQuery({ queryKey: ['pokemons'], queryFn: todos });
    const [totalPokemons, setTotalPokemons] = useState(0);
    useEffect(() => {

    }, [])

    async function todos() {
        const r = await getTodosPokemon();
        setListaPokemon(r.results);
        setTotalPokemons(r.results.length);
        return r;
    }

    function onChangeTerminoBusq(value: string) {
        const data = pokemonsResult.data;
        if (data !== undefined) {
            if (value) {

                const filterPokemons = data.results.filter((item) => {
                    return (item.name.toUpperCase() + ' ' + item.url.toUpperCase()).includes(value.toUpperCase());
                });
                setListaPokemon(filterPokemons);

            } else {
                setListaPokemon(data.results);
            }
        }
    }






    if (listaPokemon === undefined) {
        return (
            <Center>
                <Spinner />
            </Center>
        );
    } else {
        return (
            <>
                <Box padding={'10px'} >
                            <Input placeholder='Ingresar termino de busqueda' onChange={v=>onChangeTerminoBusq(v.target.value)} />

                </Box>
                <TableContainer >
                    <Table variant='striped' >
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>NOMBRE</Th>
                                <Th>URL</Th>
                                <Th >ACCION</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {listaPokemon.map(function (item, index) {
                                if (index < 10) {
                                    return <Tr key={index} >
                                        <Td >{item.name}</Td>
                                        <Td >{item.url}</Td>
                                        <Td><PokemonModal pokemonNome={item.name} /></Td>
                                    </Tr>
                                }

                            })}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                {/* <Th>
                                        <Text>CANTIDAD</Text>
                                        <Input defaultValue={canitdadItem} type={'number'} placeholder="Ver" style={{ maxWidth: '100px' }} onChange={v => customPagination(v.target.value, 'input')} />
                                    </Th> */}

                                <Th isNumeric>Total: {totalPokemons}</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </>
        );
    }


}

export default PokemonPage;

