/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IPartyBidInterface extends ethers.utils.Interface {
  functions: {
    "bid()": FunctionFragment;
    "claim(address)": FunctionFragment;
    "contribute()": FunctionFragment;
    "finalize()": FunctionFragment;
    "startParty(address,address,uint256,uint256,string,string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values: [string]): string;
  encodeFunctionData(
    functionFragment: "contribute",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finalize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startParty",
    values: [string, string, BigNumberish, BigNumberish, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startParty", data: BytesLike): Result;

  events: {};
}

export class IPartyBid extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IPartyBidInterface;

  functions: {
    bid(overrides?: Overrides): Promise<ContractTransaction>;

    "bid()"(overrides?: Overrides): Promise<ContractTransaction>;

    claim(
      _contributor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(address)"(
      _contributor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    contribute(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "contribute()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    finalize(overrides?: Overrides): Promise<ContractTransaction>;

    "finalize()"(overrides?: Overrides): Promise<ContractTransaction>;

    startParty(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "startParty(address,address,uint256,uint256,string,string)"(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  bid(overrides?: Overrides): Promise<ContractTransaction>;

  "bid()"(overrides?: Overrides): Promise<ContractTransaction>;

  claim(
    _contributor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(address)"(
    _contributor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  contribute(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "contribute()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  finalize(overrides?: Overrides): Promise<ContractTransaction>;

  "finalize()"(overrides?: Overrides): Promise<ContractTransaction>;

  startParty(
    _marketWrapper: string,
    _nftContract: string,
    _tokenId: BigNumberish,
    _auctionId: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "startParty(address,address,uint256,uint256,string,string)"(
    _marketWrapper: string,
    _nftContract: string,
    _tokenId: BigNumberish,
    _auctionId: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    bid(overrides?: CallOverrides): Promise<void>;

    "bid()"(overrides?: CallOverrides): Promise<void>;

    claim(_contributor: string, overrides?: CallOverrides): Promise<void>;

    "claim(address)"(
      _contributor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    contribute(overrides?: CallOverrides): Promise<void>;

    "contribute()"(overrides?: CallOverrides): Promise<void>;

    finalize(overrides?: CallOverrides): Promise<void>;

    "finalize()"(overrides?: CallOverrides): Promise<void>;

    startParty(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "startParty(address,address,uint256,uint256,string,string)"(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    bid(overrides?: Overrides): Promise<BigNumber>;

    "bid()"(overrides?: Overrides): Promise<BigNumber>;

    claim(_contributor: string, overrides?: Overrides): Promise<BigNumber>;

    "claim(address)"(
      _contributor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    contribute(overrides?: PayableOverrides): Promise<BigNumber>;

    "contribute()"(overrides?: PayableOverrides): Promise<BigNumber>;

    finalize(overrides?: Overrides): Promise<BigNumber>;

    "finalize()"(overrides?: Overrides): Promise<BigNumber>;

    startParty(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "startParty(address,address,uint256,uint256,string,string)"(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bid(overrides?: Overrides): Promise<PopulatedTransaction>;

    "bid()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    claim(
      _contributor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(address)"(
      _contributor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    contribute(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "contribute()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    finalize(overrides?: Overrides): Promise<PopulatedTransaction>;

    "finalize()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    startParty(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "startParty(address,address,uint256,uint256,string,string)"(
      _marketWrapper: string,
      _nftContract: string,
      _tokenId: BigNumberish,
      _auctionId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}