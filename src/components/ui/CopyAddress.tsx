"use client";

import { useState } from "react";
import { TbCheck } from "react-icons/tb";
import { PiCopySimpleFill } from "react-icons/pi";

const CopyAddress = () => {
  const [copied, setCopied] = useState(false);

  const address = "0xC4a174cCb5fb54a6721e11e0Ca961e42715023F9";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Copying error:", err);
    }
  };

  return (
    <div className="flex items-centerfont-mono w-[713px]">
      <span className="text-[25.6px] font-[500] leading-[100%] mr-[12px]">
        CA: {address}
      </span>
      {copied ? (
        <TbCheck className="text-green-500 text-19.1px]" />
      ) : (
        <PiCopySimpleFill
          onClick={handleCopy}
          className="cursor-pointer text-white text-[19.1px]"
        />
      )}
    </div>
  );
};

export default CopyAddress;
