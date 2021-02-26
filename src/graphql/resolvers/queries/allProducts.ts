import { Context } from "../../types"

const allProductsResolver = async (_:unknown, __:unknown, { dataSources }:Context) =>
  dataSources.printfulAPI.getAllProducts()

export default allProductsResolver