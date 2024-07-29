<template>
    Blogs...
    <div v-for="blog in blogs" :key="blog.id">
      {{ blog.title }}
      {{ blog.content }}
    </div>
</template>

<script setup lang="ts">
import { createThirdwebClient,getContract,readContract,sendTransaction,resolveMethod,prepareContractCall, toWei } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { createWallet,injectedProvider } from "thirdweb/wallets";
import { getAllBlogs } from "@/thirdweb/11155111/0x367b2a4e271840fa2c5e8fac4c7ae7dc431fa5a5";

const runtimeConfig = useRuntimeConfig()

const blogs = ref([]);

const client = createThirdwebClient({
  clientId: runtimeConfig.public.thirdwebClientId,
});

const contract = await getContract({
	client,
	chain: sepolia,
	address: runtimeConfig.public.contractAddress,
});

// console.log(contract);

const result = await getAllBlogs(
  {
    owner: '0xeb9638f0d016C97dE5F61EBDb13Ad3b99d52b643',
    contract: contract,
  }
)
console.log(result) 
blogs.value = result;



</script>