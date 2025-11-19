export default function AlertaCard({ alerta }) {
  const colores = {
    Aprobado: "border-green-400",
    Pendiente: "border-yellow-400",
    Rechazado: "border-red-400",
  };

  return (
    <div className={`border-l-4 ${colores[alerta.estado]} border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition`}>
      
      <h2 className="text-xl font-bold text-gray-800">{alerta.nombre}</h2>
      <p className="text-sm text-gray-600 italic mb-2">{alerta.descripcion}</p>

      <p className="text-sm text-gray-600">Equipo: {alerta.equipo}</p>
      <p className="text-sm text-gray-600">Servicio: {alerta.servicio}</p>
      <p className="text-sm text-gray-600">Dueño: {alerta.duenio}</p>

      <p className="text-sm text-gray-600">Socializado: {alerta.socializado}</p>
      <p className="text-sm text-gray-600">Localización: {alerta.localizacion}</p>
      <p className="text-sm text-gray-600">Homologación: {alerta.homologacion}</p>
      <p className="text-sm text-gray-600">Impacto: {alerta.impacto}</p>
      <p className="text-sm text-gray-600">Categoría: {alerta.categoria}</p>

      <p className="text-sm font-semibold text-gray-800 mt-2">Estado: {alerta.estado}</p>

      <p className="text-sm text-gray-500 mt-1">
        Fecha de vencimiento: <strong>{alerta.fechaVencimiento}</strong>
      </p>

    </div>
  );
}
