import React, { useState } from "react";
import UnitSelector from "./UnitSelector";
import HeightInput from "./HeightInput";

const HeightQuestionnaire = () => {
  const [unit, setUnit] = useState("cm");
  const [height, setHeight] = useState("5'4");

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    if (newUnit === "cm" && unit === "ft") {
      setHeight("163");
    } else if (newUnit === "ft" && unit === "cm") {
      setHeight("5'4");
    }
  };

  const handleIncrement = () => {
    if (unit === "cm") {
      const currentHeight = parseInt(height) || 0;
      setHeight((currentHeight + 1).toString());
    } else {
      const parts = height.split("'");
      if (parts.length === 2) {
        let feet = parseInt(parts[0]) || 0;
        let inches = parseInt(parts[1]) || 0;
        inches += 1;
        if (inches >= 12) {
          feet += 1;
          inches = 0;
        }
        setHeight(`${feet}'${inches}`);
      }
    }
  };

  const handleDecrement = () => {
    if (unit === "cm") {
      const currentHeight = parseInt(height) || 0;
      if (currentHeight > 0) {
        setHeight((currentHeight - 1).toString());
      }
    } else {
      const parts = height.split("'");
      if (parts.length === 2) {
        let feet = parseInt(parts[0]) || 0;
        let inches = parseInt(parts[1]) || 0;
        inches -= 1;
        if (inches < 0 && feet > 0) {
          feet -= 1;
          inches = 11;
        } else if (inches < 0) {
          inches = 0;
        }
        setHeight(`${feet}'${inches}`);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Height submitted:", height, unit);
  };

  return (
    <main className="absolute w-[587px] h-[763px] flex flex-col items-center gap-10 left-[427px] top-[130px] max-md:relative max-md:w-full max-md:max-w-[600px] max-md:mx-auto max-md:my-0 max-md:left-0 max-md:top-0">
      {/* TEXT */}
      <div className="flex w-full flex-col items-center gap-3">
        <h2 className="text-black text-center text-[33px] font-medium max-sm:text-[28px]">
          What's your height?
        </h2>
        <p className="text-[#757575] text-center text-[20px] font-normal max-sm:text-base">
          This helps us to find clothes that are best fit for you
        </p>
      </div>

      {/* IMAGE */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a958c1e60539a553b339b1a87ae43373515f2d09?width=793"
        alt="Person measuring height illustration"
        className="w-[300px] max-sm:w-[240px]"
      />

      {/* UNIT SELECTOR */}
      <UnitSelector selectedUnit={unit} onUnitChange={handleUnitChange} />

      {/* HEIGHT INPUT */}
      <HeightInput
        height={height}
        unit={unit}
        onHeightChange={setHeight}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      {/* BUTTON */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="flex w-[397px] justify-center items-center gap-[12.727px] shadow-[0_20.364px_50.909px_0_rgba(64,106,255,0.08)] cursor-pointer bg-[#9870EA] px-[17.818px] py-[15px] rounded-[1037.037px] max-md:w-full max-md:max-w-[350px] max-sm:max-w-[300px] hover:bg-[#8660d8] transition-colors"
      >
        <span className="text-white text-center text-base font-semibold leading-5 max-sm:text-sm">
          Get Started
        </span>
      </button>
    </main>
  );
};

export default HeightQuestionnaire;
