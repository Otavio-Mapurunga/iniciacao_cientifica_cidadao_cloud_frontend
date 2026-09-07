import React, { useState } from 'react';
import { Page } from '../app';

interface ProfileProps {
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ onNavigate, onLogout }) => {
  const [activeSubTab, setActiveSubTab] = useState<'dados' | 'seguranca'>('dados');
  
  // Estados para dados manipuláveis do perfil do usuário
  const [nome, setNome] = useState('Lucas Lima');
  const [email, setEmail] = useState('lucas.lima@email.com');
  const [telefone, setTelefone] = useState('(85) 99876-5432');
  const [endereco, setEndereco] = useState('Av. Beira Mar, 2800 - Meireles, Fortaleza - CE');
  const [avatar, setAvatar] = useState('https://unsplash.com');

  // Estados para troca de senha
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  // Manipular Upload Simulado da Foto de Perfil
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setAvatar(fileReader.result);
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Remove alerta de salvo após 3 segundos
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-32">
      

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        
        {/* Banner Superior do Usuário */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="relative group w-20 h-20">
              <img src={avatar} alt="Foto Perfil" className="w-20 h-20 rounded-2xl object-cover border-2 border-orange-500 shadow-sm" />
              <label className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                Alterar
                <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
              </label>
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-800">{nome}</h1>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">Membro desde: Janeiro de 2026</p>
              <div className="flex gap-2 mt-2 justify-center sm:justify-start">
                <span className="text-[10px] bg-orange-100 text-orange-700 font-bold px-2 py-0.5 rounded-md">Cidadão Ativo</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-md">Fortaleza - CE</span>
              </div>
            </div>
          </div>

          <button 
            onClick={onLogout}
            className="bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs px-4 py-2.5 rounded-xl border border-red-200 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            🚪 Sair do Portal
          </button>
        </div>

        {/* Notificação de Alteração Concluída */}
        {isSaved && (
          <div className="bg-emerald-500 text-white text-xs font-bold p-4 rounded-xl shadow-xs text-center animate-fade-in">
            ✓ Suas alterações foram salvas com sucesso no portal!
          </div>
        )}

        {/* Grade de Configurações */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Menu Lateral de Abas */}
          <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-2xs flex flex-row md:flex-col gap-1 w-full overflow-x-auto">
            <button
              onClick={() => setActiveSubTab('dados')}
              className={`text-left text-xs font-bold px-4 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap w-full ${activeSubTab === 'dados' ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-gray-50'}`}
            >
              👤 Meus Dados e Contato
            </button>
            <button
              onClick={() => setActiveSubTab('seguranca')}
              className={`text-left text-xs font-bold px-4 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap w-full ${activeSubTab === 'seguranca' ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-gray-50'}`}
            >
              🔒 Mudar Senha de Acesso
            </button>
            <button
              onClick={() => onNavigate('status')}
              className="text-left text-xs font-bold px-4 py-3 rounded-xl text-slate-600 hover:bg-gray-50 cursor-pointer whitespace-nowrap w-full"
            >
              ⏳ Minhas Denúncias Open
            </button>
          </div>

          {/* Área Principal de Edição */}
          <div className="md:col-span-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs">
            {activeSubTab === 'dados' ? (
              <form onSubmit={handleSave} className="space-y-4">
                <h3 className="font-extrabold text-sm text-slate-800 border-b pb-2">Informações Cadastrais e Endereço</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 block">Nome Completo</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full border p-2.5 rounded-xl text-xs focus:outline-none focus:border-orange-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 block">Número de Telefone</label>
                    <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="w-full border p-2.5 rounded-xl text-xs focus:outline-none focus:border-orange-500" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">Endereço de E-mail</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2.5 rounded-xl text-xs focus:outline-none focus:border-orange-500" />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">Endereço de Residência Base</label>
                  <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} className="w-full border p-2.5 rounded-xl text-xs focus:outline-none focus:border-orange-500" />
                </div>

                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2.5 px-6 rounded-xl shadow-xs transition-colors cursor-pointer ml-auto block">
                  Salvar Alterações
                </button>
              </form>
            ) : (
              <form onSubmit={handleSave} className="space-y-4">
                <h3 className="font-extrabold text-sm text-slate-800 border-b pb-2">Segurança da Conta</h3>
                
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">Senha Atual</label>
                  <input type="password" placeholder="••••••••" value={senhaAtual} onChange={(e) => setSenhaAtual(e.target.value)} className="w-full border p-2.5 rounded-xl text-xs focus:outline-none focus:border-orange-500" />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">Nova Senha</label>
                  <input type="password" placeholder="Mínimo 6 caracteres" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} className="w-full border p-2.5 rounded-xl text-xs focus:outline-none focus:border-orange-500" />
                </div>

                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2.5 px-6 rounded-xl shadow-xs transition-colors cursor-pointer ml-auto block">
                  Atualizar Senha
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};
