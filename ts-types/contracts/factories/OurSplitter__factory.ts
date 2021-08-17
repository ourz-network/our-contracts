/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OurSplitter } from "../OurSplitter";

export class OurSplitter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OurSplitter> {
    return super.deploy(overrides || {}) as Promise<OurSplitter>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OurSplitter {
    return super.attach(address) as OurSplitter;
  }
  connect(signer: Signer): OurSplitter__factory {
    return super.connect(signer) as OurSplitter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OurSplitter {
    return new Contract(address, _abi, signerOrProvider) as OurSplitter;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "TransferETH",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentWindow",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundsAvailable",
        type: "uint256",
      },
    ],
    name: "WindowIncremented",
    type: "event",
  },
  {
    inputs: [],
    name: "PERCENTAGE_SCALE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "balanceForWindow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "scaledPercentageAllocation",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "percentageAllocation",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claimForAllWindows",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentWindow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incrementWindow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scaledPercent",
        type: "uint256",
      },
    ],
    name: "scaleAmountByPercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "scaledAmount",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "wethAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bde806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80634f0e0ef3116100765780638ffb5c971161005b5780638ffb5c971461016c578063ba0bafb41461017f578063d2ef07951461018857600080fd5b80634f0e0ef31461011957806381e580d31461015957600080fd5b80632eb4a7ab116100a75780632eb4a7ab146100eb578063338b1d31146101075780633f26479e1461010f57600080fd5b80631e7df9d3146100c35780632e7ba6ef146100d8575b600080fd5b6100d66100d13660046109de565b6101ab565b005b6100d66100e6366004610a99565b6102d1565b6100f460005481565b6040519081526020015b60405180910390f35b6100d6610465565b6100f4620f424081565b61013473c778417e063141139fce010982780140aa0cd5ab81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b6100f4610167366004610a56565b61055c565b6100f461017a366004610aff565b61057d565b6100f460015481565b61019b610196366004610a6e565b6105a8565b60405190151581526020016100fe565b6101f382828080602002602001604051908101604052809392919081815260200183836020028082843760009201829052505492506101ee9150889050876105d3565b61061b565b6102445760405162461bcd60e51b815260206004820152600d60248201527f496e76616c69642070726f6f660000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000805b6001548110156102be5761025c81876105a8565b6102ac5761026a81876106d8565b61029f6004828154811061028e57634e487b7160e01b600052603260045260246000fd5b90600052602060002001548661057d565b6102a99083610b20565b91505b806102b681610b77565b915050610248565b506102c98582610729565b505050505050565b84600154116103225760405162461bcd60e51b815260206004820181905260248201527f63616e6e6f7420636c61696d20666f722061206675747572652077696e646f77604482015260640161023b565b61032c85856105a8565b1561039f5760405162461bcd60e51b815260206004820152602860248201527f4163636f756e7420616c726561647920636c61696d656420746865206769766560448201527f6e2077696e646f77000000000000000000000000000000000000000000000000606482015260840161023b565b6103a985856106d8565b6103ec82828080602002602001604051908101604052809392919081815260200183836020028082843760009201829052505492506101ee9150889050876105d3565b6104385760405162461bcd60e51b815260206004820152600d60248201527f496e76616c69642070726f6f6600000000000000000000000000000000000000604482015260640161023b565b6102c9846104606004888154811061028e57634e487b7160e01b600052603260045260246000fd5b610729565b60006001546000141561047957504761047e565b506006545b6000600655806104d05760405162461bcd60e51b815260206004820152601e60248201527f4e6f206164646974696f6e616c2066756e647320666f722077696e646f770000604482015260640161023b565b600480546001818101835560009283527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b909101839055805490918291610518908390610b20565b909155505060015460408051918252602082018390527ff0840b82b46c1dc7df62cae652baa1b5588ce37b6a1236ed1dcf4caf34d738ac910160405180910390a150565b6004818154811061056c57600080fd5b600091825260209091200154905081565b600061058d620f42406064610b58565b6105978385610b58565b6105a19190610b38565b9392505050565b6000600560006105b885856108cb565b815260208101919091526040016000205460ff169392505050565b6040516bffffffffffffffffffffffff19606084901b166020820152603481018290526000906054015b60405160208183030381529060405280519060200120905092915050565b600081815b85518110156106cd57600086828151811061064b57634e487b7160e01b600052603260045260246000fd5b6020026020010151905080831161068d5760408051602081018590529081018290526060016040516020818303038152906040528051906020012092506106ba565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b50806106c581610b77565b915050610620565b509092149392505050565b6001600560006106e885856108cb565b8152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790555050565b600061073583836108fb565b90508061086e5773c778417e063141139fce010982780140aa0cd5ab73ffffffffffffffffffffffffffffffffffffffff1663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b15801561079857600080fd5b505af11580156107ac573d6000803e3d6000fd5b50506040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff871660048201526024810186905273c778417e063141139fce010982780140aa0cd5ab935063a9059cbb92506044019050602060405180830381600087803b15801561083457600080fd5b505af1158015610848573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086c9190610a36565b505b6040805173ffffffffffffffffffffffffffffffffffffffff85168152602081018490528215158183015290517fdbd5389f52533f4cbd998e752125a5a4eaa0b813b399ad15f775ec0e8438620d9181900360600190a192915050565b600082826040516020016105fd92919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b6000808373ffffffffffffffffffffffffffffffffffffffff168361753090604051600060405180830381858888f193505050503d806000811461095b576040519150601f19603f3d011682016040523d82523d6000602084013e610960565b606091505b509095945050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461098f57600080fd5b919050565b60008083601f8401126109a5578182fd5b50813567ffffffffffffffff8111156109bc578182fd5b6020830191508360208260051b85010111156109d757600080fd5b9250929050565b600080600080606085870312156109f3578384fd5b6109fc8561096b565b935060208501359250604085013567ffffffffffffffff811115610a1e578283fd5b610a2a87828801610994565b95989497509550505050565b600060208284031215610a47578081fd5b815180151581146105a1578182fd5b600060208284031215610a67578081fd5b5035919050565b60008060408385031215610a80578182fd5b82359150610a906020840161096b565b90509250929050565b600080600080600060808688031215610ab0578081fd5b85359450610ac06020870161096b565b935060408601359250606086013567ffffffffffffffff811115610ae2578182fd5b610aee88828901610994565b969995985093965092949392505050565b60008060408385031215610b11578182fd5b50508035926020909101359150565b60008219821115610b3357610b33610b92565b500190565b600082610b5357634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610b7257610b72610b92565b500290565b6000600019821415610b8b57610b8b610b92565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212208ede1f98c5c8cdbf9c356b04b7e6d985728935d36b269ed6c557b16a41c248a664736f6c63430008040033";