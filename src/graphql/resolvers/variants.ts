import { Context } from '../types'

const variantsResolver = async ({ id }:{id:string}, __:unknown, { dataSources }:Context) => {
  return dataSources.printfulAPI.getVariants(id)
}

export default variantsResolver