function Companies({ iskustva }) {
  const tvrtke = [...new Set(iskustva.map(i => i.tvrtka))];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Tvrtke</h1>
        <p className="text-blue-100 text-lg">Pregledaj sve tvrtke i njihove ocjene</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">{tvrtke.length} tvrtki pronađeno</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tvrtke.map(tvrtka => {
            const iskustvaTvrtke = iskustva.filter(i => i.tvrtka === tvrtka);
            const prosjecnaOcjena = (iskustvaTvrtke.reduce((sum, i) => sum + Number(i.ocjena), 0) / iskustvaTvrtke.length).toFixed(1);
            return (
              <div key={tvrtka} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-blue-600 mb-4">{tvrtka}</h2>
                <div className="flex justify-between text-sm text-gray-500 border-t pt-3">
                  <span>⭐ Prosječna ocjena: <strong>{prosjecnaOcjena}/5</strong></span>
                  <span>📝 {iskustvaTvrtke.length} iskustava</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Companies;