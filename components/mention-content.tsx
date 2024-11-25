import Link from "next/link";

export default function LegalNotice() {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Mentions Légales
        </h1>
        <p className="text-gray-600 mb-4">
          Conformément aux dispositions des articles 6-III et 19 de la Loi pour
          la Confiance dans l&apos;Économie Numérique (LCEN), voici les mentions
          légales de ce site.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          1. Éditeur du site
        </h2>
        <p className="text-gray-600 mb-4">
          Nom : <span className="font-medium">Damion</span>
          <br />
          Adresse : <span className="font-medium">Orléans / France</span>
          <br />
          Email : <span className="font-medium">hugoguttr@gmail.com</span>
          <br />
          Téléphone : <span className="font-medium">0652578307</span>
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          2. Hébergement
        </h2>
        <p className="text-gray-600 mb-4">
          Hébergeur : <span className="font-medium">Vercel</span>
          <br />
          Téléphone :{" "}
          <span className="font-medium">https://vercel.com/contact</span>
          <br />
          Site web :{" https://vercel.com/ "}
          <a
            href="https://vercel.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            [Lien vers l’hébergeur]
          </a>
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          3. Propriété intellectuelle
        </h2>
        <p className="text-gray-600 mb-4">
          Tous les contenus (textes, images, vidéos, graphismes, logos, icônes,
          etc.) présents sur ce site sont protégés par les lois françaises et
          internationales relatives à la propriété intellectuelle.
        </p>
        <p className="text-gray-600 mb-4">
          Toute reproduction, distribution ou utilisation des contenus, même
          partielle, est strictement interdite sans l&apos;autorisation écrite
          de l’éditeur du site.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          4. Données personnelles
        </h2>
        <p className="text-gray-600 mb-4">
          Ce site ne collecte pas de données personnelles sans votre
          consentement explicite. Pour plus d&apos;informations, veuillez
          consulter notre{" "}
          <a href="/pc" className="text-blue-600 hover:underline">
            politique de confidentialité
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          5. Responsabilité
        </h2>
        <p className="text-gray-600 mb-4">
          L’éditeur du site s’efforce de fournir des informations précises et
          mises à jour. Cependant, il ne saurait être tenu responsable des
          erreurs ou omissions, ou des résultats obtenus suite à
          l&apos;utilisation de ces informations.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          6. Contact
        </h2>
        <p className="text-gray-600 mb-4">
          Pour toute question concernant ces mentions légales, vous pouvez
          contacter l’éditeur via email à l’adresse suivante :{" "}
          <span className="font-medium">hugoguttr@gmail.com</span>.
        </p>

        <p className="text-gray-600 text-sm mt-8">
          Dernière mise à jour : Dim 24 novembre 2024.
        </p>
      </div>
    </div>
  );
}
