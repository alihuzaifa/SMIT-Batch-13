import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.get('/plans', async (_, res) => {
    const allPlans = await stripe.products.list({
        expand: ['data.default_price']
    });
    const mappedPlans = allPlans.data.map(prod => ({
        productId: prod.id,
        priceId: prod.default_price.id,
        name: prod.name,
        description: prod.description,
        unit_amount: prod.default_price.unit_amount,
    }));

    res.send({
        message: "Products Response",
        data: mappedPlans
    });
});

app.post('/create-checkout-session', async (req, res) => {
    const { priceId } = req?.body;
    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/cancel'
    });
    res.send({ url: session.url });
})

app.listen(5000, () => {
    console.log(`Server is running on PORT 5000`);
})