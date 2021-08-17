/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OurStorage } from "../OurStorage";

export class OurStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OurStorage> {
    return super.deploy(overrides || {}) as Promise<OurStorage>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OurStorage {
    return super.attach(address) as OurStorage;
  }
  connect(signer: Signer): OurStorage__factory {
    return super.connect(signer) as OurStorage__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OurStorage {
    return new Contract(address, _abi, signerOrProvider) as OurStorage;
  }
}

const _abi = [
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
  "0x608060405234801561001057600080fd5b50610128806100206000396000f3fe6080604052348015600f57600080fd5b506004361060465760003560e01c80632eb4a7ab14604b5780634f0e0ef314606657806381e580d31460a4578063ba0bafb41460b3575b600080fd5b605360005481565b6040519081526020015b60405180910390f35b608073c778417e063141139fce010982780140aa0cd5ab81565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001605d565b605360af36600460db565b60bb565b605360015481565b6004818154811060ca57600080fd5b600091825260209091200154905081565b60006020828403121560eb578081fd5b503591905056fea2646970667358221220a312ff2ce0e09329be573a67c80239f21c59ac5508ffa32d4d93c6ed5c7a1aad64736f6c63430008040033";