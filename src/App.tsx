import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Resumen de Oficina</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="text-slate-500 text-sm font-medium">Expedientes Activos</h3>
          <p className="text-3xl font-bold mt-2">124</p>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="text-slate-500 text-sm font-medium">Audiencias esta semana</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="text-slate-500 text-sm font-medium">Nuevos Clientes</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;