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
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ETHReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
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
    name: "MassTransferERC20",
    type: "event",
  },
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
    name: "claimETH",
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
    name: "claimETHForAllWindows",
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
    name: "weth",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bd0806100206000396000f3fe6080604052600436106100955760003560e01c80638ffb5c97116100595780638ffb5c97146101a4578063a303c8a1146101c4578063ba0bafb4146101e4578063d2ef0795146101fa578063debb73fe1461022a57600080fd5b80632eb4a7ab146100ed578063338b1d31146101165780633f26479e1461012d5780633fc8cef31461014457806381e580d31461018457600080fd5b366100e85760405134815233907fbfe611b001dfcd411432f7bf0d79b82b4b2ee81511edac123a3403c357fb972a9060200160405180910390a234600560008282546100e19190610b12565b9091555050005b600080fd5b3480156100f957600080fd5b5061010360005481565b6040519081526020015b60405180910390f35b34801561012257600080fd5b5061012b61024a565b005b34801561013957600080fd5b50610103620f424081565b34801561015057600080fd5b5061016c73c778417e063141139fce010982780140aa0cd5ab81565b6040516001600160a01b03909116815260200161010d565b34801561019057600080fd5b5061010361019f366004610a48565b610346565b3480156101b057600080fd5b506101036101bf366004610af1565b610367565b3480156101d057600080fd5b5061012b6101df3660046109d0565b610392565b3480156101f057600080fd5b5061010360015481565b34801561020657600080fd5b5061021a610215366004610a60565b6104a3565b604051901515815260200161010d565b34801561023657600080fd5b5061012b610245366004610a8b565b6104ce565b60006001546000141561025e575047610263565b506005545b6000600555806102ba5760405162461bcd60e51b815260206004820152601e60248201527f4e6f206164646974696f6e616c2066756e647320666f722077696e646f77000060448201526064015b60405180910390fd5b600380546001818101835560009283527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b909101839055805490918291610302908390610b12565b909155505060015460408051918252602082018390527ff0840b82b46c1dc7df62cae652baa1b5588ce37b6a1236ed1dcf4caf34d738ac910160405180910390a150565b6003818154811061035657600080fd5b600091825260209091200154905081565b6000610377620f42406064610b4a565b6103818385610b4a565b61038b9190610b2a565b9392505050565b6103da82828080602002602001604051908101604052809392919081815260200183836020028082843760009201829052505492506103d591508890508761063d565b610685565b6104165760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b210383937b7b360991b60448201526064016102b1565b6000805b6001548110156104905761042e81876104a3565b61047e5761043c8187610742565b6104716003828154811061046057634e487b7160e01b600052603260045260246000fd5b906000526020600020015486610367565b61047b9083610b12565b91505b8061048881610b69565b91505061041a565b5061049b8582610775565b505050505050565b6000600460006104b385856108d7565b815260208101919091526040016000205460ff169392505050565b846001541161051f5760405162461bcd60e51b815260206004820181905260248201527f63616e6e6f7420636c61696d20666f722061206675747572652077696e646f7760448201526064016102b1565b61052985856104a3565b156105875760405162461bcd60e51b815260206004820152602860248201527f4163636f756e7420616c726561647920636c61696d65642074686520676976656044820152676e2077696e646f7760c01b60648201526084016102b1565b6105918585610742565b6105d482828080602002602001604051908101604052809392919081815260200183836020028082843760009201829052505492506103d591508890508761063d565b6106105760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b210383937b7b360991b60448201526064016102b1565b61049b846106386003888154811061046057634e487b7160e01b600052603260045260246000fd5b610775565b6040516bffffffffffffffffffffffff19606084901b166020820152603481018290526000906054015b60405160208183030381529060405280519060200120905092915050565b600081815b85518110156107375760008682815181106106b557634e487b7160e01b600052603260045260246000fd5b602002602001015190508083116106f7576040805160208101859052908101829052606001604051602081830303815290604052805190602001209250610724565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b508061072f81610b69565b91505061068a565b509092149392505050565b60016004600061075285856108d7565b81526020810191909152604001600020805460ff19169115159190911790555050565b60006107818383610907565b9050806108875773c778417e063141139fce010982780140aa0cd5ab6001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107d757600080fd5b505af11580156107eb573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b03871660048201526024810186905273c778417e063141139fce010982780140aa0cd5ab935063a9059cbb92506044019050602060405180830381600087803b15801561084d57600080fd5b505af1158015610861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108859190610a28565b505b604080516001600160a01b0385168152602081018490528215158183015290517fdbd5389f52533f4cbd998e752125a5a4eaa0b813b399ad15f775ec0e8438620d9181900360600190a192915050565b6000828260405160200161066792919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b600080836001600160a01b03168361753090604051600060405180830381858888f193505050503d806000811461095a576040519150601f19603f3d011682016040523d82523d6000602084013e61095f565b606091505b509095945050505050565b80356001600160a01b038116811461098157600080fd5b919050565b60008083601f840112610997578182fd5b50813567ffffffffffffffff8111156109ae578182fd5b6020830191508360208260051b85010111156109c957600080fd5b9250929050565b600080600080606085870312156109e5578384fd5b6109ee8561096a565b935060208501359250604085013567ffffffffffffffff811115610a10578283fd5b610a1c87828801610986565b95989497509550505050565b600060208284031215610a39578081fd5b8151801515811461038b578182fd5b600060208284031215610a59578081fd5b5035919050565b60008060408385031215610a72578182fd5b82359150610a826020840161096a565b90509250929050565b600080600080600060808688031215610aa2578081fd5b85359450610ab26020870161096a565b935060408601359250606086013567ffffffffffffffff811115610ad4578182fd5b610ae088828901610986565b969995985093965092949392505050565b60008060408385031215610b03578182fd5b50508035926020909101359150565b60008219821115610b2557610b25610b84565b500190565b600082610b4557634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610b6457610b64610b84565b500290565b6000600019821415610b7d57610b7d610b84565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212209b4a68dc1f920f143af1800a7006bfd5b959afb7ca20d76bcc9065f970517a3064736f6c63430008040033";
