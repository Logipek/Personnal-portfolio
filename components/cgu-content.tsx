import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-gray-600 mb-4">
          Bienvenue sur mon portfolio. En accédant et en utilisant ce site, vous
          acceptez les termes et conditions décrits ci-dessous. Veuillez lire
          attentivement ces CGU avant de naviguer sur le site.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          1. Propriété intellectuelle
        </h2>
        <p className="text-gray-600 mb-4">
          Tous les contenus présents sur ce site, incluant, mais sans s&apos;y
          limiter, les textes, images, designs, logos et codes, sont protégés
          par les lois relatives à la propriété intellectuelle et sont la
          propriété exclusive de{" "}
          <span className="font-medium">[Votre Nom ou Entité]</span>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          2. Utilisation du site
        </h2>
        <p className="text-gray-600 mb-4">
          Ce site est destiné à présenter mes compétences, projets et services.
          Toute utilisation abusive, telle que le téléchargement non autorisé de
          contenu, la reproduction ou la redistribution, est strictement
          interdite.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          3. Liens externes
        </h2>
        <p className="text-gray-600 mb-4">
          Mon portfolio peut contenir des liens vers des sites externes. Je ne
          suis pas responsable du contenu ou des pratiques de ces sites tiers.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          4. Limitation de responsabilité
        </h2>
        <p className="text-gray-600 mb-4">
          Je ne saurais être tenu responsable des dommages directs ou indirects
          résultant de l&apos;utilisation de ce site ou de son contenu. Vous
          naviguez et utilisez ce site à vos propres risques.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          5. Protection des données personnelles
        </h2>
        <p className="text-gray-600 mb-4">
          Aucune donnée personnelle n&apos;est collectée via ce site sans votre
          consentement explicite. Pour toute information, veuillez consulter ma{" "}
          <Link href="/pc">
            <span className="text-blue-600 hover:underline">
              politique de confidentialité
            </span>
          </Link>
          .
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          6. Modification des CGU
        </h2>
        <p className="text-gray-600 mb-4">
          Je me réserve le droit de modifier ces conditions à tout moment. Les
          mises à jour seront publiées sur cette page, et il est de votre
          responsabilité de les consulter régulièrement.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          7. Contact
        </h2>
        <p className="text-gray-600 mb-4">
          Pour toute question ou réclamation concernant ces CGU, vous pouvez me
          contacter à l&apos;adresse suivante :{" "}
          <span className="font-medium text-gray-800">hugoguttr@gmail.com</span>
          .
        </p>

        <p className="text-gray-600 text-sm mt-8">
          Dernière mise à jour : Dim 24 novembre 2024.
        </p>
      </div>
    </div>
  );
}
