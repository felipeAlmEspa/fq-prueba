import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Card,
    CardBody,
    Text,
    Grid,
    GridItem,
    TagLabel,
    Tag,
    Spinner,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Box,
    Image,
    Center,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Pokemon } from '../../modelo/Pokemon';
import { getNamePokemon } from '../../services/pokemon/PokemonServices';


function PokemonModal({ pokemonNome = '' }) {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    async function buscarPokemon(){
        const poke = await getNamePokemon(pokemonNome);
        setPokemon(poke);
    }

    const HabilidadesTabla = () => {

        if (pokemon != undefined) {
            return (
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Habilidades</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {pokemon.abilities.map((item, idx) => {
                                return <Tr key={idx} >
                                    <Td >{item.ability.name}</Td>
                                </Tr>

                            })}
                        </Tbody>

                    </Table>
                </TableContainer>
            );
        } else {
            return <></>
        }
    }

    const PokemonInfoBasica = () => {
        return <div>
            {pokemon !== undefined ?
                <>
                    <Center boxSize='initial' >
                        <Image src={pokemon.sprites.front_default} alt='Dan Abramov' />
                    </Center>
                    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                        <GridItem w='100%' h='10'>
                            <Tag>Nombre</Tag>
                            <Text>{pokemon.name}</Text>
                        </GridItem>
                        <GridItem w='100%' h='10'>
                            <Tag>Peso</Tag>
                            <Text>{pokemon.weight} lb.</Text>
                        </GridItem>
                        <GridItem w='100%' h='10' >
                            <Tag>Altura</Tag>
                            <Text>{pokemon.height} cm.</Text>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns='repeat(3, 1fr)' gap={6} paddingTop={'10'}>
                        <GridItem w='100%' h='10'>
                            <Tag>Tipo</Tag>
                            {pokemon.types.map(item=>{
                                return <Text key={item.type.name}>{item.type.name}</Text>
                            })}
                        </GridItem>
                       
                    </Grid>
                </>
                :
                <Spinner />
            }
        </div>
    }


    return (
        <>
            <Button onClick={()=> {onOpen();buscarPokemon()}}>Ver detalles</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{pokemonNome.toUpperCase()}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Tabs>
                            <TabList>
                                <Tab>INFORMACION BASICA</Tab>
                                <Tab>HABILIDADES</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <PokemonInfoBasica />
                                </TabPanel>
                                <TabPanel>
                                    <HabilidadesTabla />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Aceptar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default PokemonModal;