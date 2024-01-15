import {ethers} from "ethers";

const generateKeys =(seedPhrase?: string) => {
    let wallet = ethers.Wallet;
    if(seedPhrase){
        wallet = ethers.Wallet.fromMnemonic(seedPhrase);
    }else{
        wallet=ethers.Wallet.createRandom();
        seedPhrase=wallet.mnemonic;
    }

    const privateKey = wallet.privateKey;
    const address = wallet.address;

    return {seedPhrase, address, privateKey}
}

