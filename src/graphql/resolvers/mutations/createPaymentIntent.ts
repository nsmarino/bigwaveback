import { Context, StripeInput } from "../../types";

const createPaymentIntent = async (_:unknown, { input }:{input:StripeInput}, { stripe }:Context) => {

  try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: input.total,
        currency: 'usd',
        description: input.orderId,
        receipt_email: input.email,
    })

    return {
      id: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
      status: paymentIntent.status,
      description: paymentIntent.description,
    }

  } catch (err) {
      return err
  }
}

export default createPaymentIntent;

