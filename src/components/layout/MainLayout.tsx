import { Home, FolderOpen, Users, Calendar, Search } from 'lucide-react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Lateral */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-5 text-xl font-bold border-b border-slate-800 tracking-wide">
          ABODATOS
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 p-2 rounded-lg bg-blue-600/10 text-blue-400 font-medium"><Home size={20}/> Dashboard</a>
          <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 transition"><FolderOpen size={20}/> Expedientes</a>
          <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 transition"><Users size={20}/> Clientes</a>
          <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 transition"><Calendar size={20}/> Agenda</a>
        </nav>
      </aside>

      {/* Contenedor Principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar Superior */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 shrink-0">
          <button className="flex items-center gap-3 text-slate-400 bg-gray-100 px-4 py-2 rounded-lg w-96 hover:bg-gray-200 transition text-sm">
            <Search size={18} />
            <span>Buscar expedientes o clientes (Ctrl+K)</span>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-700">Usuario Activo</span>
            <div className="w-9 h-9 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold">
              C
            </div>
          </div>
        </header>

        {/* Área de Contenido Dinámico */}
        <div className="p-6 flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}