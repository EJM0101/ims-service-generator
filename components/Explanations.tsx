export default function Explanations() {
  return (
    <div className="max-w-4xl mx-auto bg-white mt-8 p-4 rounded shadow text-sm text-gray-700">
      <h2 className="text-lg font-semibold text-blue-700 mb-2">📚 Explication pédagogique IMS</h2>
      <p><strong>IMS</strong> est une architecture permettant de fournir des services multimédias sur IP, tels que la voix, la vidéo et la messagerie.</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li><strong>P-CSCF</strong> : Point d'entrée sécurisé du terminal</li>
        <li><strong>I-CSCF</strong> : Route vers le bon serveur S-CSCF</li>
        <li><strong>S-CSCF</strong> : Cœur de la logique d’appel</li>
        <li><strong>HSS</strong> : Base d’abonnés, authentification</li>
        <li><strong>AS</strong> : Serveur d’application (messagerie, conférence…)</li>
        <li><strong>UE</strong> : Terminal utilisateur (mobile ou WebRTC)</li>
      </ul>
      <p className="mt-2">Sécurisation : IPsec / TLS pour la signalisation, SRTP pour la voix, IMS AKA pour l’authentification.</p>
    </div>
  );
}