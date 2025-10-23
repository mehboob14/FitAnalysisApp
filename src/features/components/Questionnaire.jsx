import React, { useState } from "react";
import { Header } from "./Header";
import { HeightQuestion } from "./HeightQuestion";
import { Footer } from "./Footer";

export const Questionnaire = () => {
  const [selectedUnit, setSelectedUnit] = useState("ft");
  const [heightValue, setHeightValue] = useState("5'4");

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
    // Convert height value when unit changes
    if (unit === "cm" && heightValue === "5'4") {
      setHeightValue("163");
    } else if (unit === "ft" && heightValue === "163") {
      setHeightValue("5'4");
    }
  };

  const handleHeightChange = (value) => {
    setHeightValue(value);
  };

  const handleIncrement = () => {
    if (selectedUnit === "cm") {
      const currentValue = parseInt(heightValue) || 0;
      setHeightValue((currentValue + 1).toString());
    } else {
      // Handle feet/inches increment logic
      const parts = heightValue.split("'");
      if (parts.length === 2) {
        const feet = parseInt(parts[0]) || 0;
        const inches = parseInt(parts[1]) || 0;
        if (inches < 11) {
          setHeightValue(`${feet}'${inches + 1}`);
        } else {
          setHeightValue(`${feet + 1}'0`);
        }
      }
    }
  };

  const handleDecrement = () => {
    if (selectedUnit === "cm") {
      const currentValue = parseInt(heightValue) || 0;
      if (currentValue > 0) {
        setHeightValue((currentValue - 1).toString());
      }
    } else {
      // Handle feet/inches decrement logic
      const parts = heightValue.split("'");
      if (parts.length === 2) {
        const feet = parseInt(parts[0]) || 0;
        const inches = parseInt(parts[1]) || 0;
        if (inches > 0) {
          setHeightValue(`${feet}'${inches - 1}`);
        } else if (feet > 0) {
          setHeightValue(`${feet - 1}'11`);
        }
      }
    }
  };

  return (
    <main className="bg-white flex flex-col overflow-hidden items-stretch px-[60px] py-[22px] max-md:px-5 min-h-screen">
      <Header />
      <HeightQuestion
        selectedUnit={selectedUnit}
        heightValue={heightValue}
        onUnitChange={handleUnitChange}
        onHeightChange={handleHeightChange}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <Footer />
    </main>
  );
};
