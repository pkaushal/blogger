<template>
    Buy
    <button @click="disconnect">Disconnect</button>
    <button @click="buy">Buy</button>
    <button @click="getTotal">Get Total</button>
    {{ total }}
</template>

<script setup lang="ts">
import { createThirdwebClient, getContract, prepareContractCall, sendTransaction, toWei } from "thirdweb";
import { sepolia } from "thirdweb/chains";
// We use MetaMask wallet as an example, the pattern is the same for all wallets
import { createWallet, injectedProvider } from "thirdweb/wallets";
import { getTotalCoffee } from "/thirdweb/11155111/0x89d6eAde5F5a9ECd9cfcc9B0e61e6F70B9A7E065";

const total = ref(0);

const runtimeConfig = useRuntimeConfig()

const client = createThirdwebClient({
    clientId: runtimeConfig.public.thirdwebClientId,
});

const contract = getContract({
    client,
    chain: sepolia,
    address: runtimeConfig.public.buyContractAddress,
});

// initialize the wallet, you can pick any of the 300+ wallet connectors supported
// wallet ids are typed, let your TS editor autocomplete them for you
// ex: "io.metamask", "com.coinbase.wallet", "me.rainbow", etc...
const wallet = createWallet("io.metamask");






async function buy() {
    if (injectedProvider("io.metamask")) {
        // connect the wallet, this returns a promise that resolves to the connected account
        const account = await wallet.connect({
            // pass the client you created with `createThirdwebClient()`
            client,
        });
        console.log(account);
        const transaction = prepareContractCall({
            contract,
            // Pass the method signature that you want to call
            method: "function buyMeACoffee(string _msg)",
            // and the params for that method
            // Their types are automatically inferred based on the method signature
            params: ['Hare Krishna'],
            value: toWei('0.000000000000000001')
        });
        console.log(transaction);
        // sign & send a transaction with the account -> returns the transaction hash
        const { transactionHash } = await sendTransaction({
            // assuming you have called `prepareTransaction()` or `prepareContractCall()` before which returns the prepared transaction to send
            transaction,
            // Pass the account to sign the transaction with
            account,
        });
        console.log(transactionHash);
    }
    else {
        console.log('Please install MetaMask');
    }
}

async function getTotal() {
    const result = await getTotalCoffee(
        {
            contract: contract,
        }
    )
    console.log(result)
    total.value = result;
}

function disconnect() {
    wallet.disconnect();
}

</script>