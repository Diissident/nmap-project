import Navbar from "@/components/Navbar";
import { React, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function FormPage() {
  const [target, setTarget] = useState("");
  const [requestType, setRequestType] = useState("");
  const [portRange, setPortRange] = useState("");
  const [maxRetries, setmaxRetries] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!target || !requestType) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }
    // Valider le port de fin est supérieur au port de début
    if (portRange[0] > portRange[1]) {
      alert("Le port de début ne peut pas être supérieur au port de fin.");
      return;
    }
    try {
      // Envoi des données du formulaire à l'API queryAPI, non fonctionnel ???
      await axios.post("/api/queryAPI", {
        target,
        requestType,
        portRange,
        maxRetries,
      });

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Formulaire Nmap</h1>

        <form
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="target"
            >
              Cible <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="target"
              type="text"
              placeholder="Entrez la cible"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="requestType"
            >
              Type de requête <span className="text-red-500">*</span>
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="requestType"
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              required
            >
              <option value="">Sélectionnez le type de requête</option>
              <option value="-sS">Scan TCP SYN</option>
              <option value="-sU">Scan UDP</option>
              <option value="-sV">Scan de versions</option>
            </select>
          </div>

          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Rangée de ports à scanner
  </label>
  <div className="flex">
    <input
      className="shadow appearance-none border rounded-l w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="portStart"
      type="number"
      placeholder="Port de départ"
      value={portRange[0]}
      onChange={(e) => setPortRange([Number(e.target.value), portRange[1]])}
    />
    <input
      className="shadow appearance-none border rounded-r w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="portEnd"
      type="number"
      placeholder="Port de fin"
      value={portRange[1]}
      onChange={(e) => setPortRange([portRange[0], Number(e.target.value)])}
    />
  </div>
</div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="maxRetries"
            >
              Nombre d'essais maximum de la requête
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="maxRetries"
              type="text"
              placeholder="Entrez le nombre d'essais maximum"
              value={maxRetries}
              onChange={(e) => setmaxRetries(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
