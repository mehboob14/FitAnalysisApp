import React from "react";

export const UnitToggle = ({ selectedUnit, onUnitChange }) => {
  return (
    <div className="relative flex min-h-[65px] w-[225px] max-w-full flex-col text-sm text-white font-normal whitespace-nowrap text-center tracking-[-0.2px] leading-none justify-center mt-7 px-1 py-[7px]">
      <div className="justify-center items-center shadow-[0_20.69px_51.724px_0_rgba(64,106,255,0.08)] absolute z-0 flex min-h-[65px] w-[225px] gap-[13px] bg-[#DFD3F8] px-[25.862px] py-[18.103px] rounded-[1264.045px] right-0 bottom-0" />
      <div
        className="self-center z-0 flex items-center gap-2.5"
        role="radiogroup"
        aria-label="Height unit selection"
      >
        <button
          className={`shadow-[0px_21px_52px_rgba(64,106,255,0.08)] self-stretch flex items-center gap-[13px] justify-center w-[103px] my-auto px-[18px] py-[15px] rounded-[1264px] transition-colors ${
            selectedUnit === "cm" ? "bg-[#9870EA]" : "bg-transparent"
          }`}
          onClick={() => onUnitChange("cm")}
          role="radio"
          aria-checked={selectedUnit === "cm"}
        >
          <span className="self-stretch my-auto">Cm</span>
        </button>
        <button
          className={`justify-center items-center shadow-[0_20.69px_51.724px_0_rgba(64,106,255,0.08)] self-stretch flex gap-[13px] w-[103px] my-auto px-[18px] py-[15px] rounded-[1264.045px] transition-colors ${
            selectedUnit === "ft" ? "bg-[#9870EA]" : "bg-transparent"
          }`}
          onClick={() => onUnitChange("ft")}
          role="radio"
          aria-checked={selectedUnit === "ft"}
        >
          <span className="self-stretch my-auto">Ft''In</span>
        </button>
      </div>
    </div>
  );
};
