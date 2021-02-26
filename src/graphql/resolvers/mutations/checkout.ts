import { Context, OrderInput } from "../../types"

const checkout = async (_:unknown, { input }:{input:OrderInput}, { dataSources}:Context) => {
  try {

    const data = await dataSources.printfulAPI.createOrder(input)

    return { printfulOrderId: data.id, orderTotal: data.costs.total }

  } catch (err) {
      return err
  }
}

export default checkout