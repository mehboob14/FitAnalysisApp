import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function AnalyzingBodyShape() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation("/scan-results");
    }, 3000);
    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-white">
      <div className="px-[60px] py-5">
        <Header />

        <div className="flex flex-col items-center justify-center min-h-[600px] gap-8">
          <div className="w-[274px] h-[273px] flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-[#9870ea] border-t-transparent rounded-full animate-spin" />
          </div>

          <h1 className="font-['Poppins',sans-serif] font-medium text-[33px] text-black text-center">
            AI is Analyzing your body shape
          </h1>

          <div className="flex flex-col items-center gap-2 w-full max-w-md">
            <p className="font-['Poppins',sans-serif] font-medium text-[#9870ea] text-[26px] text-center">
              50%
            </p>
            <div className="w-full bg-[#dfd3f8] h-2 rounded-full">
              <div className="bg-[#9870ea] h-2 rounded-full w-1/2 transition-all duration-300" />
            </div>
          </div>

          <p className="font-['Poppins',sans-serif] text-center text-xl max-w-lg">
            <span className="text-[#757575]">
              AI is Analyzing your body shape you will be{" "}
            </span>
            <span className="text-black">notified</span>
            <span className="text-[#757575]"> by your </span>
            <span className="font-bold text-[#9870ea]">email</span>
            <span className="text-[#757575]"> when it is done</span>
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
