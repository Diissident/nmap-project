import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Historique() {
  const [requetes, setRequetes] = useState([]);

  useEffect(() => {

    fetch("/api/historiqueAPI")
      .then((response) => response.json())
      .then((data) => setRequetes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Historique</h1>

        {requetes.length === 0 ? (
          <p>Aucune requête dans l'historique</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-300 text-left">Adresse IP</th>
                <th className="py-2 px-4 bg-gray-300 text-left">Requêtes utilisées</th>
                <th className="py-2 px-4 bg-gray-300 text-left">Ports scannés</th>
              </tr>
            </thead>
            <tbody>
              {requetes.map((requete) => (
                <tr key={requete._id}>
                  <td className="py-2 px-4">{requete.target}</td>
                  <td className="py-2 px-4">{requete.requestType}</td>
                  <td className="py-2 px-4">{requete.portRange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
