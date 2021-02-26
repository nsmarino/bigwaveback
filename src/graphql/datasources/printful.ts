import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import config from '../../utils/config'
import { Variant, OrderInput} from '../types'

class PrintfulAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL='https://api.printful.com/'
    }

    // Header included with every request sent to Printful
    willSendRequest(request: RequestOptions) {
        request.headers.set(
          'Authorization',
          `Basic ${Buffer.from(config.printfulApiKey).toString('base64')}`
        );
      }

    async getAllProducts() {
      const response = await this.get('store/products')
      const products = response.result
      return products
    }
    
    async getVariants(id:string) {
      const response = await this.get(`store/products/${id}`)
      const variants:[Variant] = response.result.sync_variants.map((variant:Variant) => {
        return {
          id: variant.id,
          name: variant.name,
          retail_price: variant.retail_price,
          sku: variant.sku,
        }
      })
      return variants
    }

    async createOrder({ items, recipient }:OrderInput) {
      try {
        const { result: data } = await this.post(`orders`, {
          items,
          recipient,
        });
  
        return data;
      } catch (err) {
        console.error(err);
      }
    }

    async estimateOrderCosts({ items, recipient }:OrderInput) {
      try {
        const { result: data } = await this.post(`orders/estimate-costs`, {
          items,
          recipient,
        });
  
        return data;
      } catch (err) {
        console.error(err);
      }
    }

}

export default PrintfulAPI