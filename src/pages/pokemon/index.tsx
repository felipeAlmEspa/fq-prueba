import * as React from "react";
import { useEffect, useState } from "react";
import { getTodosPokemon } from "../../services/pokemon/PokemonServices";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Input,
    Button,
    Text,
} from '@chakra-ui/react'
import PokemonModal from "./Pokemon";




type typeListPokemon = {
    name: string;
    url: string;
};



export default function PokemonPage() {

    const [pokemons, setPokemons] = useState<typeListPokemon[]>([]);
    const [tempListPokemon, setTemListPokemon] = useState<typeListPokemon[]>([]);
    const [canitdadItem, setCantidadItem] = useState(5);
    const [totalItem, setTotalItem] = useState(0);
    // const [pageLimit1, setPageLimit1] = useState(1);
    // const [pageLimit2, setPageLimit2] = useState(5);

    const columnsTable = [
        {
            id: 1,
            title: 'NOMBRE',
            width: 100,
        },
        {
            id: 2,
            title: 'URL',
            width: 300,
        },
        {
            id: 3,
            title: 'ACCION',
            width: 300,
        },
    ]
    useEffect(() => {
        miConstructor();
    }, []);

    async function miConstructor() {
        const result = await getTodosPokemon();
        setPokemons(result.results);
        setTemListPokemon(result.results);
        setTotalItem(result.results.length);
    }


    function onChangeTerminoBusq(value: string) {
        const listatemp: typeListPokemon[] = tempListPokemon;
        
        if (value) {
            const filterPokemons = listatemp.filter((item) => {
                    return (item.name.toUpperCase()+' '+item.url.toUpperCase()).includes(value.toUpperCase());
            });
            setPokemons(filterPokemons);
        } else {
            setPokemons(listatemp);
        }
    }

    function customPagination(value: string, accion: string) {
        switch (accion) {
            case 'input':
                if(value.length > 0) {
                    const inPage = parseInt(value);
                    setCantidadItem(inPage);
                }else{
                    setCantidadItem(0);
                }
            break;
            case 'anterior':
               
            break;
            case 'siguiente':
                
            break;
        }
    }




    if (pokemons !== undefined) {
        return (
            <div style={{ width: '100%', padding: '10px' }}>
                <Input placeholder='Ingresar termino' onChange={v => onChangeTerminoBusq(v.target.value)} />
                <TableContainer >
                    <Table variant='striped' >
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                {columnsTable.map(item => {
                                    return <Th key={item.id}>{item.title}</Th>
                                })}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {pokemons.map(function (item, idx) {
                                if (idx < canitdadItem) {
                                    return <Tr key={idx} >
                                        <Td >{item.name}</Td>
                                        <Td >{item.url}</Td>
                                        <Td><PokemonModal pokemonNome={item.name}/></Td>
                                    </Tr>
                                }

                            })}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>
                                    <Text>CANTIDAD</Text>
                                    <Input defaultValue={canitdadItem} type={'number'} placeholder="Ver" style={{ maxWidth: '100px' }} onChange={v => customPagination(v.target.value, 'input')} />
                                </Th>
                                <Th>
                                    {/* <Button onClick={() => customPagination('anterior', 'button')}>anterior</Button>
                                    <Button onClick={() => customPagination('siguiente', 'button')}>siguiente</Button> */}
                                </Th>
                                <Th isNumeric>Total: {totalItem}</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </div>
        );
    } else {
        return (
            <div>Cargando...</div>
        );
    }




}