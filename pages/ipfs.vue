<template>

    <button @click="uploadFile">Upload</button>
    <button @click="downloadFile">Download</button>

</template>

<script setup lang="ts">
import { createThirdwebClient } from "thirdweb";
import { upload , download } from "thirdweb/storage";

const runtimeConfig = useRuntimeConfig()

const client = createThirdwebClient({
  clientId: runtimeConfig.public.thirdwebClientId,
});

async function downloadFile() {
  const file = await download({
    client,
    uri: "ipfs://QmNxvA5bwvPGgMXbmtyhxA1cKFdvQXnsGnZLCGor3AzYxJ/hello.txt",
  });
  console.log(file);
}

async function uploadFile() {
  const file = await upload({
    client,
    files: [new File(["hello world"], "hello.txt")],
  });
  console.log(file);
}

</script>