const { NodeProvider } = require( '@alephium/web3')


async function getBalance(receiver) {
const nodeUrl = 'https://node.testnet.alephium.org'
const nodeProvider = new NodeProvider(nodeUrl)
const balance = await nodeProvider.addresses.getAddressesAddressBalance(receiver)
console.log(`Balance of ${receiver} is:  `,balance)
}

getBalance('1fLXNEGmb6HbUjxJ5TNQuFy1WahTM3LEBFcB1LA5u9Re'