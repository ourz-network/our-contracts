/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MirrorENSRegistrar } from "../MirrorENSRegistrar";

export class MirrorENSRegistrar__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rootName: string,
    _rootNode: BytesLike,
    _ensRegistry: string,
    _ensResolver: string,
    _mirrorInviteToken: string,
    overrides?: Overrides
  ): Promise<MirrorENSRegistrar> {
    return super.deploy(
      _rootName,
      _rootNode,
      _ensRegistry,
      _ensResolver,
      _mirrorInviteToken,
      overrides || {}
    ) as Promise<MirrorENSRegistrar>;
  }
  getDeployTransaction(
    _rootName: string,
    _rootNode: BytesLike,
    _ensRegistry: string,
    _ensResolver: string,
    _mirrorInviteToken: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rootName,
      _rootNode,
      _ensRegistry,
      _ensResolver,
      _mirrorInviteToken,
      overrides || {}
    );
  }
  attach(address: string): MirrorENSRegistrar {
    return super.attach(address) as MirrorENSRegistrar;
  }
  connect(signer: Signer): MirrorENSRegistrar__factory {
    return super.connect(signer) as MirrorENSRegistrar__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MirrorENSRegistrar {
    return new Contract(address, _abi, signerOrProvider) as MirrorENSRegistrar;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_rootName",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_rootNode",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_ensRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ensResolver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorInviteToken",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "ENSResolverChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_ens",
        type: "string",
      },
    ],
    name: "RegisteredENS",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_rootnode",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "RootnodeOwnerChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_ens",
        type: "string",
      },
    ],
    name: "UnregisteredENS",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDR_REVERSE_NODE",
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
        internalType: "address",
        name: "_ensResolver",
        type: "address",
      },
    ],
    name: "changeENSResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "changeRootnodeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ensRegistry",
    outputs: [
      {
        internalType: "contract IENS",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ensResolver",
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
    name: "getENSReverseRegistrar",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_subnode",
        type: "bytes32",
      },
    ],
    name: "isAvailable",
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
    name: "isInviteToken",
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
    name: "mirrorInviteToken",
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
    name: "owner",
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
    inputs: [
      {
        internalType: "string",
        name: "_label",
        type: "string",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rootName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rootNode",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200152138038062001521833981810160405260a08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604090815260208201519082015160608301516080909301519194509250600062000111620001bb565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350845162000170906001906020880190620001bf565b50600293909355600380546001600160a01b03199081166001600160a01b0394851617909155600480548216928416929092179091556005805490911691909216179055506200025b565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200020257805160ff191683800117855562000232565b8280016001018555821562000232579182015b828111156200023257825182559160200191906001019062000215565b506200024092915062000244565b5090565b5b8082111562000240576000815560010162000245565b6112b6806200026b6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806389b6f02711610097578063f20387df11610066578063f20387df1461023a578063f2fde38b146102b7578063faff50a8146102dd578063fb419999146102e5576100f5565b806389b6f027146101f15780638da5cb5b146102225780639c0a48de1461022a578063adce1c5f14610232576100f5565b8063715018a6116100d3578063715018a6146101a15780637cf8a2eb146101a95780637d73b231146101c357806386605d96146101cb576100f5565b806309d73442146100fa5780631e59c5291461011e57806359a9565414610199575b600080fd5b61010261030b565b604080516001600160a01b039092168252519081900360200190f35b6101976004803603604081101561013457600080fd5b81019060208101813564010000000081111561014f57600080fd5b82018360208201111561016157600080fd5b8035906020019184600183028401116401000000008311171561018357600080fd5b9193509150356001600160a01b031661031a565b005b6101026103a3565b6101976103b2565b6101b1610473565b60408051918252519081900360200190f35b610102610497565b610197600480360360208110156101e157600080fd5b50356001600160a01b03166104a6565b61020e6004803603602081101561020757600080fd5b50356105d5565b604080519115158252519081900360200190f35b6101026106a0565b61020e6106af565b6101026106c0565b6102426106cf565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027c578181015183820152602001610264565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610197600480360360208110156102cd57600080fd5b50356001600160a01b031661075c565b6101b1610873565b610197600480360360208110156102fb57600080fd5b50356001600160a01b0316610879565b6000610315610989565b905090565b6103226106af565b61035d5760405162461bcd60e51b81526004018080602001828103825260328152602001806111d66032913960400191505060405180910390fd5b61039e83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859250610a25915050565b505050565b6005546001600160a01b031681565b6103ba61100e565b6000546001600160a01b0390811691161461041c576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b7f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e281565b6003546001600160a01b031681565b6104ae61100e565b6000546001600160a01b03908116911614610510576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600354600254604080517f5b0fc9c300000000000000000000000000000000000000000000000000000000815260048101929092526001600160a01b0384811660248401529051921691635b0fc9c39160448082019260009290919082900301818387803b15801561058157600080fd5b505af1158015610595573d6000803e3d6000fd5b50505050806001600160a01b03166002547f1219ccb7de3c75be86cb7065f05d9d42fb6a5162e02537d1b0d95a890ff4fd9d60405160405180910390a350565b60025460408051602080820193909352808201849052815180820383018152606082018084528151918501919091206003546302571be360e01b90925260648301819052925160009485936001600160a01b03909316926302571be39260848083019392829003018186803b15801561064d57600080fd5b505afa158015610661573d6000803e3d6000fd5b505050506040513d602081101561067757600080fd5b505190506001600160a01b0381166106945760019250505061069b565b6000925050505b919050565b6000546001600160a01b031690565b6005546001600160a01b0316331490565b6004546001600160a01b031681565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107545780601f1061072957610100808354040283529160200191610754565b820191906000526020600020905b81548152906001019060200180831161073757829003601f168201915b505050505081565b61076461100e565b6000546001600160a01b039081169116146107c6576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b03811661080b5760405162461bcd60e51b81526004018080602001828103825260268152602001806112086026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60025481565b61088161100e565b6000546001600160a01b039081169116146108e3576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166109285760405162461bcd60e51b815260040180806020018281038252602a81526020018061122e602a913960400191505060405180910390fd5b600480546001600160a01b03831673ffffffffffffffffffffffffffffffffffffffff19909116811790915560408051918252517f8bd878c65101d815c50829c7b19270ff5c19e91bd1ad6ebaa282c4a65a5baa5f9181900360200190a150565b600354604080516302571be360e01b81527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2600482015290516000926001600160a01b0316916302571be3916024808301926020929190829003018186803b1580156109f457600080fd5b505afa158015610a08573d6000803e3d6000fd5b505050506040513d6020811015610a1e57600080fd5b5051905090565b6000826040516020018082805190602001908083835b60208310610a5a5780518252601f199092019160209182019101610a3b565b51815160209384036101000a60001901801990921691161790526040805192909401828103601f1901835280855282519282019290922060025483830152828501819052845180840386018152606084018087528151918401919091206003546302571be360e01b909252606485018190529551919850949650600095506001600160a01b03909416936302571be39350608480840193829003018186803b158015610b0557600080fd5b505afa158015610b19573d6000803e3d6000fd5b505050506040513d6020811015610b2f57600080fd5b505190506001600160a01b03811615610b795760405162461bcd60e51b81526004018080602001828103825260298152602001806112586029913960400191505060405180910390fd5b60035460025460048054604080517f5ef2c7f000000000000000000000000000000000000000000000000000000000815292830193909352602482018790526001600160a01b03888116604484015290811660648301526000608483018190529251931692635ef2c7f09260a48084019391929182900301818387803b158015610c0257600080fd5b505af1158015610c16573d6000803e3d6000fd5b505060048054604080517fd5fa2b000000000000000000000000000000000000000000000000000000000081529283018790526001600160a01b03898116602485015290519116935063d5fa2b009250604480830192600092919082900301818387803b158015610c8657600080fd5b505af1158015610c9a573d6000803e3d6000fd5b505060408051600280825260608281019093529193509150816020015b610cbf6111bb565b815260200190600190039081610cb7579050509050610cdd86611012565b81600081518110610cea57fe5b6020908102919091018101919091526001805460408051600283851615610100026000190190931692909204601f8101859004850283018501909152808252610d8b93919291830182828015610d815780601f10610d5657610100808354040283529160200191610d81565b820191906000526020600020905b815481529060010190602001808311610d6457829003601f168201915b5050505050611012565b81600181518110610d9857fe5b60200260200101819052506060610ded82610de76040518060400160405280600181526020017f2e00000000000000000000000000000000000000000000000000000000000000815250611012565b90611037565b90506000610df9610989565b90506000816001600160a01b031663bffbe61c896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610e4a57600080fd5b505afa158015610e5e573d6000803e3d6000fd5b505050506040513d6020811015610e7457600080fd5b505160048054604080517f77372213000000000000000000000000000000000000000000000000000000008152928301848152602484019182528751604485015287519495506001600160a01b0390921693637737221393869389939092909160640190602085019080838360005b83811015610efb578181015183820152602001610ee3565b50505050905090810190601f168015610f285780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b158015610f4857600080fd5b505af1158015610f5c573d6000803e3d6000fd5b50505050876001600160a01b03167f9f2a065383b236afdeb6e9b1d77966068499287f92b04c37831f34f565d14401846040518080602001828103825283818151815260200191508051906020019080838360005b83811015610fc9578181015183820152602001610fb1565b50505050905090810190601f168015610ff65780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050505050565b3390565b61101a6111bb565b506040805180820190915281518152602082810190820152919050565b60608151600014156110585750604080516020810190915260008152611177565b815183516000199091010260005b83518110156110945783818151811061107b57fe5b6020908102919091010151519190910190600101611066565b5060608167ffffffffffffffff811180156110ae57600080fd5b506040519080825280601f01601f1916602001820160405280156110d9576020820181803683370190505b5090506020810160005b855181101561117057611125828783815181106110fc57fe5b60200260200101516020015188848151811061111457fe5b60200260200101516000015161117d565b85818151811061113157fe5b60200260200101516000015182019150600186510381101561116857611160828860200151896000015161117d565b865191909101905b6001016110e3565b5090925050505b92915050565b5b6020811061119d578151835260209283019290910190601f190161117e565b905182516020929092036101000a6000190180199091169116179052565b60405180604001604052806000815260200160008152509056fe4d6972726f72454e535265676973747261723a2063616c6c6572206973206e6f742074686520696e7669746520746f6b656e4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734d6972726f72454e535265676973747261723a20616464726573732063616e6e6f74206265206e756c6c4d6972726f72454e534d616e616765723a205f6c6162656c20697320616c7265616479206f776e6564a264697066735822122095955415fef6efcc4bde12664f23d2096ccac784d4a114dee12487e3f5bae35964736f6c63430007030033";
