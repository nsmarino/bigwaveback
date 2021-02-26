import 'dotenv/config'

export default {
  printfulApiKey: process.env.PRINTFUL_API_KEY ?? '',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? '',
 }