import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UnitToggle } from "../features/components/UnitToggle";
import { HeightInput } from "./HeightInput";

export const HeightQuestion = ({
  selectedUnit,
  heightValue,
  onUnitChange,
  onHeightChange,
  onIncrement,
  onDecrement,
}) => {
  const navigate = useNavigate();
  const [designOn, setDesignOn] = useState(true);

  return (
    <main
      className={`min-h-screen w-full flex items-center justify-center px-4 ${
        designOn ? "bg-white" : "bg-gray-50"
      }`}
    >
      <section
        className={`w-full max-w-[600px] flex flex-col items-center ${
          designOn ? "bg-white" : "bg-white"
        }`}
      >
        {/* Top bar: Design toggle */}
        <div className="w-full flex items-center justify-end mb-4">
          <label className="flex items-center gap-2 text-sm text-gray-600 select-none">
            <span>Design</span>
            <button
              type="button"
              onClick={() => setDesignOn((v) => !v)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                designOn ? "bg-purple-600" : "bg-gray-300"
              }`}
              aria-pressed={designOn}
              aria-label="Toggle design on/off"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                  designOn ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-xs font-medium ${
                designOn ? "text-purple-700" : "text-gray-500"
              }`}
            >
              {designOn ? "On" : "Off"}
            </span>
          </label>
        </div>

        <div
          className={`w-full flex flex-col items-center rounded-2xl ${
            designOn
              ? "shadow-[0_20px_50px_rgba(64,106,255,0.08)] border border-gray-100"
              : "border border-gray-200"
          } p-6 sm:p-8`}
        >
          {/* Heading + subcopy */}
          <div className="w-full text-center">
            <h2 className="text-gray-900 text-[32px] sm:text-[34px] font-semibold">
              What’s your height?
            </h2>
            <p className="text-gray-600 text-xl leading-8 mt-3">
              This helps us find clothes that fit you best.
            </p>
          </div>

          {/* Illustration */}
          <img
            src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/972898293f44df2ec5935fc56430457741f2e23f?placeholderIfAbsent=true"
            alt="Height measurement illustration"
            className="aspect-[1.5] object-contain w-[360px] max-w-full mt-6"
          />

          {/* Unit toggle */}
          <div className="mt-6">
            <UnitToggle
              selectedUnit={selectedUnit}
              onUnitChange={onUnitChange}
            />
          </div>

          {/* Height input */}
          <div className="mt-4 w-full">
            <HeightInput
              value={heightValue}
              unit={selectedUnit}
              onChange={onHeightChange}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() => navigate("/imageinput")}
            className={`mt-10 inline-flex w-full sm:w-[400px] items-center justify-center gap-3 rounded-full px-5 py-4 text-center text-base font-semibold transition ${
              designOn
                ? "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_20px_50px_rgba(64,106,255,0.18)]"
                : "bg-gray-900 hover:bg-black text-white"
            }`}
          >
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};
