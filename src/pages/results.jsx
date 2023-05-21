import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function results() {
  const [dernierScan, setDernierScan] = useState(null);

  useEffect(() => {
    fetch("/api/resultsAPI")
      .then((response) => response.json())
      .then((data) => setDernierScan(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Dernier Scan</h1>

        {dernierScan ? (
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-300 text-left">Adresse IP</th>
                <th className="py-2 px-4 bg-gray-300 text-left">Type de requête</th>
                <th className="py-2 px-4 bg-gray-300 text-left">Plage de ports</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">{dernierScan.target}</td>
                <td className="py-2 px-4">{dernierScan.requestType}</td>
                <td className="py-2 px-4">{dernierScan.portRange}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Aucun scan récent disponible</p>
        )}
      </div>
    </div>
  );
}
