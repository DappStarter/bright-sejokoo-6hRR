require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rifle noble evil hidden kiwi slot gaze'; 
let testAccounts = [
"0x6c6db4fdfe9780709fef8980f8f4dd3cede519d2869b475b6c3bc8dd439f1cb5",
"0xe5cc53b9a71a8d29555350cc3c09d14e66cddb81263cfdca88c9e8a288457bbb",
"0x2bf8319df3facd80ca5ee8a52af85eaad40566c7c3109a3a8e14f0e4b06a2962",
"0x0df5ad5572302fc39595724a855328c5ba007991ccca836029a0e740167521fe",
"0x426abad182b1fc007096786a5cc8019eea16746f88368c7625d583fc5feb351e",
"0x3ec76090ec38f7958f4fd35cb0d2ed2f25ae164a673e0ed60cc7daa768020a55",
"0xb51f9e0d88ce7f04b6a1c223cf2a13815432dd79dd7af03174fafdf9c26b0095",
"0x245343e1e34732945655e97eba334b059d631e2840276c9aabe49fcb841a9a9f",
"0xbdcbf27baae0a2a88013567d89df6505d62667b114f8d6e680cc5419ee8b19d8",
"0x83e3fe4e3d9ca4f67285f3c9b76d86544639edf365ed4c20f576b3e4ee7ced49"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

