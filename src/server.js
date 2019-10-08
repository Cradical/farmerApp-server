require('dotenv').config()
import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'

const server = new ApolloServer({ typeDefs })

server.listen().then(({ url }) => {
  console.log(`happily listening on ${url}`)
})
