# saleCheck


`notInSaleSite.csv` - Contains all txs that have sent to the stash wallet directly (Does not have Polkadot address)

`normalContribution.csv` - Contains all txs that have contributed via the sale website. (Has Polkadot address)

`multipleContribution.csv` - Contains all txs that have multiple contributions


`dot_sale_tx.json` - All DOT sale txs (1078 txs)

`recentTxs.json` - The script has not considered the recent txs (10 txs)



### How to run

```
yarn
node index.js
```


### Output

```
node index.js 
No. of notInSaleSiteCounter:  26
Those notInSaleSite Hashes:  [
  'd1e83c6beacb5c0c3f0d8fb18bad642c493a0b1f92d84650a024e596f224d8bd',
  '5eb9246e1bb1ac2fae03d1392656d88e3467b0b0f3651d9aca604ad7e43d4670',
  '6837b89ae998b1ae1f9bd5f2a7c3955c4387a35023a61d092a5943923cf568d8',
  'f2f5a02de1d8b7a5208e93cc6af6f3d680625345a530f6ea5fac610962922ea8',
  '5c8d6f08473cb81d702a8e5d7355b972eec17ee240fe467bfb0e6ab8e1dfeb28',
  '8622d93456df651f25fe8a8e8880339c7e66079e25b4d74f79b1b1ca4c617afe',
  'cd15db2831935f975c872c85ab37d2fa825ef838dd70efa321a0cf53ec05c09c',
  '6aeb90de8a0ccd9fd183e079faff56d1cccfc970ded4cd0518b617aa229b11d4',
  'e5415ce47a38f041be9bed7cdb2cd1c338a9293b5dceca10e2bdcad8fe1172d5',
  '85b58d8f1dc9463830a9c1ad15fd66fd570645a9e573f6e38c5f2bb6a2545886',
  'a737651a608f7018e8acd34f1d20ceadb4c1bc77266f1ce442a5eb9b94cefb4f',
  '7f1005ee0ae51974cc6bb2a3da481a32c6708f0475119aa799d20d358d0452ad',
  'd45836a2a6d03c2f26e30ea890842758c28ec7accf5c98d916c7b0ff2249f8a6',
  '54e85dc1d3cc346cfdba7faba2159e6680c9229e930b038f8073620dd2df2341',
  '066b8a19d02f9b00ace02c9796453d3180cce46e7fa1b5ad9c6d17b1bb9850e4',
  '4feea7916e44dba45033d4798cecee6d900e93d3df73ef222469e3a7ee18dc4b',
  '8e5a25776f938f715814d415e807e747123adb359869995b9a2fb4301c582a62',
  'a00174d6907e4b8244da7aff06bcb6bc52a545cd546b200d3cd0416c2e9399fc',
  'bf4a427fe306276b7650bfc8e11f3c2a0392b14a095ec733ccebedd2736142eb',
  '2b69be1656c50105852a96957a42aec2a7d886fe9d51be5160a7712f365688d5',
  '6acdac5faeca5b631c8c78ddf395ee228359875209f40bc0b5e77933f20bf485',
  'de94df1548e2f67c1467065d72efa0b46b8876eac54f6fe55858c6fea8919557',
  '9dbc4d13363b3ed8ac9dbda4060afb1e23795c59b8a444400318cdfb44748326',
  '3a592a976d08ec72b258aab4d2c49595cc59c7462a2a1532a0a8d6c71ebc06db',
  '22392fab03a1e622ed4b10d6cd6a373df49d721e440bbf35366e799259c35795',
  'be5072d0d7dd49f6bd9fd3122678c3a6cedcff7c7c8dd5f317f6050e5a5bca8d'
]
No. of normalContributions:  888
No. of multipleContributions:  164
No. of txs have been checked:  1078
```
