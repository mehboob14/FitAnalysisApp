import React from "react";

const UnitSelector = ({ selectedUnit, onUnitChange }) => {
  return (
    <div className="flex w-[225px] h-[65px] flex-col justify-center items-center gap-[12.931px] relative p-[3.879px] max-md:w-[200px] max-sm:w-[180px] max-sm:h-[50px]">
      <div className="flex w-[567px] flex-col items-center gap-[10.345px] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 max-md:w-full max-sm:gap-2">
        <button
          onClick={() => onUnitChange("cm")}
          className={`flex w-[103px] flex-col items-center gap-[12.931px] justify-center shadow-[0_20.69px_51.724px_0_rgba(64,106,255,0.08)] px-[18.103px] py-[15.24px] rounded-[1264.045px] max-md:w-full max-sm:w-20 max-sm:px-3.5 max-sm:py-3 transition-colors ${
            selectedUnit === "cm" ? "bg-[#9870EA]" : "bg-[#DFD3F8]"
          }`}
          aria-pressed={selectedUnit === "cm"}
        >
          <span className="w-[567px] gap-7 text-white text-center text-sm font-normal leading-5 tracking-[-0.2px] max-md:w-full max-sm:text-xs">
            Cm
          </span>
        </button>
        <button
          onClick={() => onUnitChange("ft")}
          className={`flex w-[103px] justify-center items-center gap-[12.931px] shadow-[0_20.69px_51.724px_0_rgba(64,106,255,0.08)] px-[18.103px] py-[15.24px] rounded-[1264.045px] max-sm:w-20 max-sm:px-3.5 max-sm:py-3 transition-colors ${
            selectedUnit === "ft" ? "bg-[#9870EA]" : "bg-[#DFD3F8]"
          }`}
          aria-pressed={selectedUnit === "ft"}
        >
          <span className="w-[567px] gap-7 text-white text-center text-sm font-normal leading-5 tracking-[-0.2px] max-md:w-full max-sm:text-xs">
            Ft'In
          </span>
        </button>
      </div>
    </div>
  );
};

export default UnitSelector;
