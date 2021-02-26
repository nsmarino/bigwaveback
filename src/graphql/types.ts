import Stripe from "stripe";
import PrintfulAPI from "./datasources/printful";

export interface Variant {
  id: string
  name: string
  retail_price: string
  sku: string
}

export interface Product {
  id: string
  name: string
  variants: [Variant]
  thumbnail_url: string
}

export interface Recipient {
  address1: string
  address2: string
  city: string
  country_code: string
  name: string
  email: string
  phone: string
  state_code: string
  zip: string
}

export interface OrderInput {
  items:[Product]
  recipient:Recipient
}

export interface StripeInput {
  total: number
  orderId: string
  email: string
}



export interface DataSources {
  printfulAPI: PrintfulAPI
}

export interface Context {
  dataSources: DataSources
  stripe: Stripe
}