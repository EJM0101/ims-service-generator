type Props = {
  onSelect: (scenario: string) => void;
};

export default function ScenarioSelector({ onSelect }: Props) {
  return (
    <div className="bg-white shadow p-4 rounded max-w-2xl mx-auto mb-4">
      <label className="block mb-2 text-blue-700 font-semibold">Choisir un scénario IMS :</label>
      <select onChange={(e) => onSelect(e.target.value)} className="w-full border rounded p-2">
        <option value="default">-- Sélectionner --</option>
        <option value="teleconsultation">Téléconsultation</option>
        <option value="callcenter">Centre d’appel</option>
        <option value="messagerie">Messagerie sécurisée</option>
      </select>
    </div>
  );
}