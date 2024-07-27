import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/

/**
 * Represents the filters for the "NewCoffee" event.
 */
export type NewCoffeeEventFilters = Partial<{
  sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
}>;

/**
 * Creates an event object for the NewCoffee event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { newCoffeeEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  newCoffeeEvent({
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function newCoffeeEvent(filters: NewCoffeeEventFilters = {}) {
  return prepareEvent({
    signature: "event NewCoffee(address indexed sender, uint256 timestamp, string message)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "getTotalCoffee" function on the contract.
 * @param options - The options for the getTotalCoffee function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getTotalCoffee } from "TODO";
 * 
 * const result = await getTotalCoffee();
 * 
 * ```
 */
export async function getTotalCoffee(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4839ee3f",
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
 * Represents the parameters for the "buyMeACoffee" function.
 */
export type BuyMeACoffeeParams = {
  message: AbiParameterToPrimitiveType<{"internalType":"string","name":"_message","type":"string"}>
};

/**
 * Calls the "buyMeACoffee" function on the contract.
 * @param options - The options for the "buyMeACoffee" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { buyMeACoffee } from "TODO";
 * 
 * const transaction = buyMeACoffee({
 *  message: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function buyMeACoffee(
  options: BaseTransactionOptions<BuyMeACoffeeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x83583854",
  [
    {
      "internalType": "string",
      "name": "_message",
      "type": "string"
    }
  ],
  []
],
    params: [options.message]
  });
};


