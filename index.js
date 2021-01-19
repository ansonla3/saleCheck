const axios = require('axios');
const saleTxs = require('./dot_sale_tx.json');
const { encodeAddress } = require('@polkadot/util-crypto');


// TODO. Write to csv file
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: 'file.csv',
//     header: [
//         {id: 'name', title: 'NAME'},
//         {id: 'lang', title: 'LANGUAGE'},
//         {id: 'age', title: 'AGE'}

//     ]
// });

// const records = [
//   {name: 'Bob',  lang: 'French, English', age: 'Anson'},
//   {name: 'Mary', lang: 'English', age: 'Peter'}
// ];

// csvWriter.writeRecords(records)       // returns a promise
//   .then(() => {
//       console.log('...Done');
//   });


(async () => {
  try {
    let counter = 0;              // Count the no. of txs sussessfully contribution through the sale website
    let notInSaleSiteCounter = 0; // Count the no. of txs that is not through the sale website
    const txHash = [];

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
          counter += 1;
        }
      })

      if (txOutList.length === outCounter) {
        notInSaleSiteCounter += 1;
        txHash.push(tx.hash);
      }
    });

    console.log("notInSaleSiteCounter: ", notInSaleSiteCounter);
    console.log("Those notInSaleSite Hashes: ", txHash);
    console.log("Counter: ", counter);

  } catch (error) {
    console.log(error.response.body);
  }
})();