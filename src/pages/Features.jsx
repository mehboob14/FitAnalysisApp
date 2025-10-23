import React from 'react';

const Features = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-stretch justify-center px-[60px] py-[100px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="self-center flex w-[434px] max-w-full flex-col items-stretch text-center">
          <div className="justify-center items-center self-center flex gap-2.5 text-lg text-[#9870EA] font-normal bg-[#F5F1FD] px-8 py-2.5 rounded-[100px] max-md:px-5">
            <span className="text-[#9870EA] self-stretch my-auto">How it works</span>
          </div>
          <div className="w-full mt-3 max-md:max-w-full">
            <h2 className="text-black text-2xl font-medium leading-none max-md:max-w-full">
              Tech-Driven & Futuristic
            </h2>
            <p className="text-[#8C8C8C] text-base font-normal leading-6 mt-1 max-md:max-w-full">
              Our AI transforms your profile into a digital twin, helping you discover styles that truly fit.
            </p>
          </div>
        </div>
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="flex w-full items-center gap-[-37px] flex-wrap max-md:max-w-full">
              <div className="self-stretch min-w-60 w-[648px] my-auto max-md:max-w-full">
                <div className="justify-center items-center flex w-12 flex-col overflow-hidden h-12 bg-[#F5F1FD] px-[9px] rounded-[1000px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/9ae356b8268060cb0c4184ab9aced0e4eabfac34?placeholderIfAbsent=true"
                    className="aspect-[2.23] object-contain w-full"
                    alt="Height icon"
                  />
                </div>
                <div className="w-full mt-[18px] max-md:max-w-full">
                  <h3 className="text-black text-2xl font-medium leading-none max-md:max-w-full">
                    Share Your Height
                  </h3>
                  <p className="text-[#8C8C8C] text-lg font-normal leading-[27px] mt-2 max-md:max-w-full">
                    Enter your height to give our system a starting point. This small detail helps the AI understand your proportions better and ensures the scan creates an accurate digital model of you.
                  </p>
                </div>
              </div>
              <div className="self-stretch min-w-60 w-[709px] my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[35%] max-md:w-full max-md:ml-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/1bed2352fbe28541a4a768d7617c78cca58a832b?placeholderIfAbsent=true"
                      className="aspect-[0.99] object-contain w-full grow mt-[281px] rounded-[0px_0px_0px_0px] max-md:mt-10"
                      alt="Height measurement interface"
                    />
                  </div>
                  <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/55185e8632ae46aa4f7ccee40c35cade382bed9a?placeholderIfAbsent=true"
                      className="aspect-[0.9] object-contain w-full rounded-[0px_0px_0px_0px] max-md:max-w-full"
                      alt="Height measurement app"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-[40px_72px] justify-between flex-wrap max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/e6b00892b9b46930677731f982cce3ff06c043a8?placeholderIfAbsent=true"
                className="aspect-[1.07] object-contain w-[598px] self-stretch min-w-60 my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full"
                alt="Body scanning interface"
              />
              <div className="self-stretch min-w-60 w-[648px] my-auto max-md:max-w-full">
                <div className="justify-center items-center flex w-12 flex-col overflow-hidden h-12 bg-[#F5F1FD] px-[9px] rounded-[1000px]">
                  <div className="aspect-[1/1] flex min-h-3.5 w-full h-3.5 rounded-[1.257px] border-[2.08px] border-dashed border-[#9870EA]" />
                </div>
                <div className="w-full mt-[17px] max-md:max-w-full">
                  <h3 className="text-black text-2xl font-medium leading-none max-md:max-w-full">
                    Smart Body Scan
                  </h3>
                  <p className="text-[#8C8C8C] text-lg font-normal leading-[27px] mt-2 max-md:max-w-full">
                    Use your camera to capture just one front and side photo in a few moments. Our AI safely analyzes them to build a realistic measurement profile tailored to your unique body shape.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
            <div className="self-stretch min-w-60 w-[648px] my-auto max-md:max-w-full">
              <div className="justify-center items-center flex min-h-12 w-12 flex-col overflow-hidden h-12 bg-[#F5F1FD] px-[9px] rounded-[1000px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/c123342424363cd14ad564dfef86af50b0b3e79b?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-full"
                  alt="Try on icon"
                />
              </div>
              <div className="w-full mt-[18px] max-md:max-w-full">
                <h3 className="text-black text-2xl font-medium leading-none max-md:max-w-full">
                  Discover & Try On
                </h3>
                <p className="text-[#8C8C8C] text-lg font-normal leading-[27px] mt-2 max-md:max-w-full">
                  Select the dresses you wish to try on and preview how these will look and fit on your virtual model. Discover new styles and designers while shopping from top-rated, trusted retailers with solid return policies all in one place.
                </p>
              </div>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/80549ad6d94d49aca0653d71cd6872d9/de4d2dbab334f9902c6e4ed56d515ff93de60f4d?placeholderIfAbsent=true"
              className="aspect-[1.17] object-contain w-[541px] self-stretch min-w-60 my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full"
              alt="Virtual try-on interface"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
