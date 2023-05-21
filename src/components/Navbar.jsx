 import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black text-white py-6 px-10">
      <h1 className="text-5xl font-bold text-gray-500">Nmap</h1>
      <ul className="flex text-lg">
        <li className="p-4 hover:text-blue-500">
          <Link href="/home">Accueil</Link>
        </li>
        <li className="p-4 hover:text-blue-500">
          <Link href="/requests">Mes Requêtes</Link>
        </li>
        <li className="p-4 hover:text-blue-500">
          <Link href="/historique">Mon Historique</Link>
        </li>
        <li className="p-4 hover:text-blue-500">
          <Link href="/results">Mes Résultats</Link>
        </li>
      </ul>
    </div>
  );
}

