/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OurFactory } from "../OurFactory";

export class OurFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    splitter_: string,
    minter_: string,
    overrides?: Overrides
  ): Promise<OurFactory> {
    return super.deploy(
      splitter_,
      minter_,
      overrides || {}
    ) as Promise<OurFactory>;
  }
  getDeployTransaction(
    splitter_: string,
    minter_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(splitter_, minter_, overrides || {});
  }
  attach(address: string): OurFactory {
    return super.attach(address) as OurFactory;
  }
  connect(signer: Signer): OurFactory__factory {
    return super.connect(signer) as OurFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OurFactory {
    return new Contract(address, _abi, signerOrProvider) as OurFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "splitter_",
        type: "address",
      },
      {
        internalType: "address",
        name: "minter_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ourProxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proxyManager",
        type: "address",
      },
    ],
    name: "ProxyCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot_",
        type: "bytes32",
      },
    ],
    name: "createSplit",
    outputs: [
      {
        internalType: "address",
        name: "ourProxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "minter",
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
    inputs: [],
    name: "splitter",
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
  "0x60c060405234801561001057600080fd5b50604051610ae1380380610ae183398101604081905261002f91610069565b6001600160601b0319606092831b8116608052911b1660a05261009b565b80516001600160a01b038116811461006457600080fd5b919050565b6000806040838503121561007b578182fd5b6100848361004d565b91506100926020840161004d565b90509250929050565b60805160601c60a05160601c610a1d6100c4600039600060560152600060b10152610a1d6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806307546172146100515780632eb4a7ab146100955780633cd8045e146100ac57806381a77c8c146100d3575b600080fd5b6100787f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61009e60005481565b60405190815260200161008c565b6100787f000000000000000000000000000000000000000000000000000000000000000081565b6100786100e136600461018f565b60008181556040805160208101849052016040516020818303038152906040528051906020012060405161011490610182565b8190604051809103906000f5905080158015610134573d6000803e3d6000fd5b5060008055604080516001600160a01b03831681523360208201529192507f9678a1e87ca9f1a37dc659a97b39d812d98cd236947e1b53b3d0d6fd346acb6e910160405180910390a1919050565b610840806101a883390190565b6000602082840312156101a0578081fd5b503591905056fe608060405234801561001057600080fd5b50336001600160a01b0316633cd8045e6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561004c57600080fd5b505af1158015610060573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061008491906102c5565b600260006101000a8154816001600160a01b0302191690836001600160a01b03160217905550336001600160a01b031663075461726040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156100e557600080fd5b505af11580156100f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011d91906102c5565b600360006101000a8154816001600160a01b0302191690836001600160a01b03160217905550336001600160a01b0316632eb4a7ab6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561017e57600080fd5b505af1158015610192573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b691906102f3565b6000556101c232610273565b6003546001600160a01b03166101e06007546001600160a01b031690565b6040516001600160a01b03909116602482015260440160408051601f198184030181529181526020820180516001600160e01b0316635df75c0360e01b1790525161022b919061030b565b600060405180830381855af49150503d8060008114610266576040519150601f19603f3d011682016040523d82523d6000602084013e61026b565b606091505b505050610344565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156102d6578081fd5b81516001600160a01b03811681146102ec578182fd5b9392505050565b600060208284031215610304578081fd5b5051919050565b60008251815b8181101561032b5760208186018101518583015201610311565b818111156103395782828501525b509190910192915050565b6104ed806103536000396000f3fe6080604052600436106100955760003560e01c8063715018a611610059578063715018a6146101fd57806381e580d3146102125780638da5cb5b14610232578063ba0bafb414610250578063f2fde38b14610266576100b3565b80630754617214610117578063150b7a021461014e5780632eb4a7ab146101935780633cd8045e146101b75780634f0e0ef3146101d5576100b3565b366100b35734600660008282546100ac9190610493565b9091555050005b6007546001600160a01b03163314156101015760006100da6003546001600160a01b031690565b905060405136600082376000803683855af43d806000843e8180156100fd578184f35b8184fd5b60006100da6002546001600160a01b031690565b005b34801561012357600080fd5b506003546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b34801561015a57600080fd5b5061017a6101693660046103e5565b630a85bd0160e11b95945050505050565b6040516001600160e01b03199091168152602001610145565b34801561019f57600080fd5b506101a960005481565b604051908152602001610145565b3480156101c357600080fd5b506002546001600160a01b0316610131565b3480156101e157600080fd5b5061013173c778417e063141139fce010982780140aa0cd5ab81565b34801561020957600080fd5b50610115610286565b34801561021e57600080fd5b506101a961022d36600461047b565b6102a9565b34801561023e57600080fd5b506007546001600160a01b0316610131565b34801561025c57600080fd5b506101a960015481565b34801561027257600080fd5b506101156102813660046103c4565b6102ca565b6007546001600160a01b0316331461029d57600080fd5b6102a76000610356565b565b600481815481106102b957600080fd5b600091825260209091200154905081565b6007546001600160a01b031633146102e157600080fd5b6001600160a01b03811661034a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840160405180910390fd5b61035381610356565b50565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80356001600160a01b03811681146103bf57600080fd5b919050565b6000602082840312156103d5578081fd5b6103de826103a8565b9392505050565b6000806000806000608086880312156103fc578081fd5b610405866103a8565b9450610413602087016103a8565b935060408601359250606086013567ffffffffffffffff80821115610436578283fd5b818801915088601f830112610449578283fd5b813581811115610457578384fd5b896020828501011115610468578384fd5b9699959850939650602001949392505050565b60006020828403121561048c578081fd5b5035919050565b600082198211156104b257634e487b7160e01b81526011600452602481fd5b50019056fea26469706673582212207b1521960331a759410a02ae06fa25dad4d4de3d9ee39006adddf4abaabfb9f164736f6c63430008040033a2646970667358221220296ce99d3a909a1ef7784c0e581f70eeeb60f742bf73284b703d74388a82b50464736f6c63430008040033";
