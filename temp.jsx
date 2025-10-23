import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Catalog = () => {
  const [dresses, setDresses] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(20);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedDesigners, setSelectedDesigners] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  const navigate = useNavigate();
  const [retailer, setRetailer] = useState("net_a_porter");

  const [availableColors, setAvailableColors] = useState([]);
  const [availableDesigners, setAvailableDesigners] = useState([]);

  const filterRef = useRef(null);

  const fetchDresses = useCallback(async () => {
    setLoading(true);

    try {
      const query = new URLSearchParams();
      selectedDesigners.forEach((d) =>
        query.append("designer", d.trim().toLowerCase())
      );
      selectedColors.forEach((c) => query.append("color", c));
      query.append("min_price", priceRange.min);
      query.append("max_price", priceRange.max);
      query.append("retailer", retailer);
      query.append("skip", skip); // <--- include skip
      query.append("limit", limit); // optional, if backend supports limit
      query.append("_t", Date.now());

      if (retailer === "mytheresa") {
        setDress({ title: "Coming Soon", retailer }); // just show a placeholder
        return; // skip API call
      }
      const response = await axios.get(
        `http://4.227.153.254:3000/dresses?${query.toString()}`
      );

      const normalizedDresses = response.data.data.map((d) => ({
        ...d,
        price: d.price?.amount ?? 0,
      }));

      setDresses(normalizedDresses);
    } catch (error) {
      console.error(error);
      setDresses([]);
    } finally {
      setLoading(false);
    }
  }, [selectedDesigners, selectedColors, priceRange, retailer, skip, limit]);

  useEffect(() => {
    fetchDresses();
  }, [fetchDresses, skip]);

  useEffect(() => {
    setSkip(0);
  }, [selectedDesigners, selectedColors, priceRange, retailer]);

  const searchDresses = async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `http://4.227.153.254:3000/dresses/search?keyword=${encodeURIComponent(
          searchQuery
        )}&retailer=${retailer}&_t=${Date.now()}`
      );

      const normalized = response.data.data.map((d) => ({
        ...d,
        price: d.price?.amount ?? 0,
      }));
      setDresses(normalized);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await axios.get(
          `http://4.227.153.254:3000/catalog_filters?retailer=${retailer}&_t=${Date.now()}`
        );

        setAvailableColors(response.data.colors || []);
        setAvailableDesigners(response.data.designers || []);
      } catch (err) {
        console.error("Error fetching filters", err);
      }
    };

    fetchFilters();
  }, [retailer]);

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleDesigner = (designer) => {
    setSelectedDesigners((prev) =>
      prev.includes(designer)
        ? prev.filter((d) => d !== designer)
        : [...prev, designer]
    );
  };

  return (
    <div className="bg-white min-h-screen px-4 md:px-6 py-6">
      <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-6 items-start md:items-center">
        <div className="relative w-full md:w-[80%]">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") searchDresses();
            }}
            className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button
            onClick={searchDresses}
            className="absolute right-3 top-2 text-gray-500 hover:text-black"
          >
            <FaSearch />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-[60%] items-center">
          {["price", "designer"].map((filter) => (
            <div key={filter} className="relative flex-1 min-w-[120px]">
              <button
                className="w-full px-3 py-2 border rounded-lg text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() =>
                  setActiveFilter(activeFilter === filter ? null : filter)
                }
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>

              {activeFilter === filter && (
                <div
                  ref={filterRef}
                  className="absolute top-full left-0 mt-2 w-full max-w-[280px] bg-white border rounded-lg shadow-lg p-4 z-10"
                >
                  {filter === "price" && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={priceRange.min}
                          onChange={(e) =>
                            setPriceRange({
                              ...priceRange,
                              min: Number(e.target.value),
                            })
                          }
                          className="w-20 border rounded px-2 py-1"
                          placeholder="Min"
                        />
                        <input
                          type="number"
                          value={priceRange.max}
                          onChange={(e) =>
                            setPriceRange({
                              ...priceRange,
                              max: Number(e.target.value),
                            })
                          }
                          className="w-20 border rounded px-2 py-1"
                          placeholder="Max"
                        />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange({
                            ...priceRange,
                            max: Number(e.target.value),
                          })
                        }
                        className="w-full"
                      />
                      <span className="text-sm text-gray-600">
                        ${priceRange.min} - ${priceRange.max}
                      </span>
                    </div>
                  )}

                  {filter === "color" && (
                    <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
                      {availableColors.map((color) => (
                        <label
                          key={color}
                          className="flex items-center gap-2 p-1 rounded hover:bg-gray-50"
                        >
                          <input
                            type="checkbox"
                            checked={selectedColors.includes(color)}
                            onChange={() => toggleColor(color)}
                            className="cursor-pointer"
                          />
                          <span className="capitalize">{color}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {filter === "designer" && (
                    <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
                      {availableDesigners.map((designer) => (
                        <label
                          key={designer}
                          className="flex items-center gap-2 p-1 rounded hover:bg-gray-50"
                        >
                          <input
                            type="checkbox"
                            checked={selectedDesigners.includes(designer)}
                            onChange={() => toggleDesigner(designer)}
                            className="cursor-pointer"
                          />
                          <span className="capitalize">{designer}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <select
            value={retailer}
            onChange={(e) => setRetailer(e.target.value)}
            className="border px-3 py-2 rounded-md min-w-[130px]"
          >
            <option value="net_a_porter">Net-A-Porter</option>
            <option value="mytheresa">Mytheresa</option>
          </select>
        </div>
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}

      {retailer === "mytheresa" ? (
        <div className="text-center text-gray-500 py-20 text-lg">
          Mytheresa catalog - Coming Soon
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dresses.map((dress) => (
            <div
              key={dress.dress_id}
              className="flex flex-col items-start cursor-pointer"
              onClick={() =>
                navigate(`/dress/${dress.dress_id}/${dress.retailer}`)
              }
            >
              {dress.image_urls?.length > 0 && (
                <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src={dress.image_urls[0]}
                    alt={dress.dress_id}
                    className="object-contain rounded-lg max-h-72"
                  />
                </div>
              )}
              <p className="mt-2 text-sm text-red-500 font-medium truncate w-full">
                {dress.designer}
              </p>
              <p className="mt-2 text-gray-700 text-sm truncate w-full">
                {dress.title}
              </p>
              <p className="mt-2 text-gray-900 font-semibold w-full truncate">
                ${dress.price}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setSkip(Math.max(0, skip - limit))}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
        >
          Previous
        </button>
        <button
          onClick={() => setSkip(skip + limit)}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Catalog;
