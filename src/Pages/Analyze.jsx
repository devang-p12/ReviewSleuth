import { useState } from "react";

export default function Analyze() {
  const [review, setReview] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = async () => {
    // Mocked response for now — replace with actual API call later
    if (!review.trim()) {
      setResult("Please enter a review first.");
      return;
    }

    // Simulate sentiment prediction
    const isPositive = review.toLowerCase().includes("good");
    setResult(isPositive ? "✅ Positive Sentiment" : "❌ Negative Sentiment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Sentiment Analyzer</h2>

        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Paste or write your product review here..."
          className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
        ></textarea>

        <button
          onClick={handleAnalyze}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Analyze Review
        </button>

        {result && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-50 text-lg text-center font-medium text-gray-800">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
