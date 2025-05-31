import { useState } from 'react';
import IMSCanvas from '../components/IMSCanvas';
import ComponentPalette from '../components/ComponentPalette';
import ScenarioSelector from '../components/ScenarioSelector';
import Explanations from '../components/Explanations';

export default function Home() {
  const [scenario, setScenario] = useState<string>('default');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">Générateur de Services IMS</h1>
      <p className="text-center text-gray-600 mb-6">Créez des scénarios IMS avec des composants réseau sécurisés</p>
      <ScenarioSelector onSelect={setScenario} />
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <ComponentPalette />
        <IMSCanvas scenario={scenario} />
      </div>
      <Explanations />
    </div>
  );
}