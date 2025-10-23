import React from "react";

export const HeightInput = ({
  value,
  unit,
  onChange,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="justify-between items-center flex w-[400px] max-w-full gap-[40px_85px] text-black font-medium whitespace-nowrap mt-7 pt-3 pb-[13px] px-[21px] rounded-[1166.667px] border-[1.167px] border-solid border-[#E9EAEB] max-md:px-5">
      <div className="self-stretch flex items-center gap-[23px] text-[21px] w-[238px] my-auto">
        <button
          onClick={onDecrement}
          className="aspect-[1] w-[17px] self-stretch shrink-0 my-auto hover:opacity-70 transition-opacity"
          aria-label="Decrease height"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/04e83a77d39296374872907233f9cea4297f6c5e?placeholderIfAbsent=true"
            alt=""
            className="aspect-[1] object-contain w-[17px]"
          />
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="self-stretch my-auto bg-transparent border-none outline-none text-center text-[21px] font-medium"
          aria-label={`Height in ${
            unit === "cm" ? "centimeters" : "feet and inches"
          }`}
        />
        <button
          onClick={onIncrement}
          className="aspect-[1] w-[17px] self-stretch shrink-0 my-auto hover:opacity-70 transition-opacity"
          aria-label="Increase height"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/5eeb00327fc3302db7e83b73509d4102c14fea0a?placeholderIfAbsent=true"
            alt=""
            className="aspect-[1] object-contain w-[17px]"
          />
        </button>
      </div>
      <div className="text-base self-stretch my-auto">
        {unit === "cm" ? "Cm" : "Ft'In"}
      </div>
    </div>
  );
};
