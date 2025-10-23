import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const BodyMeasurement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [measurements, setMeasurements] = useState({
    height: "5'8''",
    bust: "38''",
    chest: "28''",
    hips: "36''",
  });
  const [tempMeasurements, setTempMeasurements] = useState(measurements);

  const handleEdit = () => {
    setTempMeasurements(measurements);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    setMeasurements(tempMeasurements);
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  const measurementData = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/26a07cdd8c29737e01db438dfd4f347a0108bf8e?placeholderIfAbsent=true",
      label: "Height",
      value: measurements.height,
      key: "height",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/6239843ada9646c97f9ea42c57bd10947aa801da?placeholderIfAbsent=true",
      label: "Chest",
      value: measurements.chest,
      key: "chest",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/e95ea65ac32b8180e1d556412d884aa665c7cca2?placeholderIfAbsent=true",
      label: "Bust",
      value: measurements.bust,
      key: "bust",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/9dfacbc28be45515f56cc42320a8706e70ba689c?placeholderIfAbsent=true",
      label: "Hips",
      value: measurements.hips,
      key: "hips",
    },
  ];

  return (
    <main className="bg-white flex flex-col overflow-hidden items-stretch px-[60px] py-[22px] max-md:px-5 min-h-screen">
      {/* Navigation */}
      <nav className="relative flex w-full items-start gap-[40px_100px] justify-between mt-10 max-md:max-w-full">
        <button
          onClick={() => window.history.back()}
          className="justify-center items-center z-0 flex min-h-14 gap-3.5 w-14 h-14 bg-neutral-50 my-auto px-3.5 rounded-[58.8px] border-[1.4px] border-solid border-[#E9EAEB] hover:bg-neutral-100 transition-colors"
          aria-label="Go back"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/b8a92db5b046005896ae7bb466a34ae914f94c6c?placeholderIfAbsent=true"
            className="aspect-[0.5] object-contain w-2.5 fill-[#181D27] self-stretch my-auto"
            alt="Back arrow"
          />
        </button>

        {/* ONLY CHANGE: center the title */}
        <h2 className="text-black text-center text-2xl font-medium leading-none absolute z-0 bottom-3 left-1/2 -translate-x-1/2 w-[221px] h-8">
          Body Scan Results
        </h2>
      </nav>

      {/* Body Measurements */}
      <section className="self-center flex w-[454px] max-w-full flex-col items-stretch justify-center mt-[34px]">
        <div className="bg-white w-full overflow-hidden text-black rounded-3xl max-md:max-w-full">
          <div className="flex flex-col relative min-h-[575px] pt-[426px] pb-4 px-4 max-md:max-w-full max-md:pt-[100px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/05f91e6a0b22fdf8ca4629e800677366e4a3cc51?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Body scan visualization"
            />
            <div className="relative bg-white flex flex-col items-stretch justify-center px-4 py-2.5 rounded-xl">
              <div className="min-h-[113px] w-full max-w-[382px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[23px] font-medium leading-none">
                    Body Measurements
                  </h3>
                </div>
                <div className="flex items-center gap-[40px_111px] text-[17px] font-normal text-center leading-normal mt-3">
                  <div className="self-stretch w-[133px] my-auto">
                    <div className="flex items-center gap-1.5">
                      <img
                        src={measurementData[0].icon}
                        className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
                        alt={`${measurementData[0].label} icon`}
                      />
                      <div className="self-stretch my-auto">
                        {measurementData[0].label}: {measurementData[0].value}
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-1.5 mt-1.5">
                      <img
                        src={measurementData[2].icon}
                        className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
                        alt={`${measurementData[2].label} icon`}
                      />
                      <div className="self-stretch my-auto">
                        {measurementData[2].label}: {measurementData[2].value}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-stretch w-[138px] my-auto">
                    <div className="flex w-full items-center gap-1.5">
                      <img
                        src={measurementData[1].icon}
                        className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
                        alt={`${measurementData[1].label} icon`}
                      />
                      <div className="self-stretch my-auto">
                        {measurementData[1].label}: {measurementData[1].value}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <img
                        src={measurementData[3].icon}
                        className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
                        alt={`${measurementData[3].label} icon`}
                      />
                      <div className="self-stretch my-auto">
                        {measurementData[3].label}: {measurementData[3].value}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex w-full items-stretch gap-3 text-base text-center mt-[37px] max-md:max-w-full">
        <button
          onClick={() => {
            setTempMeasurements(measurements);
            setIsDialogOpen(true);
          }}
          className="justify-center items-center border shadow-[0_20.364px_50.909px_0_rgba(64,106,255,0.08)] flex gap-[13px] text-[#8C8C8C] font-normal whitespace-nowrap h-full w-[119px] pt-3 pb-[13px] px-[18px] rounded-[1037.037px] border-solid border-[#8C8C8C] hover:bg-gray-50 transition-colors"
          aria-label="Edit measurements"
        >
          <span className="text-[#8C8C8C] self-stretch my-auto">Edit</span>
        </button>
        <button
          onClick={() => navigate("/catalog")}
          className="justify-center items-center shadow-[0_20.364px_50.909px_0_rgba(64,106,255,0.08)] flex min-w-60 min-h-14 gap-[13px] text-white font-semibold tracking-[-0.2px] leading-none flex-1 shrink basis-[0%] bg-[#9870EA] p-[18px] rounded-[1037.037px] hover:bg-[#8660d8] transition-colors"
          aria-label="Explore clothing catalog"
        >
          <span className="self-stretch my-auto">Explore Catalog</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="flex w-full flex-col items-stretch text-lg text-[#8C8C8C] font-normal mt-[49px] max-md:max-w-full max-md:mt-10">
        <div className="border bg-[#BFBFBF] min-h-px w-full border-[rgba(191,191,191,1)] border-solid max-md:max-w-full" />
        <div className="flex items-center gap-2 mt-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/c54955a6c4519301a4b8410a54e02fa2264fb833?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Copyright icon"
          />
          <div className="self-stretch flex min-w-60 items-center gap-2.5 my-auto">
            <span className="text-[#8C8C8C] self-stretch my-auto">2025</span>
            <span className="text-[#8C8C8C] self-stretch my-auto">
              FitAi,{" "}
              <span style={{ fontSize: "16px", lineHeight: "24px" }}>
                All rights reserved
              </span>
            </span>
          </div>
        </div>
      </footer>

      {/* Edit Dialog */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={handleCancel}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-[425px] p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCancel}
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="mb-4">
              <h2 className="text-lg font-semibold leading-none tracking-tight">
                Edit Body Measurements
              </h2>
            </div>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label
                  htmlFor="height"
                  className="text-sm font-medium leading-none"
                >
                  Height
                </label>
                <input
                  id="height"
                  type="text"
                  value={tempMeasurements.height}
                  onChange={(e) =>
                    setTempMeasurements({
                      ...tempMeasurements,
                      height: e.target.value,
                    })
                  }
                  placeholder="e.g., 5'8''"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="chest"
                  className="text-sm font-medium leading-none"
                >
                  Chest
                </label>
                <input
                  id="chest"
                  type="text"
                  value={tempMeasurements.chest}
                  onChange={(e) =>
                    setTempMeasurements({
                      ...tempMeasurements,
                      chest: e.target.value,
                    })
                  }
                  placeholder="e.g., 28''"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="bust"
                  className="text-sm font-medium leading-none"
                >
                  Bust
                </label>
                <input
                  id="bust"
                  type="text"
                  value={tempMeasurements.bust}
                  onChange={(e) =>
                    setTempMeasurements({
                      ...tempMeasurements,
                      bust: e.target.value,
                    })
                  }
                  placeholder="e.g., 38''"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="hips"
                  className="text-sm font-medium leading-none"
                >
                  Hips
                </label>
                <input
                  id="hips"
                  type="text"
                  value={tempMeasurements.hips}
                  onChange={(e) =>
                    setTempMeasurements({
                      ...tempMeasurements,
                      hips: e.target.value,
                    })
                  }
                  placeholder="e.g., 36''"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancel}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 h-10 px-4 py-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#9870EA] text-white hover:bg-[#8660d8] h-10 px-4 py-2"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
