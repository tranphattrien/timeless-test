const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51JztklIqRpbznYltfsHYzXIl2mxNIYsuLUcaN4izUh6dzfeZk6COUBqO55xCMOCR4f1iPLUzxgki341BnkTUEZbc00XJi8N5Mv"
); //error

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
