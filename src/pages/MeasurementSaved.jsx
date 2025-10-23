import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function MeasurementsSaved() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation("/catalog");
    }, 2000);
    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-white">
      <div className="px-[60px] py-5">
        <Header />

        <div className="flex flex-col items-center justify-center min-h-[600px]">
          <CheckCircle2 className="w-[329px] h-[329px] text-green-500 mb-5" />
          <h1 className="font-['Poppins',sans-serif] text-[39px] text-black">
            Measurements Saved
          </h1>
        </div>

        <Footer />
      </div>
    </div>
  );
}
