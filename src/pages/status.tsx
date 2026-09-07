import React, { useState } from 'react';
import { Page } from '../app';

interface ReportItem {
  id: string;
  category: string;
  address: string;
  date: string;
  status: 'Pendente' | 'Em andamento' | 'Resolvido';
  icon: string;
  statusColor: string;
}

export const StatusList: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('Todos');

  // Dados fictícios baseados no ecossistema do app em Fortaleza
  const mockReports: ReportItem[] = [
    { id: 'PROT-2026-001', category: 'Iluminação pública', address: 'Av. Beira Mar, 2800 - Meireles', date: '04/09/2026', status: 'Em andamento', icon: '💡', statusColor: 'bg-blue-500 text-blue-100' },
    { id: 'PROT-2026-002', category: 'Buracos na rua', address: 'Rua Ana Bilhar, 1420 - Varjota', date: '01/09/2026', status: 'Resolvido', icon: '⚠️', statusColor: 'bg-emerald-500 text-emerald-100' },
    { id: 'PROT-2026-003', category: 'Lixo e entulho', address: 'Av. Santos Dumont, 3500 - Aldeota', date: '06/09/2026', status: 'Pendente', icon: '♻️', statusColor: 'bg-amber-500 text-amber-900' },
    { id: 'PROT-2026-004', category: 'Vazamento de água', address: 'Rua Desembargador Leite Albuquerque, 88 - Aldeota', date: '28/08/2026', status: 'Resolvido', icon: '💧', statusColor: 'bg-emerald-500 text-emerald-100' }
  ];

  const filteredReports = filter === 'Todos' 
    ? mockReports 
    : mockReports.filter(r => r.status === filter);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-32">

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs">
          <div>
            <h1 className="text-2xl font-black text-slate-800">Painel de Acompanhamento</h1>
            <p className="text-slate-500 text-xs mt-1 font-medium">Gerencie e fiscalize em tempo real a manutenção pública do seu bairro.</p>
          </div>

          {/* Filtros por Status */}
          <div className="flex flex-wrap gap-2">
            {['Todos', 'Pendente', 'Em andamento', 'Resolvido'].map((statusOption) => (
              <button
                key={statusOption}
                onClick={() => setFilter(statusOption)}
                className={`text-xs font-bold px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                  filter === statusOption
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-gray-50 text-slate-600 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {statusOption}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de Listagem */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna Principal da Lista de Chamados */}
          <div className="lg:col-span-2 space-y-4">
            {filteredReports.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-3xl border border-gray-100 shadow-2xs space-y-2">
                <span className="text-3xl block">📭</span>
                <p className="text-sm font-bold text-slate-700">Nenhum chamado encontrado</p>
                <p className="text-xs text-slate-400">Não há ocorrências com o status selecionado.</p>
              </div>
            ) : (
              filteredReports.map((report) => (
                <div key={report.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-xl font-bold rounded-xl flex items-center justify-center shrink-0">
                      {report.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-extrabold text-sm text-slate-800 leading-none">{report.category}</h3>
                        <span className="text-[10px] text-gray-400 font-bold bg-gray-50 border px-1.5 py-0.5 rounded-md">{report.id}</span>
                      </div>
                      <p className="text-xs text-slate-500 font-semibold mt-1 flex items-center gap-1">📍 {report.address}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">Reportado em: {report.date}</p>
                    </div>
                  </div>

                  {/* Badges de Status Lateral */}
                  <div className="flex items-center justify-between w-full sm:w-auto border-t sm:border-none pt-3 sm:pt-0">
                    <span className={`text-[10px] uppercase font-black tracking-wider px-3 py-1.5 rounded-full ${report.statusColor}`}>
                      {report.status}
                    </span>
                    <button className="text-xs font-bold text-orange-500 hover:text-orange-600 sm:ml-4 cursor-pointer">
                      Detalhes →
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Coluna Lateral: Resumo de Desempenho Regional */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs space-y-4">
              <h3 className="font-extrabold text-slate-800 text-sm">Resumo da Regional 🏙️</h3>
              
              <div className="space-y-2 text-xs font-semibold text-slate-600">
                <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl">
                  <span>Tempo médio de atendimento</span>
                  <span className="text-slate-800 font-bold">48 horas</span>
                </div>
                <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl">
                  <span>Bairro com mais atividade</span>
                  <span className="text-orange-600 font-bold">Meireles</span>
                </div>
                <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl">
                  <span>Meta de resolução mensal</span>
                  <span className="text-emerald-600 font-bold">92% concluído</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
