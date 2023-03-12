// Note: Order api routes are defined here...!
const express = require("express");
const router = express.Router();

let dummyData = ["Onion", "Tomato", "Lemon"];

// const stripe = require("stripe");
// const useStripe = new stripe("sk_test_...");
const stripe = require("stripe")('sk_test_51MRdfDD6H4QCeW9vDGxbF4fnfCX3VGRgxRDbo9OAyJzx0NdrABHA7eNXp80cce1nQCJRKtyNRPCpJcnctyk6qDqs00xburdbpU');
const YOUR_DOMAIN = 'http://localhost:3000';



// Note: checkout route
router.post('/create-checkout-session', async (req, res) => {
    const customer = await stripe.customers.create({
        metadata: {
            userId: "63b59aa7b5ec12b6b49638a7",
            customerEmail: "ahmed@gmail.com",
            customerName: "Shahzada Ahmed",
            cart: JSON.stringify(dummyData)
        }
    });
    const session = await stripe.checkout.sessions.create({
        customer: customer.id,
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                        description: "Local ipsum"
                    },
                    unit_amount: 5000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    console.log(`Session: ${session.url}`);
    // res.redirect(303, session.url);

    if (session) {
        return res.status(200).send({
            status: true,
            message: "Go to checkout!",
            url: session.url
        });
    };
});

// Note: Webhook event...!

router.post('/payment/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];

    let endpointSecret;
    let eventTypes;
    let data;

    if (endpointSecret) {
        try {
            let event;
            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
            console.log(`Success event: ${event}`);
        }

        catch (err) {
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
    }

    else {
        data = req.body.data.object;
        eventTypes = req.body.type;
    };


    if (eventTypes === "checkout.session.completed") {
        stripe.customers.retrieve(data.customer)
            .then((customer) => {
                try {
                    if (customer) {
                        console.log(`Customer: ${customer}`);
                        console.log(`Data: ${data}`);
                    }
                }

                catch (error) {
                    console.log(`SOmething went wrong: ${error}`);
                }
            })
            .catch((err) => {
                console.log('Events err: ', err);
            })
    };

    // Return a 200 response to acknowledge receipt of the event
    res.status(200).send();
});

module.exports = router;