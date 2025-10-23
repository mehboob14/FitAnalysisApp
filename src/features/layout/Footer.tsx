import { Copyright } from "lucide-react";

export function Footer() {
  return (
    <div className="w-full border-t border-[#e9eaeb] pt-6">
      <div className="flex gap-2 items-center text-[#8c8c8c]">
        <Copyright className="w-6 h-6" />
        <div className="flex gap-2.5 items-center font-['Poppins',sans-serif]">
          <p className="text-lg">2025</p>
          <p>
            <span className="text-lg">FitAi, </span>
            <span className="text-base">All rights reserved</span>
          </p>
        </div>
      </div>
    </div>
  );
}
