$.get('/braintree', function(data) {

    window.localStorage.setItem('token', data);
    braintree.setup(data, "dropin", {
        container: 'payment-form',
        paypal: {
            singleUse: true,
            amount: 10.00,
            currency: 'USD',
            locale: 'en_us',
            enableShippingAddress: true,
            headless: true
        }
    });
})
