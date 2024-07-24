<template>
	Hare Krishna
</template>

<script setup lang="ts">
import { createThirdwebClient, getContract, readContract, sendTransaction, prepareContractCall, toWei } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { createWallet, injectedProvider } from "thirdweb/wallets";

const runtimeConfig = useRuntimeConfig()

const client = createThirdwebClient({
	clientId: runtimeConfig.public.thirdwebClientId,
});
console.log(client);

// get a contract
const contract = getContract({
	// the client you have created via `createThirdwebClient()`
	client,
	// the chain the contract is deployed on
	chain: sepolia,
	// the contract's address
	address: runtimeConfig.public.contractAddress,
	// OPTIONAL: the contract's abi
	abi: [
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "author",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "content",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "timestamp",
					"type": "uint256"
				}
			],
			"name": "BlogCreated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "liker",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "blogAuthor",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "blogId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "newLikeCount",
					"type": "uint256"
				}
			],
			"name": "BlogLiked",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "reporter",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "blogAuthor",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "blogId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "newReportCount",
					"type": "uint256"
				}
			],
			"name": "BlogReported",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "unliker",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "blogAuthor",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "blogId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "newLikeCount",
					"type": "uint256"
				}
			],
			"name": "BlogUnliked",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint16",
					"name": "newBlogLength",
					"type": "uint16"
				}
			],
			"name": "changeBlogLength",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint16",
					"name": "newReports",
					"type": "uint16"
				}
			],
			"name": "changeReport",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_title",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_blog",
					"type": "string"
				}
			],
			"name": "createBlog",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "author",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "likeBLog",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "author",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "reportBlog",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "author",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "unlikeBlog",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "blogs",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "author",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "title",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "content",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "timestamp",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "likes",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "report",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_owner",
					"type": "address"
				}
			],
			"name": "getAllBlogs",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "author",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "title",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "content",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "timestamp",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "likes",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "report",
							"type": "uint256"
						}
					],
					"internalType": "struct BlogApp.Blog[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_i",
					"type": "uint256"
				}
			],
			"name": "getBlog",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "author",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "title",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "content",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "timestamp",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "likes",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "report",
							"type": "uint256"
						}
					],
					"internalType": "struct BlogApp.Blog",
					"name": "",
					"type": "tuple"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "MAX_BLOG_LENGTH",
			"outputs": [
				{
					"internalType": "uint16",
					"name": "",
					"type": "uint16"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "MAX_REPORTS",
			"outputs": [
				{
					"internalType": "uint16",
					"name": "",
					"type": "uint16"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	],


});
console.log(contract);

const allBlogs = await readContract({
	contract: contract,
	method: "function getAllBlogs(address) view returns ()",
	params: ["0x6aD783D62e4492851B4CD13F255A402CfcF462E6"],
});

console.log(allBlogs);

// initialize the wallet, you can pick any of the 300+ wallet connectors supported
// wallet ids are typed, let your TS editor autocomplete them for you
// ex: "io.metamask", "com.coinbase.wallet", "me.rainbow", etc...
const metamask = createWallet("io.metamask");

// connect the wallet, this returns a promise that resolves to the connected account
// const account = await wallet.connect({
//   // pass the client you created with `createThirdwebClient()`
//   client,
// });

// if user has metamask installed, connect to it
if (injectedProvider("io.metamask")) {
	const account = await metamask.connect({ client });
	const transaction = prepareContractCall({
		contract,
		// Pass the method signature that you want to call
		method: "function createBlog(string title, string content) public",
		// and the params for that method
		// Their types are automatically inferred based on the method signature
		params: ["tw_t_" + new Date().getMilliseconds(), "tw_blo_" + new Date().getMilliseconds()],
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
	console.log("Metamask not installed");
}




</script>