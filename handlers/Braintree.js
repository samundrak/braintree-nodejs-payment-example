var braintree = require('braintree');
var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "tqychscnd9g23xfj",
    publicKey: "4ztthsngp5xrnnqs",
    privateKey: "06dcc99b73b1c89beab199b0e320328a"
});
module.exports = {
    process: (req, res, next) => {
        gateway.clientToken.generate({}, (err, response) => {
            res.send(response.clientToken);
        });
    },
    checkout(req, res) {
        var nonce = req.body.payment_method_nonce;
        console.log(nonce);
        gateway.transaction.sale({
            amount: req.body.amount,
            paymentMethodNonce: nonce,
            options: {
                submitForSettlement: true
            }
        }, function(err, result) {
        		if(err){
        			return res.send("Error doing payment");
        		}

        		if(result.success)
        			if(result.transaction.status)
		        		return res.send("Payment has been done");
        		
        		console.log(result)
        		return res.send("Error doing payment");
        });
    }
}
