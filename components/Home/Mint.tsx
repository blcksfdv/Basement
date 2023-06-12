import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import useDirectCall from "../../hooks/useTransation";
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { ConnectButtonwagmi } from "../Header/connect";
import { NFT_CONTRACT, baseURI ,_allowlistProof,currency,_pricePerToken,quantityLimitPerWallet} from "../../config";
import { useAccount, useSigner } from "wagmi";
import { fetchTotalMint } from "../../hooks/Totalsupply";
import { toast } from "react-hot-toast";

export function Mint() {
  const dispatch = useAppdispatch();
  const { data: signer } = useSigner();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { BuyToken, loading, Checklimit } = useDirectCall(signer, NFT_CONTRACT);
  const supply = useAppSelector((state) => state.wallet.totalSupply);
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);
  }, []);




  const Mintnft = async () => {
    const parms = [
      address,
      1,
      currency,
      _pricePerToken,
      _allowlistProof,
      "0x",
    ];

    const limit = await Checklimit("getSupplyClaimedByWallet", [0, address]);
    const Mintleft =Number(limit);
    console.log(Mintleft);
    
    if(Mintleft<=quantityLimitPerWallet){
      BuyToken("claim",parms);
    }else{
      toast.error("You already minted");
    }
  };


  useEffect(() => {
    dispatch(fetchTotalMint());
  }, [loading]);

  return (
    <div className="w-full md:w-6/12">
      <div className="flex flex-col gap-x-0 md:gap-y-2 mb-2">
        <h1 className="capitalize text-3xl leading-loose tracking-[0px] font-extrabold md:text-5xl text-[#F2C422]">
          The Basement
        </h1>
        <h1 className="mt-[-1rem] md:mt-0 md:pt-[2px] capitalize text-3xl leading-loose	 font-extrabold md:text-5xl text-[#F2C422]">
          {` Dwellers' Genesis`}
        </h1>
      </div>

      <p className="py-2 text-white">
        {` To celebrate all of you fine people for getting us to 15,000
        subscribers, we have an official NFT Drop available just to you!`}
      </p>

      <div className="py-2 flex flex-col gap-y-2 ">
        <p className="p_tag">
          {`Free + Transaction fee to Claim! `}
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
              className="bg-[#F2C422] hover:bg-[#906d03] text-white font-bold py-2 px-10 rounded-2xl tracking-[1px]"
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
