import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ScanResults() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-[60px] py-5">
        <Header />

        <div className="max-w-[1320px] mx-auto mt-8">
          <div className="flex items-center justify-between mb-8 relative">
            <Link href="/">
              <div className="w-14 h-14 flex items-center justify-center cursor-pointer">
                <ArrowLeft className="w-8 h-8" />
              </div>
            </Link>
            <h1 className="font-['Poppins',sans-serif] font-medium text-2xl text-black absolute left-1/2 transform -translate-x-1/2">
              Body Scan Results
            </h1>
          </div>

          <div className="flex flex-col items-center gap-9 mt-16">
            <div className="bg-white rounded-[24px] overflow-hidden w-[454px] h-[575px] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4">
                <h3 className="font-['Poppins',sans-serif] font-medium text-[23px] text-black mb-3">
                  Body Measurements
                </h3>
                <div className="flex gap-28">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-1.5 items-center">
                      <span className="text-[17px]">Height: 5'8"</span>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <span className="text-[17px]">Bust: 38"</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-1.5 items-center">
                      <span className="text-[17px]">Chest: 28"</span>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <span className="text-[17px]">Hips: 36"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 w-[454px]">
              <Link href="/edit-measurements">
                <button className="border border-[#8c8c8c] text-[#8c8c8c] px-7 py-3 rounded-full text-base w-[119px]">
                  Edit
                </button>
              </Link>
              <Link href="/catalog">
                <button className="flex-1 bg-[#9870ea] text-white px-7 py-4 rounded-full text-base font-semibold shadow-[0px_20px_51px_0px_rgba(64,106,255,0.08)]">
                  Explore Catalog
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-32">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
