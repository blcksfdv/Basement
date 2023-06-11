import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import useDirectCall from "../../hooks/useTransation";
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { ConnectButtonwagmi } from "../Header/connect";
import { NFT_CONTRACT, NFT_PRICE } from "../../config";
import { useAccount, useSigner } from "wagmi";
import { fetchTotalMint } from "../../hooks/Totalsupply";

export function Mint() {
  const dispatch = useAppdispatch();
  const { data: signer } = useSigner();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { BuyToken, loading } = useDirectCall(signer, NFT_CONTRACT);
  const supply = useAppSelector((state) => state.wallet.totalSupply);
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);
  }, []);

  const Mintnft = () => {
    BuyToken("Mint", NFT_PRICE);
  };
  useEffect(() => {
    dispatch(fetchTotalMint());
  }, [loading]);

  return (
    <div className="w-full md:w-6/12">
      <div className="flex flex-col gap-x-0 md:gap-y-2 mb-2">
        <h1 className="capitalize text-3xl leading-loose font-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          The Basement
        </h1>
        <h1 className="mt-[-1rem] md:mt-0 md:pt-[2px] capitalize text-3xl leading-loose	 font-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Dwellers' Genesis
        </h1>
      </div>

      <p className="py-2 text-white">
        To celebrate all of you fine people for getting us to 15,000
        subscribers, we have an official NFT Drop available just to you!
      </p>

      <div className="py-2 flex flex-col gap-y-2 ">
        <p className="p_tag">
          Price per NFT: Free to Claim (user has to pay txn fee to claim)
        </p>
        <p className="p_tag">Max mint per wallet: 1 per wallet</p>
        <p className="p_tag">Secondary Sale Royalty: 2.5%</p>
        <h2 className="text-4xl font-extrabold py-4 text-white">
          {supply}/15000 Minted
        </h2>
      </div>

      {load ? (
        <div>
          {isConnected ? (
            <button
              disabled={loading}
              onClick={() => Mintnft()}
              className=" bg-gradient-to-r from-purple-400 to-pink-600 hover:to-purple-500 text-white font-bold py-2 px-10 rounded-2xl tracking-[1px]"
            >
              {loading ? "Minting.." : "Mint"}
            </button>
          ) : (
            <ConnectButtonwagmi />
          )}
        </div>
      ) : null}
    </div>
  );
}
