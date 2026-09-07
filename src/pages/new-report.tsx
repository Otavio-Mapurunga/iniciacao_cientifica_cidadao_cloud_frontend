import React from 'react';

export const NewReport: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header Simplificado com Botão Voltar */}
      <div className="bg-white px-8 py-4 border-b flex items-center gap-4">
        <button onClick={onBack} className="text-gray-600 hover:text-orange-500 font-bold text-lg">← Voltar</button>
        <h1 className="text-xl font-bold text-gray-800">Nova denúncia</h1>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulário Principal */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Passo 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
              <h2 className="font-bold text-gray-800">Envie uma foto do problema</h2>
            </div>
            <p className="text-xs text-gray-500">A foto é muito importante para que o órgão responsável entenda a situação.</p>
            
            {/* Box Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center space-y-4 bg-gray-50 hover:bg-orange-50/50 transition">
              <span className="text-3xl block">📷</span>
              <p className="text-xs font-semibold text-gray-600">Tire a foto agora com sua câmera ou selecione da galeria</p>
              <div className="flex gap-4 justify-center">
                <button type="button" className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg text-xs hover:bg-orange-600 transition">📷 Abrir câmera</button>
                <button type="button" className="bg-white border text-gray-700 font-bold py-2 px-4 rounded-lg text-xs hover:bg-gray-100 transition">📁 Galeria</button>
              </div>
              <p className="text-[10px] text-gray-400">Formatos aceitos: JPG, JPEG, PNG • Tamanho máximo: 10MB</p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
              <h2 className="font-bold text-gray-800">Informe a localização exata</h2>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 block">Digite o endereço ou ponto de referência</label>
              <div className="relative">
                <input type="text" placeholder="Ex: Av. Beira Mar, 2800 - Meireles, Fortaleza - CE" className="w-full border p-3 rounded-xl text-xs pr-10 focus:outline-none focus:border-orange-500" />
                <span className="absolute right-3 top-3.5 cursor-pointer text-gray-400 hover:text-orange-500">🎯</span>
              </div>
            </div>

            {/* Placeholder para Mapa Interativo */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 block">Marque no mapa (opcional)</label>
              <div className="bg-slate-200 h-48 rounded-xl relative flex items-center justify-center overflow-hidden border">
                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('https://unsplash.com')` }}></div>
                <div className="absolute z-10 bg-orange-500 p-2 rounded-full text-white shadow-lg text-lg animate-bounce">📍</div>
                <span className="absolute bottom-2 left-2 z-10 bg-white/80 text-[10px] px-2 py-0.5 rounded font-medium text-gray-600">Arraste o marcador para ajustar</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barra Lateral de Dicas e Instruções */}
        <div className="space-y-6">
          <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200 space-y-4">
            <h3 className="font-bold text-amber-800 text-xs flex items-center gap-2">💡 Dicas importantes</h3>
            <ul className="text-[11px] text-amber-900 space-y-2 list-disc list-inside">
              <li>Tire a foto durante o dia, sempre que possível.</li>
              <li>Mostre o problem de perto e também o ambiente ao redor.</li>
              <li>A imagem deve ser clara e sem objetos obstruindo.</li>
            </ul>
          </div>
        </div>

      </main>

      {/* Botão de Envio Fixo na Base */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t p-4 flex justify-center z-50">
        <button type="button" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-xl text-sm shadow-md transition w-full max-w-md">
          Enviar denúncia
        </button>
      </div>
    </div>
  )
}