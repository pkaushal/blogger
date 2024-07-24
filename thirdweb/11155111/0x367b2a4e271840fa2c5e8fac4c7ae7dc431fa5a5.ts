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
 * Creates an event object for the BlogCreated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { blogCreatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  blogCreatedEvent()
 * ],
 * });
 * ```
 */ 
export function blogCreatedEvent() {
  return prepareEvent({
    signature: "event BlogCreated(uint256 id, address author, string content, uint256 timestamp)",
  });
};
  



/**
 * Creates an event object for the BlogLiked event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { blogLikedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  blogLikedEvent()
 * ],
 * });
 * ```
 */ 
export function blogLikedEvent() {
  return prepareEvent({
    signature: "event BlogLiked(address liker, address blogAuthor, uint256 blogId, uint256 newLikeCount)",
  });
};
  



/**
 * Creates an event object for the BlogReported event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { blogReportedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  blogReportedEvent()
 * ],
 * });
 * ```
 */ 
export function blogReportedEvent() {
  return prepareEvent({
    signature: "event BlogReported(address reporter, address blogAuthor, uint256 blogId, uint256 newReportCount)",
  });
};
  



/**
 * Creates an event object for the BlogUnliked event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { blogUnlikedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  blogUnlikedEvent()
 * ],
 * });
 * ```
 */ 
export function blogUnlikedEvent() {
  return prepareEvent({
    signature: "event BlogUnliked(address unliker, address blogAuthor, uint256 blogId, uint256 newLikeCount)",
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "MAX_BLOG_LENGTH" function on the contract.
 * @param options - The options for the MAX_BLOG_LENGTH function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { MAX_BLOG_LENGTH } from "TODO";
 * 
 * const result = await MAX_BLOG_LENGTH();
 * 
 * ```
 */
export async function MAX_BLOG_LENGTH(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x47100ca6",
  [],
  [
    {
      "internalType": "uint16",
      "name": "",
      "type": "uint16"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "MAX_REPORTS" function on the contract.
 * @param options - The options for the MAX_REPORTS function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { MAX_REPORTS } from "TODO";
 * 
 * const result = await MAX_REPORTS();
 * 
 * ```
 */
export async function MAX_REPORTS(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6ac1005c",
  [],
  [
    {
      "internalType": "uint16",
      "name": "",
      "type": "uint16"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "blogs" function.
 */
export type BlogsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "blogs" function on the contract.
 * @param options - The options for the blogs function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { blogs } from "TODO";
 * 
 * const result = await blogs({
 *  arg_0: ...,
 *  arg_1: ...,
 * });
 * 
 * ```
 */
export async function blogs(
  options: BaseTransactionOptions<BlogsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4cc3d3c0",
  [
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
  [
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
  ]
],
    params: [options.arg_0, options.arg_1]
  });
};


/**
 * Represents the parameters for the "getAllBlogs" function.
 */
export type GetAllBlogsParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"_owner","type":"address"}>
};

/**
 * Calls the "getAllBlogs" function on the contract.
 * @param options - The options for the getAllBlogs function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllBlogs } from "TODO";
 * 
 * const result = await getAllBlogs({
 *  owner: ...,
 * });
 * 
 * ```
 */
export async function getAllBlogs(
  options: BaseTransactionOptions<GetAllBlogsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x53f9b896",
  [
    {
      "internalType": "address",
      "name": "_owner",
      "type": "address"
    }
  ],
  [
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
  ]
],
    params: [options.owner]
  });
};


/**
 * Represents the parameters for the "getBlog" function.
 */
export type GetBlogParams = {
  i: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_i","type":"uint256"}>
};

/**
 * Calls the "getBlog" function on the contract.
 * @param options - The options for the getBlog function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getBlog } from "TODO";
 * 
 * const result = await getBlog({
 *  i: ...,
 * });
 * 
 * ```
 */
export async function getBlog(
  options: BaseTransactionOptions<GetBlogParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd4868baa",
  [
    {
      "internalType": "uint256",
      "name": "_i",
      "type": "uint256"
    }
  ],
  [
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
  ]
],
    params: [options.i]
  });
};




/**
 * Calls the "owner" function on the contract.
 * @param options - The options for the owner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { owner } from "TODO";
 * 
 * const result = await owner();
 * 
 * ```
 */
export async function owner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8da5cb5b",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
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
 * Represents the parameters for the "changeBlogLength" function.
 */
export type ChangeBlogLengthParams = {
  newBlogLength: AbiParameterToPrimitiveType<{"internalType":"uint16","name":"newBlogLength","type":"uint16"}>
};

/**
 * Calls the "changeBlogLength" function on the contract.
 * @param options - The options for the "changeBlogLength" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { changeBlogLength } from "TODO";
 * 
 * const transaction = changeBlogLength({
 *  newBlogLength: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function changeBlogLength(
  options: BaseTransactionOptions<ChangeBlogLengthParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x07b26113",
  [
    {
      "internalType": "uint16",
      "name": "newBlogLength",
      "type": "uint16"
    }
  ],
  []
],
    params: [options.newBlogLength]
  });
};


/**
 * Represents the parameters for the "changeReport" function.
 */
export type ChangeReportParams = {
  newReports: AbiParameterToPrimitiveType<{"internalType":"uint16","name":"newReports","type":"uint16"}>
};

/**
 * Calls the "changeReport" function on the contract.
 * @param options - The options for the "changeReport" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { changeReport } from "TODO";
 * 
 * const transaction = changeReport({
 *  newReports: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function changeReport(
  options: BaseTransactionOptions<ChangeReportParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x155c1061",
  [
    {
      "internalType": "uint16",
      "name": "newReports",
      "type": "uint16"
    }
  ],
  []
],
    params: [options.newReports]
  });
};


/**
 * Represents the parameters for the "createBlog" function.
 */
export type CreateBlogParams = {
  title: AbiParameterToPrimitiveType<{"internalType":"string","name":"_title","type":"string"}>
blog: AbiParameterToPrimitiveType<{"internalType":"string","name":"_blog","type":"string"}>
};

/**
 * Calls the "createBlog" function on the contract.
 * @param options - The options for the "createBlog" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { createBlog } from "TODO";
 * 
 * const transaction = createBlog({
 *  title: ...,
 *  blog: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function createBlog(
  options: BaseTransactionOptions<CreateBlogParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xc1e41586",
  [
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
  []
],
    params: [options.title, options.blog]
  });
};


/**
 * Represents the parameters for the "likeBLog" function.
 */
export type LikeBLogParams = {
  author: AbiParameterToPrimitiveType<{"internalType":"address","name":"author","type":"address"}>
id: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"id","type":"uint256"}>
};

/**
 * Calls the "likeBLog" function on the contract.
 * @param options - The options for the "likeBLog" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { likeBLog } from "TODO";
 * 
 * const transaction = likeBLog({
 *  author: ...,
 *  id: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function likeBLog(
  options: BaseTransactionOptions<LikeBLogParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x3dcee497",
  [
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
  []
],
    params: [options.author, options.id]
  });
};


/**
 * Represents the parameters for the "reportBlog" function.
 */
export type ReportBlogParams = {
  author: AbiParameterToPrimitiveType<{"internalType":"address","name":"author","type":"address"}>
id: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"id","type":"uint256"}>
};

/**
 * Calls the "reportBlog" function on the contract.
 * @param options - The options for the "reportBlog" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { reportBlog } from "TODO";
 * 
 * const transaction = reportBlog({
 *  author: ...,
 *  id: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function reportBlog(
  options: BaseTransactionOptions<ReportBlogParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xb6ecfcc8",
  [
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
  []
],
    params: [options.author, options.id]
  });
};


/**
 * Represents the parameters for the "unlikeBlog" function.
 */
export type UnlikeBlogParams = {
  author: AbiParameterToPrimitiveType<{"internalType":"address","name":"author","type":"address"}>
id: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"id","type":"uint256"}>
};

/**
 * Calls the "unlikeBlog" function on the contract.
 * @param options - The options for the "unlikeBlog" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { unlikeBlog } from "TODO";
 * 
 * const transaction = unlikeBlog({
 *  author: ...,
 *  id: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function unlikeBlog(
  options: BaseTransactionOptions<UnlikeBlogParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x004b4a0e",
  [
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
  []
],
    params: [options.author, options.id]
  });
};


