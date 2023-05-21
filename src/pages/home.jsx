import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
 

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Nmap</h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6 bg-gray-300">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              <span className="font-bold text-xl">Historique</span>
            </h2>
          </div>
          <div className="border-t border-gray-200">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">
                Explication de la page Historique
              </div>
              <div className="mt-1 text-sm font-medium text-gray-900 sm:mt-0 sm:col-span-2">
                <p>Ici, vous pourrez consulter l'historique des requêtes exécutées.</p>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <a
                href="http://localhost:3000/historique"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                Accéder à la page Historique
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6 bg-gray-300">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              <span className="font-bold text-xl">Requêtes</span>
            </h2>
          </div>
          <div className="border-t border-gray-200">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">
                Explication de la page Requêtes
              </div>
              <div className="mt-1 text-sm font-medium text-gray-900 sm:mt-0 sm:col-span-2">
                <p>Ici, vous pourrez en apprendre davantage sur les requêtes.</p>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <a
                href="http://localhost:3000/requests"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                Accéder à la page Requêtes
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6 bg-gray-300">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              <span className="font-bold text-xl">Résultats</span>
            </h2>
          </div>
          <div className="border-t border-gray-200">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">
                Explication de la page Résultats
              </div>
              <div className="mt-1 text-sm font-medium text-gray-900 sm:mt-0 sm:col-span-2">
                <p>Ici, vous pourrez consulter le résultat de la dernière requête exéctuée.</p>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <a
                href="http://localhost:3000/results"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                Accéder à la page Résultats
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

