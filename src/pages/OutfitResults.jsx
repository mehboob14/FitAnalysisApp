import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function OutfitResults() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-[60px] py-5">
        <Header />

        <div className="max-w-[1320px] mx-auto mt-8">
          <Link href="/catalog">
            <div className="flex gap-2 items-center cursor-pointer mb-8">
              <div className="w-14 h-14 flex items-center justify-center">
                <ArrowLeft className="w-8 h-8" />
              </div>
              <p className="font-['Poppins',sans-serif] font-medium text-base text-[#595959]">
                Back to Outfit Results
              </p>
            </div>
          </Link>

          <div className="flex gap-8 items-start">
            <div className="bg-white border border-[#e9eaeb] rounded-[32px] w-[615px] h-[698px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-400">Try-on visualization</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-10">
              <div className="bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-[27px] p-[18px]">
                <h3 className="font-['Poppins',sans-serif] font-medium text-2xl text-black mb-6">
                  Outfit Analysis
                </h3>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins',sans-serif] font-medium text-xl text-[#8c8c8c]">
                      Not Fit
                    </span>
                    <div className="flex items-center justify-between w-[354px]">
                      <span className="font-['Poppins',sans-serif] font-medium text-[27px] text-[#9870ea]">
                        50%
                      </span>
                      <span className="font-['Poppins',sans-serif] font-medium text-xl text-[#8c8c8c]">
                        Fit to size
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#dfd3f8] h-[19px] rounded-full w-full">
                    <div className="bg-[#9870ea] h-[19px] rounded-full w-1/2" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-['Poppins',sans-serif] font-medium text-xl text-black mb-3">
                  Fabric Details:
                </h4>
                <p className="font-['Poppins',sans-serif] text-lg text-[#595959] leading-relaxed">
                  Moncler's midi dress is such a warm and sophisticated option
                  for winter. Rib-knitted from mélange wool, it has a turtleneck
                  collar and leather logo appliqué on the sleeve. Style yours
                  with chunky combat or knee boots.
                </p>
              </div>

              <div>
                <h4 className="font-['Poppins',sans-serif] font-medium text-xl text-black mb-3">
                  Available at:
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-[23px] p-6 flex items-center justify-between">
                    <div className="flex gap-6 items-center">
                      <div className="bg-[#f2f2f2] rounded-[11px] px-[2px] py-5 w-[76px]">
                        <div className="text-center text-sm">NET-A-PORTER</div>
                      </div>
                      <p className="font-['Poppins',sans-serif] font-medium text-2xl text-black">
                        Net-A-Porter
                      </p>
                    </div>
                    <button className="bg-[#9870ea] text-white px-6 py-4 rounded-full text-xs shadow-[0px_-11px_21px_0px_rgba(0,0,0,0.08)]">
                      Shop Now
                    </button>
                  </div>

                  <div className="h-px bg-[#e9eaeb]" />

                  <div className="bg-white rounded-[23px] p-6 flex items-center justify-between">
                    <div className="flex gap-6 items-center">
                      <div className="bg-[#f2f2f2] rounded-[11px] px-[6px] py-[34px] w-[76px]">
                        <div className="text-center text-xs">MYTHERESA</div>
                      </div>
                      <p className="font-['Poppins',sans-serif] font-medium text-2xl text-black">
                        Mythressa
                      </p>
                    </div>
                    <button className="bg-[#9870ea] text-white px-6 py-4 rounded-full text-xs shadow-[0px_-11px_21px_0px_rgba(0,0,0,0.08)]">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-40">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
