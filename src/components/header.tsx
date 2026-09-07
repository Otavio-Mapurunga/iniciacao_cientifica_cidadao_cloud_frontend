import React, { useState } from 'react';
import { Page } from '../app';

interface HeaderProps {
  currentTab?: Page;
  onNavigate: (page: Page) => void;
  userAvatar?: string; // AJUSTE: Adicionado o "?" para tornar a propriedade opcional
}

export const Header: React.FC<HeaderProps> = ({ 
  currentTab = 'dashboard', 
  onNavigate, 
  userAvatar = 'https://unsplash.com' // Imagem padrão caso venha ausente
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-12 py-5 bg-white border-b border-orange-100/50 sticky top-0 z-50">
      
      {/* Logotipo */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('dashboard')}>
        <div className="w-9 h-9 bg-linear-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center text-white text-lg shadow-md">☁️</div>
        <div>
          <div className="text-slate-800 font-extrabold text-lg leading-none">Cidadão <span className="text-orange-500">Cloud</span></div>
          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5 block">Fortaleza</span>
        </div>
      </div>
      
      {/* Navegação */}
      <nav className="hidden md:flex items-center gap-8 text-gray-600 font-semibold text-sm">
        {['dashboard', 'how-it-works', 'status', 'about', 'contact'].map((tab) => (
          <button 
            key={tab} 
            onClick={() => onNavigate(tab as Page)} 
            className={`cursor-pointer pb-1 transition-colors ${currentTab === tab ? 'text-orange-500 font-bold border-b-2 border-orange-500' : 'hover:text-orange-500'}`}
          >
            {tab === 'dashboard' ? 'Início' : tab === 'how-it-works' ? 'Como funciona' : tab === 'status' ? 'Acompanhe' : tab === 'about' ? 'Sobre' : 'Contato'}
          </button>
        ))}
      </nav>

      {/* Caixa de Perfil com Dropdown */}
      <div className="flex items-center gap-4 relative">
        <button className="w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center text-slate-600 relative cursor-pointer">
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-500 rounded-full"></span>
          🔔
        </button>

        <div 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100 p-1 pr-3 rounded-xl border select-none relative"
        >
          {/* CORREÇÃO: Agora a propriedade bate com o App.tsx */}
          <img src={userAvatar} alt="Avatar" className="w-7 h-7 rounded-lg object-cover" />
          <span className="text-xs font-bold text-slate-700">Olá, Lucas! ▾</span>

          {dropdownOpen && (
            <div className="absolute right-0 top-11 bg-white border border-gray-100 rounded-2xl shadow-xl w-48 py-2 z-50 text-left font-medium text-xs text-slate-700">
              <button 
                onClick={() => onNavigate('about')} 
                className="w-full px-4 py-2.5 hover:bg-orange-50 text-left flex items-center gap-2 cursor-pointer"
              >
                ⚙️ Editar Perfil
              </button>
              <button 
                onClick={() => onNavigate('status')} 
                className="w-full px-4 py-2.5 hover:bg-orange-50 text-left flex items-center gap-2 cursor-pointer"
              >
                ⏳ Minhas Denúncias
              </button>
              <hr className="border-gray-100 my-1" />
              <button 
                onClick={() => { alert('Efetuando Logoff...'); onNavigate('dashboard'); }} 
                className="w-full px-4 py-2.5 hover:bg-red-50 text-red-600 font-bold text-left flex items-center gap-2 cursor-pointer"
              >
                🚪 Sair do Portal
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
