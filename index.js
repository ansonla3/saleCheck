const saleTxs = require('./dot_sale_tx.json');
const { encodeAddress } = require('@polkadot/util-crypto');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const header = [
  {id: 'address', title: 'ADDRESS'},
  {id: 'amount', title: 'AMOUNT'},
  {id: 'hash', title: 'HASH'}
];

const csvWriterNotInSale = createCsvWriter({
    path: 'notInSaleSite.csv',
    header: header
});

const csvWriteMultipleContribution = createCsvWriter({
  path: 'multipleContribution.csv',
  header: header
});

const csvWriterNormalContribution = createCsvWriter({
  path: 'normalContribution.csv',
  header: header
});

(async () => {
  try {
    let notInSaleSiteCounter = 0; // Count the no. of txs that is not through the sale website
    const txHash = [];
    const contributorAddrs = [];
    const notInSaleContributions = [];
    const multipleContributions = [];
    const normalContributions = [];
    let checkCounter = 0;

    const txs = saleTxs.txs;
    txs.forEach( tx => {

      const txOutList = tx.out;
      let outCounter = 0;
      txOutList.forEach(out => {
        if (!out.script.startsWith("6a20")) {
          outCounter += 1;
        } else {
          console.log("Contribution BTC Address:", tx.inputs[0].prev_out.addr);
          console.log("Contribution Amount:", tx.inputs[0].prev_out.value);
          console.log(`Polkadot Address: ${encodeAddress(`0x${out.script.substring(4)}`,0)}`);

          if (!contributorAddrs.includes(tx.inputs[0].prev_out.addr)) {
            contributorAddrs.push(tx.inputs[0].prev_out.addr);
            normalContributions.push({address: tx.inputs[0].prev_out.addr, amount: tx.inputs[0].prev_out.value, hash: tx.hash});
          } else {
            console.log("Multiple contribution detected address :", tx.inputs[0].prev_out.addr, tx.hash);
            multipleContributions.push({address: tx.inputs[0].prev_out.addr, amount: tx.inputs[0].prev_out.value, hash: tx.hash});
          }
        }
      })

      if (txOutList.length === outCounter) {
        notInSaleSiteCounter += 1;
        txHash.push(tx.hash);
        notInSaleContributions.push({address: tx.inputs[0].prev_out.addr, amount: tx.inputs[0].prev_out.value, hash: tx.hash});

      }

      checkCounter += 1;
    });

    csvWriterNotInSale.writeRecords(notInSaleContributions)
    .then(() => {
        console.log('NotInSale.csv ...Done');
    });

    csvWriteMultipleContribution.writeRecords(multipleContributions)
    .then(() => {
      console.log('multipleContribution.csv ...Done');
    });

    csvWriterNormalContribution.writeRecords(normalContributions)
    .then(() => {
      console.log('normalContribution.csv ...Done');
    });


    console.log("No. of notInSaleSiteCounter: ", notInSaleSiteCounter);
    console.log("Those notInSaleSite Hashes: ", txHash);

    console.log("No. of normalContributions: ", normalContributions.length);
    console.log("No. of multipleContributions: ", multipleContributions.length);

    console.log("No. of txs have been checked: ", checkCounter);

  } catch (error) {
    console.log(error.response.body);
  }
})();