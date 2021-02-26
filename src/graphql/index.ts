import { ApolloServer } from 'apollo-server-express'
import PrintfulAPI from './datasources/printful'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

// Stripe Configuration:
import Stripe from 'stripe';
import config from '../utils/config'
const stripe = new Stripe(config.stripeSecretKey, {
  apiVersion: '2020-08-27',
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    printfulAPI: new PrintfulAPI()
  }),
  context: () => ({
    stripe,
  }),
  introspection: true,
})

export default server