<template>
    Blogs...
    {{ blogs }}
</template>

<script setup lang="ts">
import { createThirdwebClient,getContract,readContract,sendTransaction,resolveMethod,prepareContractCall, toWei } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { createWallet,injectedProvider } from "thirdweb/wallets";
// import { getAllBlogs } from "~/thirdweb/11155111/0x367b2A4e271840FA2C5E8fac4C7ae7dC431Fa5a5";
import { getAllBlogs } from "thirdweb/11155111/0x367b2A4e271840FA2C5E8fac4C7ae7dC431Fa5a5";

const runtimeConfig = useRuntimeConfig()

const blogs = ref([]);

const client = createThirdwebClient({
  clientId: runtimeConfig.public.thirdwebClientId,
});
console.log(client);

const contract = getContract({
	client,
	chain: sepolia,
	address: runtimeConfig.public.contractAddress,
});

const result = getAllBlogs('0x682579C5C7001328f973980683159872573f0BeA')
console.log(result) 



</script>