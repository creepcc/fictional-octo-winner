const router = require('express').Router();
let { Contract } = require("../models/Contracts.js")

router.route('/').get((req, res) => {
  let options = {
    sort: {
      created_on: -1
    },
    skip: !isNaN(req.query.skip) ? Number(req.query.skip) : 0,
    limit: Number(req.query.limit) || 5,
  };

  Contract.find({}, null, options)
    .then(contracts => res.json(contracts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    let newContract = new Contract({
      token: req.body.token,
      address: req.body.address,
      name: req.body.name,
      listingPrice: Number(req.body.listingPrice),
      holders: Number(req.body.holders),
      mintedSupply:  Number(req.body.mintedSupply),
      marketCap: Number(req.body.marketCap),
      initialPool: Number(req.body.initialPool),
      verified: req.body.verified
    });
    newContract.save()
    .then(() => res.json('Contract added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;