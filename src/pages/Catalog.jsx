import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Search, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const products = [
  {
    id: 1,
    brand: "Moncler",
    name: "Cotton-blend piqué mini dress",
    price: "$860",
    colors: ["#e85105", "#9870ea", "#4f2d34"],
  },
  {
    id: 2,
    brand: "Moncler",
    name: "Ribbed wool turtle neck dress",
    price: "$1,190",
    colors: ["#e85105", "#9870ea", "#4f2d34"],
  },
  {
    id: 3,
    brand: "Erdem",
    name: "Floral cotton - blend midi dress",
    price: "$860",
  },
  { id: 4, brand: "Max Mara", name: "Bartolo twillmini dress", price: "$860" },
  {
    id: 5,
    brand: "Moncler",
    name: "Cotton-blend piqué mini dress",
    price: "$860",
  },
  {
    id: 6,
    brand: "Moncler",
    name: "Ribbed wool turtle neck dress",
    price: "$1,190",
  },
  {
    id: 7,
    brand: "Erdem",
    name: "Floral cotton - blend midi dress",
    price: "$860",
  },
  { id: 8, brand: "Max Mara", name: "Bartolo twillmini dress", price: "$860" },
];

export default function Catalog() {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    if (selected.length >= 5 && !selected.includes(id)) {
      return;
    }
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-[60px] py-5">
        <Header favoriteCount={selected.length} />

        <div className="max-w-[1320px] mx-auto mt-8">
          <div className="flex items-center justify-between mb-8">
            <Link href="/scan-results">
              <div className="w-14 h-14 flex items-center justify-center cursor-pointer">
                <ArrowLeft className="w-8 h-8" />
              </div>
            </Link>
            <h1 className="font-['Poppins',sans-serif] font-medium text-2xl text-black absolute left-1/2 transform -translate-x-1/2">
              Catalog
            </h1>
          </div>

          <div className="flex gap-6 items-center mb-10">
            <div className="flex-1 bg-white border border-[#e9eaeb] rounded-full px-[17px] py-[14px] flex items-center gap-2">
              <Search className="w-4 h-4 text-[#8c8c8c]" />
              <input
                type="text"
                placeholder="Search here..."
                className="flex-1 outline-none text-sm text-[#8c8c8c]"
              />
            </div>
            <button className="border border-[#e9eaeb] rounded-full px-[14px] py-[14px] flex items-center gap-3 text-sm">
              Price
              <ChevronDown className="w-3 h-3 rotate-90" />
            </button>
            <button className="border border-[#e9eaeb] rounded-full px-[13px] py-[14px] flex items-center gap-3 text-sm">
              Designer
              <ChevronDown className="w-3 h-3 rotate-90" />
            </button>
          </div>

          <h2 className="font-['Poppins',sans-serif] font-medium text-[32px] text-black text-center mb-10">
            Select Five Dresses
          </h2>

          <div className="grid grid-cols-4 gap-6 mb-10">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col gap-[11px]">
                <div
                  className={`bg-[#eae9e5] rounded-[22px] px-12 py-6 cursor-pointer relative ${
                    selected.includes(product.id)
                      ? "border-2 border-[#9870ea]"
                      : ""
                  }`}
                  onClick={() => toggleSelect(product.id)}
                >
                  <div className="h-[287px]" />
                  {selected.includes(product.id) && (
                    <div className="absolute top-4 right-4 w-5 h-5 text-[#9870ea]">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-['Poppins',sans-serif] text-[#e85105] text-xl">
                    {product.brand}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-black text-xl">
                    {product.name}
                  </p>
                  {product.colors && (
                    <div className="flex gap-2 items-center">
                      <span className="font-['Poppins',sans-serif] font-medium text-[#595959] text-lg">
                        Colors:
                      </span>
                      <div className="flex gap-1">
                        {product.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-3.5 h-3.5 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <p className="font-['Poppins',sans-serif] font-medium text-[#595959] text-2xl">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {selected.length === 5 && (
            <div className="flex justify-center mb-10">
              <Link href="/outfit-results">
                <button className="bg-[#9870ea] text-white px-7 py-4 rounded-full text-base font-semibold shadow-[0px_20px_51px_0px_rgba(64,106,255,0.08)] w-[300px]">
                  Try On Selected Dresses
                </button>
              </Link>
            </div>
          )}

          <div className="mt-32">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
