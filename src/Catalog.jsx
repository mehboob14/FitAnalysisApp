import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const [dresses, setDresses] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(20);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchDresses = async (skipValue) => {
    setLoading(true);
    try {
      const response = axios.get("/api/catalog", { params: { skip: skipValue, limit } });
      setDresses(response.data.data);
    } catch (error) {
      console.error(error);
      setDresses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDresses(skip);
  }, [skip]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dress Catalog</h1>

      {loading && <p className="text-gray-500">Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dresses.map((dress) => (
          <div
            key={dress.dress_id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => navigate(`/dress/${dress.dress_id}/${dress.retailer}`)}
          >
            {dress.image_urls?.length > 0 && (
              <img
                src={dress.image_urls[0]}
                alt={dress.dress_id}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">{dress.retailer}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {dress.editors_notes?.substring(0, 60)}...
              </p>
            </div>
          </div>
        ))}
      </div>

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
