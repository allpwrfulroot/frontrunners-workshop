import React from 'react'
import ApolloClient from 'apollo-boost'
import { useLazyQuery } from '@apollo/react-hooks'

import POKEMON_IDS from 'data/pokemon-ids.json'
import GET_POKEMON from 'data/get-pokemon.gql'

const pokeClient = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql',
})

function Pokemon() {
  const [getPokemon, { loading, data }] = useLazyQuery(GET_POKEMON, {
    client: pokeClient,
  })

  const randomPokemon = e => {
    e.preventDefault()
    const number = Math.floor(Math.random() * 152 + 1)
    getPokemon({ variables: { id: POKEMON_IDS[number].id } })
  }

  return (
    <>
      <h1>Yay pokemon!</h1>
      <button onClick={randomPokemon}>Random Pokemon provider</button>
      {data ? (
        <p>
          Current pokemon: {data.pokemon.name} [{data.pokemon.number}]
        </p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p>Click the button to see a pokemon!</p>
      )}
    </>
  )
}

export default Pokemon
