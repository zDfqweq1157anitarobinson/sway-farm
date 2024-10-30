import type { BytesLike } from "fuels";
import type { Dispatch, SetStateAction } from "react";

import type { FarmContract } from "../../sway-api";

import BuySeeds from "./BuySeeds";
import SellItem from "./SellItem";

interface MarketModalProps {
  contract: FarmContract | null;
  updatePageNum: () => void;
  items: number;
  setCanMove: Dispatch<SetStateAction<boolean>>;
  farmCoinAssetID: BytesLike;
}

export default function MarketModal({
  contract,
  updatePageNum,
  items,
  setCanMove,
  farmCoinAssetID,
}: MarketModalProps) {
  return (
    <div className="market-modal">
      <BuySeeds
        contract={contract}
        updatePageNum={updatePageNum}
        setCanMove={setCanMove}
        farmCoinAssetID={farmCoinAssetID}
      />
      {items > 0 && (
        <SellItem
          contract={contract}
          updatePageNum={updatePageNum}
          items={items}
          setCanMove={setCanMove}
        />
      )}
    </div>
  );
}
