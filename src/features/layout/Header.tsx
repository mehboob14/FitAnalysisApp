import { Heart, User } from "lucide-react";

interface HeaderProps {
  title?: string;
  favoriteCount?: number;
}

export function Header({ title = "Try This", favoriteCount = 0 }: HeaderProps) {
  return (
    <div className="w-full bg-white shadow-[0px_0px_14.5px_0px_rgba(0,0,0,0.05)] rounded-[100px] px-8 py-4">
      <div className="flex items-center justify-between max-w-[1320px] mx-auto">
        <div className="flex-1">
          <p className="font-medium text-xl text-black text-center">{title}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative border border-[#e9eaeb] p-2 rounded-full">
            <Heart className="w-6 h-6" />
            {favoriteCount > 0 && (
              <div className="absolute -top-0 -right-0 bg-[#e85105] rounded-full w-4 h-4 flex items-center justify-center">
                <span className="text-white text-xs">{favoriteCount}</span>
              </div>
            )}
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
            <User className="w-full h-full p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
