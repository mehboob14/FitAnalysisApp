import { useState } from "react";
import { useLocation } from "wouter";

export default function EditMeasurements() {
  const [, setLocation] = useLocation();
  const [measurements, setMeasurements] = useState({
    height: "5'8\"",
    chest: '28"',
    bust: '38"',
    hips: '36"',
  });

  const handleSave = () => {
    setLocation("/measurements-saved");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-[24px] p-8 max-w-[1080px] w-full max-h-[90vh] overflow-auto">
        <h2 className="font-['Poppins',sans-serif] font-medium text-2xl text-black mb-8">
          Edit your body measurements
        </h2>

        <div className="space-y-5">
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="font-['Poppins',sans-serif] font-medium text-base text-black block mb-3">
                Height
              </label>
              <input
                type="text"
                value={measurements.height}
                onChange={(e) =>
                  setMeasurements({ ...measurements, height: e.target.value })
                }
                className="w-full bg-[#f2f2f2] border border-[#e9eaeb] rounded-full px-[18px] py-4 text-[#5d5d5d]"
              />
            </div>
            <div className="flex-1">
              <label className="font-['Poppins',sans-serif] font-medium text-base text-black block mb-3">
                Chest
              </label>
              <input
                type="text"
                value={measurements.chest}
                onChange={(e) =>
                  setMeasurements({ ...measurements, chest: e.target.value })
                }
                className="w-full bg-[#f2f2f2] border border-[#e9eaeb] rounded-full px-[18px] py-4 text-[#5d5d5d]"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <label className="font-['Poppins',sans-serif] font-medium text-base text-black block mb-3">
                Bust
              </label>
              <input
                type="text"
                value={measurements.bust}
                onChange={(e) =>
                  setMeasurements({ ...measurements, bust: e.target.value })
                }
                className="w-full bg-[#f2f2f2] border border-[#e9eaeb] rounded-full px-[18px] py-4 text-[#5d5d5d]"
              />
            </div>
            <div className="flex-1">
              <label className="font-['Poppins',sans-serif] font-medium text-base text-black block mb-3">
                Hips
              </label>
              <input
                type="text"
                value={measurements.hips}
                onChange={(e) =>
                  setMeasurements({ ...measurements, hips: e.target.value })
                }
                className="w-full bg-[#f2f2f2] border border-[#e9eaeb] rounded-full px-[18px] py-4 text-[#5d5d5d]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={handleSave}
            className="bg-[#9870ea] text-white px-7 py-4 rounded-full text-sm font-semibold shadow-[0px_20px_51px_0px_rgba(64,106,255,0.08)] w-[207px]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
