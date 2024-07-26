<template>
    Funds...{{ balance }}
  <button @click="pay">Pay</button>
</template>

<script setup lang="ts">
import { createThirdwebClient,getContract,readContract,sendTransaction,resolveMethod,prepareContractCall, toWei } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { createWallet,injectedProvider } from "thirdweb/wallets";
import { getBalance } from "/thirdweb/11155111/0x0d7579b0FAC13972b75C6eCc81cD3DE5D7d574b0";

const runtimeConfig = useRuntimeConfig()

const balance = ref(0);

const metamask = createWallet("io.metamask");

const client = createThirdwebClient({
  clientId: runtimeConfig.public.thirdwebClientId,
});

const contract = await getContract({
	client,
	chain: sepolia,
	address: runtimeConfig.public.paymentContractAddress,
});

// console.log(contract);

const result = await getBalance(
  {
    owner: '0x0d7579b0FAC13972b75C6eCc81cD3DE5D7d574b0',
    contract: contract,
  }
)
console.log(result) 
balance.value = result;

async function pay() {
// if user has metamask installed, connect to it
if (injectedProvider("io.metamask")) {
	const account = await metamask.connect({ client });
  console.log(account);
  const transaction = prepareContractCall({
  contract,
  // Pass the method signature that you want to call
  method: "function deposit(uint256 amount)",
  // and the params for that method
  // Their types are automatically inferred based on the method signature
  params: [toWei('500000')],
});
console.log(transaction);  
// const transactionResult = await sendTransaction({
//   transaction,
//   account,
// });
// console.log(transactionResult);
	
}
else {
	console.log("Metamask not installed");
}  

}


</script>