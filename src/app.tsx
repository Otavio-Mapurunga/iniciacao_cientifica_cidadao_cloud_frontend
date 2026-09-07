import { useState } from 'react';
import { Dashboard } from './pages/dashboard';
import { NewReport } from './pages/new-report';
import { StatusList } from './pages/status';
import { Profile } from './pages/profile';
import { Header } from './components/header';

export type Page = 'dashboard' | 'how-it-works' | 'status' | 'about' | 'contact' | 'new-report';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  // Estado centralizado com a foto do Lucas
  const [userAvatar] = useState('https://unsplash.com');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl max-w-sm w-full text-center space-y-6">
          <div>
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto shadow-md">☁️</div>
            <h1 className="text-xl font-black text-slate-800 mt-4">Acessar Cidadão Cloud</h1>
            <p className="text-xs text-slate-400 mt-1">Conecte-se para fiscalizar e reportar em Fortaleza.</p>
          </div>
          <button 
            onClick={() => { setIsLoggedIn(true); navigateTo('dashboard'); }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer"
          >
            Entrar como Lucas Lima
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* CORREÇÃO: O Header agora é renderizado em TODAS as páginas (exceto no formulário de denúncia) */}
      {currentPage !== 'new-report' && (
        <Header currentTab={currentPage} onNavigate={navigateTo} userAvatar={userAvatar} />
      )}

      {/* RENDERIZAÇÃO DAS TELAS */}
      {currentPage === 'dashboard' && (
        <Dashboard onNavigate={navigateTo} />
      )}
      
      {currentPage === 'new-report' && (
        <NewReport onBack={() => navigateTo('dashboard')} />
      )}

      {currentPage === 'status' && (
        <StatusList onNavigate={navigateTo} />
      )}

      {currentPage === 'about' && (
        <Profile onNavigate={navigateTo} onLogout={() => setIsLoggedIn(false)} />
      )}

      {/* DEMAIS ABAS AUXILIARES */}
      {['how-it-works', 'contact'].includes(currentPage) && (
        <div className="min-h-screen bg-gray-50 pb-32">
          <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {currentPage === 'how-it-works' && (
                  <>
                    <span className="text-orange-600 font-bold text-xs uppercase tracking-wider">Passo a passo</span>
                    <h1 className="text-3xl font-extrabold text-slate-800 leading-tight">Como funciona o Cidadão Cloud?</h1>
                    <p className="text-gray-600 text-sm leading-relaxed">Nossa plataforma conecta você diretamente com as secretarias regionais de Fortaleza. Basta registrar a foto, classificar o problema e nossa tecnologia cuida do envio do protocolo.</p>
                  </>
                )}
                {currentPage === 'contact' && (
                  <>
                    <span className="text-purple-600 font-bold text-xs uppercase tracking-wider">Atendimento</span>
                    <h1 className="text-3xl font-extrabold text-slate-800 leading-tight">Fale Conosco</h1>
                    <p className="text-gray-600 text-sm leading-relaxed">Tem alguma dúvida sobre o aplicativo ou deseja reportar um problema técnico com o sistema?</p>
                  </>
                )}
                <button onClick={() => navigateTo('dashboard')} className="border border-gray-300 text-gray-600 font-bold text-xs py-2.5 px-5 rounded-xl cursor-pointer">
                  ← Voltar para o Início
                </button>
              </div>
              <div className="w-full">
                <img src="https://unsplash.com" alt="Tecnologia" className="w-full h-72 object-cover rounded-2xl shadow-md" />
              </div>
            </div>
          </main>
        </div>
      )}

      {/* BARRA FLUTUANTE GLOBAL */}
      <div className="fixed bottom-6 inset-x-0 mx-auto max-w-xl px-4 z-50 w-full">
        <div className="bg-slate-900/95 backdrop-blur-lg border border-slate-800 p-3 rounded-full shadow-2xl flex flex-row items-center justify-around w-full">
          <button onClick={() => navigateTo('dashboard')} className={`flex flex-col items-center justify-center gap-1 py-1 px-3 cursor-pointer ${currentPage === 'dashboard' ? 'text-orange-400 font-bold' : 'text-gray-400'}`}>
            <span>🏠</span><span className="text-[10px] uppercase font-semibold">Início</span>
          </button>
          <button onClick={() => navigateTo('new-report')} className={`flex flex-col items-center justify-center gap-1 py-1 px-3 cursor-pointer ${currentPage === 'new-report' ? 'text-orange-400 font-bold' : 'text-gray-400'}`}>
            <span>📋</span><span className="text-[10px] uppercase font-medium">Denúncia</span>
          </button>
          <button onClick={() => navigateTo('new-report')} className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-black shadow-lg -mt-8 border-4 border-slate-900 cursor-pointer">＋</button>
          <button onClick={() => navigateTo('status')} className={`flex flex-col items-center justify-center gap-1 py-1 px-3 cursor-pointer ${currentPage === 'status' ? 'text-orange-400 font-bold' : 'text-gray-400'}`}>
            <span>⏳</span><span className="text-[10px] uppercase font-medium">Status</span>
          </button>
          <button onClick={() => navigateTo('about')} className={`flex flex-col items-center justify-center gap-1 py-1 px-3 cursor-pointer ${currentPage === 'about' ? 'text-orange-400 font-bold' : 'text-gray-400'}`}>
            <span>👤</span><span className="text-[10px] uppercase font-medium">Perfil</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
