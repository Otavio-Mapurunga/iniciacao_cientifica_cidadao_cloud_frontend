import React from 'react';
import { Page } from '../app';

export const Dashboard: React.FC<{ onNavigate: (page: Page) => void }> = ({
  onNavigate,
}) => {
  const categories = [
    {
      label: 'Iluminação pública',
      desc: 'Postes com luz queimada ou piscando',
      icon: '💡',
      bg: 'bg-yellow-500/10 text-yellow-600 border-yellow-100',
    },
    {
      label: 'Buracos na rua',
      desc: 'Asfalto danificado ou com crateras',
      icon: '⚠️',
      bg: 'bg-orange-500/10 text-orange-600 border-orange-100',
    },
    {
      label: 'Lixo e entulho',
      desc: 'Descarte irregular em vias públicas',
      icon: '♻️',
      bg: 'bg-emerald-500/10 text-emerald-600 border-emerald-100',
    },
    {
      label: 'Vazamento de água',
      desc: 'Vazamentos em canos ou calçadas',
      icon: '💧',
      bg: 'bg-blue-500/10 text-blue-600 border-blue-100',
    },
    {
      label: 'Outros problemas',
      desc: 'Qualquer outro tipo de ocorrência urbana',
      icon: '⚙️',
      bg: 'bg-purple-500/10 text-purple-600 border-purple-100',
    },
  ];

  const stats = [
    {
      title: '1.245',
      sub: 'Denúncias enviadas',
      icon: '📋',
      bg: 'bg-orange-50',
    },
    {
      title: '892',
      sub: 'Problemas resolvidos',
      icon: '✅',
      bg: 'bg-emerald-50',
    },
    {
      title: '353',
      sub: 'Em andamento',
      icon: '⏳',
      bg: 'bg-blue-50',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-32">
      

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">

        {/* SEÇÃO HERO ASSIMÉTRICA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Banner Principal */}
          <div className="lg:col-span-2 bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-orange-100/50 p-10 rounded-[2.5rem] relative overflow-hidden border border-orange-100/30 flex flex-col justify-between min-h-96">

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-lg z-10">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block">
                Fortaleza mais bonita
              </span>

              <h1 className="text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
                A cidade é nossa.
                <br />
                <span className="text-orange-500">O cuidado também.</span>
              </h1>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Envie problemas da sua cidade e nos ajude a construir uma
                Fortaleza melhor para todos os cidadãos.
              </p>

              <button
                type="button"
                onClick={() => onNavigate('new-report')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-2xl flex items-center gap-3 shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02] cursor-pointer mt-4"
              >
                <span>📷</span>
                Fazer uma denúncia
              </button>
            </div>

            {/* Micro Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 z-10">

              <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-white/60 flex items-center gap-3 shadow-sm">
                <div className="flex -space-x-2">
                  <img
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Cidadão 1"
                  />
                  <img
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=32"
                    alt="Cidadão 2"
                  />
                  <img
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=47"
                    alt="Cidadão 3"
                  />
                </div>

                <p className="text-[11px] font-bold text-slate-700 leading-tight">
                  <span className="text-orange-500">
                    +1.245 denúncias
                  </span>
                  <br />
                  enviadas por cidadãos
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-white/60 flex items-center gap-3 shadow-sm">
                <span className="text-emerald-500 text-lg">🛡️</span>

                <p className="text-[11px] font-bold text-slate-700 leading-tight">
                  <span className="text-emerald-600">Compromisso</span>
                  <br />
                  com Fortaleza
                </p>
              </div>

            </div>
          </div>

          {/* Card Jardim Japonês */}
          <div
            className="bg-cover bg-center rounded-[2.5rem] p-6 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group min-h-96"
            style={{
              backgroundImage: "url('/jardim-japones.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-opacity group-hover:opacity-90" />

            <div className="z-10 bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/10 self-start max-w-xs">
              <p className="font-extrabold text-sm flex items-center gap-1.5">
                📍 JARDIM JAPONÊS
              </p>

              <p className="text-[10px] text-orange-200 font-medium mt-0.5">
                Um dos cartões postais de Fortaleza
              </p>
            </div>

            <div className="z-10 space-y-2">
              <span className="text-2xl block text-orange-400">“</span>

              <p className="text-xs italic font-medium leading-relaxed text-gray-100">
                "Fortaleza é sol, é mar, é alegria. É nossa casa!" 🧡
              </p>
            </div>
          </div>
        </div>

        {/* CATEGORIAS E ESTATÍSTICAS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Categorias */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-extrabold text-slate-800">
              O que você quer reportar?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => onNavigate('new-report')}
                  className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-orange-400 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 flex items-start gap-4 text-left"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 border ${item.bg}`}
                  >
                    {item.icon}
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="font-extrabold text-sm text-slate-800 leading-tight">
                      {item.label}
                    </h3>

                    <p className="text-[11px] text-gray-500 leading-normal font-medium">
                      {item.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Estatísticas */}
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-5 h-fit">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-slate-800 text-sm">
                Fortaleza em números 📈
              </h3>

              <span className="w-2 h-2 bg-orange-500 rounded-full" />
            </div>

            <div className="space-y-3">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className={`p-4 ${stat.bg} rounded-2xl flex items-center justify-between border border-white/40 shadow-sm`}
                >
                  <div>
                    <p className="text-2xl font-black text-slate-800 leading-none">
                      {stat.title}
                    </p>

                    <p className="text-xs text-slate-600 font-semibold mt-1">
                      {stat.sub}
                    </p>
                  </div>

                  <span className="text-xl bg-white w-9 h-9 rounded-xl flex items-center justify-center shadow-sm">
                    {stat.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BANNER CULTURAL */}
        <div className="bg-orange-500 text-white p-6 rounded-[2rem] shadow-lg shadow-orange-500/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-orange-400 w-full mt-12">

          <div className="flex flex-col items-center justify-center p-2">
            <p className="text-xs font-bold tracking-wide">
              ⚽ Ceará & Fortaleza
            </p>

            <p className="text-[10px] text-orange-100 mt-0.5 font-medium">
              Paixão do nosso povo
            </p>
          </div>

          <div className="border-t pt-4 sm:pt-0 sm:border-t-0 sm:border-l border-white/25 flex flex-col items-center justify-center p-2">
            <p className="text-xs font-bold tracking-wide">
              🌴 Beira-Mar
            </p>

            <p className="text-[10px] text-orange-100 mt-0.5 font-medium">
              Nosso cartão postal
            </p>
          </div>

          <div className="border-t pt-4 sm:pt-0 sm:border-t-0 sm:border-l border-white/25 flex flex-col items-center justify-center p-2">
            <p className="text-xs font-bold tracking-wide">
              🍤 Culinária Local
            </p>

            <p className="text-[10px] text-orange-100 mt-0.5 font-medium">
              Sabor que é só nosso
            </p>
          </div>

          <div className="border-t pt-4 sm:pt-0 sm:border-t-0 sm:border-l border-white/25 flex flex-col items-center justify-center p-2">
            <p className="text-xs font-bold tracking-wide">
              🧜‍♀️ Iracema Guardiã
            </p>

            <p className="text-[10px] text-orange-100 mt-0.5 font-medium">
              Nossa lendária protetora
            </p>
          </div>
        </div>
      </main>

</div>
  )
}
