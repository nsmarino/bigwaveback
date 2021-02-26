import { Context, OrderInput } from "../../types"

const estimateOrderCosts = async (_:unknown, { input }:{input:OrderInput}, { dataSources}:Context) => {
  try {

    const { costs } = await dataSources.printfulAPI.estimateOrderCosts(input)

    const estimatedCosts = {
        currency: costs.currency,
        shippingRate: costs.shipping,
        taxRate: costs.tax,
        vatRate: costs.vat
    }
    return estimatedCosts

  } catch (err) {
      return err
  }
}

export default estimateOrderCosts