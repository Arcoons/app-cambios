export default function TablaAlertas({ alertas }) {
  const coloresEstado = {
    Aprobado: "text-green-600 font-semibold",
    Pendiente: "text-yellow-600 font-semibold",
    Rechazado: "text-red-600 font-semibold",
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Equipo</th>
            <th className="px-4 py-3">Servicio</th>
            <th className="px-4 py-3">Dueño</th>
            <th className="px-4 py-3">Socializado</th>
            <th className="px-4 py-3">Localización</th>
            <th className="px-4 py-3">Homologación</th>
            <th className="px-4 py-3">Impacto</th>
            <th className="px-4 py-3">Categoría</th>
            <th className="px-4 py-3">Vencimiento</th>
          </tr>
        </thead>

        <tbody>
          {alertas.length === 0 ? (
            <tr>
              <td colSpan={11} className="px-4 py-6 text-center text-gray-500">
                No hay cambios que coincidan con los filtros.
              </td>
            </tr>
          ) : (
            alertas.map((a) => (
              <tr key={a.id} className="border-b hover:bg-gray-50 text-sm">
                <td className="px-4 py-3 font-semibold text-gray-800">{a.nombre}</td>
                <td className={`px-4 py-3 ${coloresEstado[a.estado]}`}>{a.estado}</td>
                <td className="px-4 py-3">{a.equipo}</td>
                <td className="px-4 py-3">{a.servicio}</td>
                <td className="px-4 py-3">{a.duenio}</td>
                <td className="px-4 py-3">{a.socializado}</td>
                <td className="px-4 py-3">{a.localizacion}</td>
                <td className="px-4 py-3">{a.homologacion}</td>
                <td className="px-4 py-3">{a.impacto}</td>
                <td className="px-4 py-3">{a.categoria}</td>
                <td className="px-4 py-3 font-semibold">{a.fechaVencimiento}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
