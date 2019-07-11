'use strict';
let clientClon={};
let clientCloneAssign = {};

let client = {
  name: 'Misha',
  testNull: null,
  testUndefined: undefined,
  order: {
    price: 20,
    count: 15,
    tovar: 'Tovar - 1'
  },
  orderArray: [20,15,'testIndex'],
  client_id: 150051,
  email: 'tester@js.com'
};

console.log(client);
for (let keyClon in client){
    let tr = typeof(client[keyClon])
    console.log(`${keyClon} - ${tr}`);
    clientClon[keyClon]=client[keyClon];
}

client.order.count = 333;
client.orderArray['2'] = 555;
client.orderArray['234'] = 123;


console.log(clientClon);