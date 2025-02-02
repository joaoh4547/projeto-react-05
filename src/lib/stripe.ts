import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
    apiVersion: "2025-01-27.acacia",
    appInfo: {
        name: "Ignite Shop",

    }
});