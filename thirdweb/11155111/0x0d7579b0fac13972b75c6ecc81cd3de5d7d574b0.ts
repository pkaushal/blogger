import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract read functions
*/



/**
 * Calls the "getBalance" function on the contract.
 * @param options - The options for the getBalance function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getBalance } from "TODO";
 * 
 * const result = await getBalance();
 * 
 * ```
 */
export async function getBalance(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x12065fe0",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/



/**
 * Calls the "deposit" function on the contract.
 * @param options - The options for the "deposit" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { deposit } from "TODO";
 * 
 * const transaction = deposit();
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function deposit(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd0e30db0",
  [],
  []
],
    params: []
  });
};


/**
 * Represents the parameters for the "transferFunds" function.
 */
export type TransferFundsParams = {
  recipient: AbiParameterToPrimitiveType<{"internalType":"address payable","name":"recipient","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "transferFunds" function on the contract.
 * @param options - The options for the "transferFunds" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferFunds } from "TODO";
 * 
 * const transaction = transferFunds({
 *  recipient: ...,
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function transferFunds(
  options: BaseTransactionOptions<TransferFundsParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x990dc9db",
  [
    {
      "internalType": "address payable",
      "name": "recipient",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.recipient, options.amount]
  });
};


