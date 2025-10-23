import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ImageInput = () => {
  const navigate = useNavigate();
  const [cameraMode, setCameraMode] = useState("front");
  const [files, setFiles] = useState({ front: null, side: null });
  const fileInputRef = useRef(null);

  const selectedFile = files[cameraMode];

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [cameraMode]: file }));
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleNext = () => {
    if (!selectedFile) return;

    const hasFront = !!files.front;
    const hasSide = !!files.side;

    if (hasFront && hasSide) {
      // both uploaded -> go to next step
      navigate("/body-measurement");
      return;
    }

    // one missing -> switch to the missing view
    if (!hasFront) setCameraMode("front");
    else if (!hasSide) setCameraMode("side");
  };

  const handleModeChange = (mode) => {
    setCameraMode(mode);
  };

  const referenceImages = {
    front:
      "https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/71faf797ad251ce74f30f7158c07fdcf3ae69f44?placeholderIfAbsent=true",
    side: "https://cdn.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/143c69127bcebcd14f54c6476a6506a1d83e1030?placeholderIfAbsent=true",
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center px-[40px] py-[12px] max-md:px-5 min-h-screen">
      <nav className="relative flex w-full items-start gap-[40px_100px] justify-between max-md:max-w-full">
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
      </nav>
      <main className="flex flex-col items-center w-full max-w-[343px]">
        <div className="justify-center items-stretch flex flex-col overflow-hidden text-sm text-white font-normal whitespace-nowrap text-center tracking-[-0.2px] leading-none bg-[#DFD3F8] mt-[29px] pl-[3px] pr-0.5 py-[3px] rounded-[1400px]">
          <div className="flex w-full items-center gap-[3px]">
            <button
              onClick={() => handleModeChange("front")}
              className={`justify-center items-center shadow-[0_22.4px_56px_0_rgba(64,106,255,0.08)] self-stretch flex min-h-[50px] gap-3.5 w-28 my-auto px-5 py-[15px] rounded-[1000px] transition-colors ${
                cameraMode === "front"
                  ? "bg-[#9870EA] text-white"
                  : "bg-transparent text-[#9870EA] hover:bg-[#9870EA]/10"
              }`}
            >
              <span className="self-stretch my-auto">Front</span>
            </button>
            <button
              onClick={() => handleModeChange("side")}
              className={`shadow-[0px_22px_56px_rgba(64,106,255,0.08)] self-stretch flex min-h-[50px] items-center gap-3.5 justify-center w-28 my-auto px-5 py-[15px] rounded-[1000px] transition-colors ${
                cameraMode === "side"
                  ? "bg-[#9870EA] text-white"
                  : "bg-transparent text-[#9870EA] hover:bg-[#9870EA]/10"
              }`}
            >
              <span className="self-stretch my-auto">Side</span>
            </button>
          </div>
        </div>

        <section className="flex w-[343px] max-w-full flex-col items-stretch">
          <div className="flex w-full flex-col items-stretch text-lg text-black font-normal text-center leading-[27px] mt-[60px] max-md:mt-10">
            <p className="self-center w-[246px]">
              Match the reference pose and upload your photo.
            </p>
            <img
              src={referenceImages[cameraMode]}
              className="aspect-[0.88] object-contain w-full mt-4 rounded-2xl transition-opacity duration-300"
              alt={`Reference pose for ${cameraMode} view`}
              key={cameraMode}
            />
          </div>

          <form className="flex flex-col items-stretch mt-[71px] max-md:mt-10">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="sr-only"
              id="photo-upload"
            />

            <button
              type="button"
              onClick={handleChooseFile}
              className="bg-gray-50 border flex w-full flex-col items-stretch text-xs text-[#595959] font-normal text-center leading-none justify-center px-2.5 py-[15px] rounded-[198px] border-[rgba(232,235,238,1)] border-solid hover:bg-gray-100 transition-colors"
            >
              <div className="flex w-full items-center gap-2 justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/5105627721363a8bc4f472438b0e125395141e8d?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <span className="text-[#595959] self-stretch my-auto">
                  {selectedFile ? selectedFile.name : "Choose File"}
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!selectedFile}
              className="justify-center items-center shadow-[0_20.364px_50.909px_0_rgba(64,106,255,0.08)] flex w-full gap-[13px] text-base text-white font-semibold whitespace-nowrap text-center tracking-[-0.2px] leading-none bg-[#9870EA] mt-4 px-[18px] py-[15px] rounded-[1037.037px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8A5FE0] transition-colors"
            >
              <span className="self-stretch my-auto">Next</span>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ImageInput;
