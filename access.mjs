import algosdk from 'algosdk'

export const getIndexer = (net) => {
  if (net == 'MAINNET') {
    const baseServer = "https://mainnet-algorand.api.purestake.io/idx2"
    const port = ''
    const token = {'X-API-key' : 'VGgpKbdrVC3PQz4vCHMIS9UvoPHkLZJI16RWSOi9'}
    return new algosdk.Indexer(token, baseServer, port)
  } else {
    let net = 'https://algoindexer.testnet.algoexplorerapi.io'
    return new algosdk.Indexer('', net,'')
    return indexer
  }
}

export function getAlgod(which) {
  let net = 'https://node.algonfts.art'
  let token = '8854a3be0df4c5495a9e8f62ff7b0b74dc3fe197351bff3d66c4996201a912d0'
  if (which == 'TESTNET') {
    net = 'https://node.testnet.algoexplorerapi.io'
    token = ''
  }
  let algod = new algosdk.Algodv2(token, net,'')
  return algod
}
