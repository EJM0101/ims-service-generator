export default function ComponentPalette() {
  const components = ['UE', 'P-CSCF', 'I-CSCF', 'S-CSCF', 'HSS', 'AS'];

  return (
    <div className="bg-white shadow p-4 rounded w-full md:w-64">
      <h2 className="text-lg font-semibold text-blue-700 mb-2">Composants IMS</h2>
      <ul className="space-y-2">
        {components.map((comp) => (
          <li key={comp} className="p-2 bg-gray-100 text-center rounded hover:bg-blue-50 cursor-default">{comp}</li>
        ))}
      </ul>
    </div>
  );
}