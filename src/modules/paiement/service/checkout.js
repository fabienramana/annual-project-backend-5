const stripe = require('stripe')('sk_test_51Jb0YzCMZY53TvJlHnNg0zMaLPk5G1NLqoLjSZzDznAJvhcNLekSfwF254EOZp86CsFkBucn9gYRjpPBCMzO9gaG00Rlw0wNyB')


module.exports = async (data, success_url, cancel_url) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: data,
        mode: 'payment',
        success_url,
        cancel_url,
    });

    console.log(session.url)
    return session.id;
}