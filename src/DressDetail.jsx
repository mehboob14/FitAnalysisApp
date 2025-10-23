import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DressDetail = () => {
  const { dressId, retailer } = useParams();
  const [dress, setDress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const [showFitModal, setShowFitModal] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const [selectedSize, setSelectedSize] = useState("");
  const [height, setHeight] = useState("");
  const [frontImage, setFrontImage] = useState(null);
  const [sideImage, setSideImage] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatRetailer = (name) => {
    const map = {
      net_a_porter: "Net-A-Porter",
      mytheresa: "Mytheresa",
    };
    return map[name] || name;
  };

  const fetchDressDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://4.227.153.254:3000/dress/${dressId}/${retailer}`
      );
      setDress(response.data);
    } catch (error) {
      console.error(error);
      setDress(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dress?.size_guide_popup) {
      const firstItem = Object.values(dress.size_guide_popup)[0];
      if (firstItem && typeof firstItem === "object") {
        setAvailableSizes(Object.keys(firstItem));
      }
    }
  }, [dress]);

  useEffect(() => {
    fetchDressDetail();
  }, [dressId, retailer]);

  const handleRunFitAnalysis = () => {
    if (!selectedSize || !height || !userEmail || !frontImage || !sideImage) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("height", height);
    formData.append("user_size", selectedSize);
    formData.append("email", userEmail);
    formData.append("front_image", frontImage);
    formData.append("side_image", sideImage);

    axios
      .post(
        `http://4.227.153.254:3000/fit-analysis/submit-job/${dressId}/${retailer}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then(() => {
        alert("Fit Analysis Job Submitted!");
        setShowFitModal(false);
        setFrontImage(null);
        setSideImage(null);
        setSelectedSize("");
        setHeight("");
      })
      .catch((err) => {
        console.error(err);
        alert("Error running fit analysis");
      })
      .finally(() => setIsSubmitting(false));
  };

  if (loading)
    return <p className="text-gray-500 text-center mt-10">Loading...</p>;
  if (!dress)
    return <p className="text-gray-500 text-center mt-10">Dress not found.</p>;

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <h1 className="text-3xl font-semibold mb-6">
        {formatRetailer(dress.designer)} - {dress.title}
      </h1>

      {dress.price && (
        <p className="text-lg font-medium mb-4">
          Price: $
          {typeof dress.price === "object" ? dress.price.amount : dress.price}
        </p>
      )}

      {/* Images */}
      <div className="flex overflow-x-auto gap-4 mb-6 py-2">
        {dress.image_urls?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${dress.dress_id}-${idx}`}
            className="w-64 h-80 object-cover rounded-lg shadow-md flex-shrink-0"
          />
        ))}
      </div>

      {/* Dress Info Sections */}
      {dress.editors_notes && (
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Editor Notes</h3>
          <p>{dress.editors_notes}</p>
        </section>
      )}

      {dress.size_fit && (
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Size & Fit</h3>
          <ul className="list-disc list-inside">
            {dress.size_fit.map((size, idx) => (
              <li key={idx}>{size}</li>
            ))}
          </ul>
        </section>
      )}

      {dress.model_measurements && (
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Model Measurements</h3>
          <ul className="list-disc list-inside">
            {dress.model_measurements.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </section>
      )}

      {dress.details_care && (
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Details & Care</h3>
          <ul className="list-disc list-inside">
            {dress.details_care.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        {dress.size_guide_popup && (
          <button
            onClick={() => setShowSizeGuide(true)}
            className="px-4 py-2 bg-white text-black border border-black rounded hover:opacity-80 transition-opacity"
          >
            View Size Guide
          </button>
        )}

        <button
          onClick={() => setShowFitModal(true)}
          className="px-6 py-3 bg-black text-white font-semibold rounded hover:opacity-80 transition-opacity"
        >
          Run Fit Analysis
        </button>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-lg shadow-lg overflow-y-auto max-h-[80vh] border border-black">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Size Guide
            </h2>
            {Object.entries(dress.size_guide_popup).map(([key, value]) => (
              <div key={key} className="mb-4">
                <h4 className="font-semibold mb-2">{key}</h4>
                <table className="min-w-full border border-black">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Size</th>
                      <th className="px-4 py-2 border">Measurement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(value).map(([size, val]) => (
                      <tr key={size}>
                        <td className="px-4 py-2 border">{size}</td>
                        <td className="px-4 py-2 border">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowSizeGuide(false)}
                className="px-4 py-2 bg-white text-black border border-black rounded hover:opacity-80 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fit Analysis Modal */}
      {showFitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-md shadow-lg border border-black">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Fit Analysis
            </h2>

            <label className="block mb-3">
              <span className="block mb-1">Select Size:</span>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 rounded border border-black bg-white text-black"
              >
                <option value="">--Select--</option>
                {availableSizes.map((size, idx) => (
                  <option key={idx} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>

            <label className="block mb-3">
              <span className="block mb-1">Height (in inches):</span>
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 rounded border border-black bg-white text-black"
              />
            </label>

            <label className="block mb-3">
              <span className="block mb-1">Email:</span>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-2 rounded border border-black bg-white text-black"
              />
            </label>

            <label className="block mb-3">
              <span className="block mb-1">Front Image:</span>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFrontImage(e.target.files[0])}
                className="w-full p-1 rounded border border-black bg-white text-black"
              />
            </label>

            <label className="block mb-4">
              <span className="block mb-1">Side Image:</span>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSideImage(e.target.files[0])}
                className="w-full p-1 rounded border border-black bg-white text-black"
              />
            </label>

            <div className="flex justify-end space-x-2">
              <button
                onClick={handleRunFitAnalysis}
                disabled={isSubmitting}
                className={`px-4 py-2 rounded text-white transition-opacity ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:opacity-80"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Run Fit Analysis"}
              </button>
              <button
                onClick={() => setShowFitModal(false)}
                className="px-4 py-2 bg-white text-black border border-black rounded hover:opacity-80 transition-opacity"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DressDetail;
