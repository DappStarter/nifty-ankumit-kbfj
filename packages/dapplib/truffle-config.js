require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stock rescue punch pumpkin harvest pave army gaze'; 
let testAccounts = [
"0x71b6f96c936380cfde6271ec8cfef1843bb80bd7b9ac49e77077a768faa01882",
"0x534e98e99440d5cd1d08c8b65996b71422cc275e485af7bedbbef0e1da50d88d",
"0x05566fc7d6c39c72b7b38e410c6a3b2dec410d44bf76826c4c0ffec77e0d1f64",
"0x4d24a68d22001fd4ec0938183da5b1d4224f6c3bd93e1e8d442c81da8ed05bdf",
"0xf5cbceb2e594f0b5e3b119b1a3a8f4b44505745337df9765f30d242d9767bddd",
"0x96e2fba7154661e414156f3a5f0a01efcbb121716d86e15f28b707168531e07a",
"0xad013688d00d59d35ba78e43e678a2cf3602359e569f144347e3f137de887b19",
"0xd44d5923a5800822678cccef913e8e4bed47c834e16860a312e160128418ecf6",
"0xdcc99fd5a53365d620500a0be691459bf4753151462397c891e69894b3693a62",
"0xf15dc02e5e46ad7f8773c1198810a9d81ef63b029063b17df4f41f9f9f316514"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

