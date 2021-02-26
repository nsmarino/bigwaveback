// Queries
import allProducts from './queries/allProducts'

// Resolvers
import variants from './variants'

// Mutations
import estimateOrderCosts from './mutations/estimateOrderCosts'
import createPaymentIntent from './mutations/createPaymentIntent'
import checkout from './mutations/checkout'

const resolvers = {
    Query: {
      allProducts,
    },
    Product: {
      variants,
    },
    Mutation: {
      estimateOrderCosts,
      createPaymentIntent,
      checkout,
    }
}

export default resolvers
