/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OurManagement } from "../OurManagement";

export class OurManagement__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OurManagement> {
    return super.deploy(overrides || {}) as Promise<OurManagement>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OurManagement {
    return super.attach(address) as OurManagement;
  }
  connect(signer: Signer): OurManagement__factory {
    return super.connect(signer) as OurManagement__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OurManagement {
    return new Contract(address, _abi, signerOrProvider) as OurManagement;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AddedOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "newNickname",
        type: "string",
      },
    ],
    name: "ChangeNickname",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
    ],
    name: "ProxySetup",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "RemovedOwner",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "addOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newNickname_",
        type: "string",
      },
    ],
    name: "editNickname",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "isOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "removeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "swapOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a13806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063b1bc078111610050578063b1bc0781146100c9578063e318b52b146100dc578063fbe5ce0a146100ef57600080fd5b80632f54bf6e146100775780637065cb481461009f578063a0e67e2b146100b4575b600080fd5b61008a6100853660046107f9565b610102565b60405190151581526020015b60405180910390f35b6100b26100ad3660046107f9565b61013d565b005b6100bc61026a565b60405161009691906108fb565b6100b26100d736600461088e565b610376565b6100b26100ea36600461084c565b6103bc565b6100b26100fd36600461081a565b610664565b60006001600160a01b03821660011480159061013757506001600160a01b038281166000908152602081905260409020541615155b92915050565b6101463361075f565b6001600160a01b0381161580159061016857506001600160a01b038116600114155b801561017d57506001600160a01b0381163014155b61018657600080fd5b6001600160a01b0381811660009081526020819052604090205416156101ab57600080fd5b600060208190527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d80546001600160a01b038481168085526040852080549290931673ffffffffffffffffffffffffffffffffffffffff199283161790925560018085528354909116909117909155805491610226836109ac565b90915550506040516001600160a01b03821681527f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269060200160405180910390a150565b6060600060015467ffffffffffffffff81111561029757634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156102c0578160200160208202803683370190505b506001600090815260208190527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d54919250906001600160a01b03165b6001600160a01b03811660011461036e578083838151811061032f57634e487b7160e01b600052603260045260246000fd5b6001600160a01b039283166020918202929092018101919091529181166000908152918290526040909120541681610366816109ac565b9250506102fd565b509092915050565b61037f3361075f565b7f640d43a292e1045452b5787d4bfc220d14947f5e314da25b7f888a1f3b4947df82826040516103b0929190610948565b60405180910390a15050565b6103c53361075f565b6001600160a01b038116158015906103e757506001600160a01b038116600114155b80156103fc57506001600160a01b0381163014155b61044d5760405162461bcd60e51b815260206004820152600160248201527f320000000000000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0381811660009081526020819052604090205416156104b55760405162461bcd60e51b815260206004820152600160248201527f33000000000000000000000000000000000000000000000000000000000000006044820152606401610444565b6001600160a01b038216158015906104d757506001600160a01b038216600114155b6105235760405162461bcd60e51b815260206004820152600160248201527f34000000000000000000000000000000000000000000000000000000000000006044820152606401610444565b6001600160a01b0383811660009081526020819052604090205481169083161461058f5760405162461bcd60e51b815260206004820152600160248201527f35000000000000000000000000000000000000000000000000000000000000006044820152606401610444565b6001600160a01b038281166000818152602081815260408083208054878716808652838620805492891673ffffffffffffffffffffffffffffffffffffffff19938416179055968a1685528285208054821690971790965592849052825490941690915591519081527ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf910160405180910390a16040516001600160a01b03821681527f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269060200160405180910390a1505050565b61066d3361075f565b6001600160a01b0381161580159061068f57506001600160a01b038116600114155b61069857600080fd5b6001600160a01b038281166000908152602081905260409020548116908216146106c157600080fd5b6001600160a01b038181166000818152602081905260408082208054878616845291832080549290951673ffffffffffffffffffffffffffffffffffffffff19928316179094559181528254909116909155600180549161072183610995565b90915550506040516001600160a01b03821681527ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf906020016103b0565b61076881610102565b6107da5760405162461bcd60e51b815260206004820152602d60248201527f43616c6c6572206973206e6f7420616e20617070726f766564206f776e65722060448201527f6f6620746869732053706c6974000000000000000000000000000000000000006064820152608401610444565b50565b80356001600160a01b03811681146107f457600080fd5b919050565b60006020828403121561080a578081fd5b610813826107dd565b9392505050565b6000806040838503121561082c578081fd5b610835836107dd565b9150610843602084016107dd565b90509250929050565b600080600060608486031215610860578081fd5b610869846107dd565b9250610877602085016107dd565b9150610885604085016107dd565b90509250925092565b600080602083850312156108a0578182fd5b823567ffffffffffffffff808211156108b7578384fd5b818501915085601f8301126108ca578384fd5b8135818111156108d8578485fd5b8660208285010111156108e9578485fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b8181101561093c5783516001600160a01b031683529284019291840191600101610917565b50909695505050505050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b6000816109a4576109a46109c7565b506000190190565b60006000198214156109c0576109c06109c7565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212204a8576f6d8756faebcc158181a418c365960761105805db380a0d62c250e82b864736f6c63430008040033";
