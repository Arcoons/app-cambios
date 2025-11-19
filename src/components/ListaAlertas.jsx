import AlertaCard from "./AlertaCard";

export default function ListaAlertas({ alertas }) {
  if (alertas.length === 0)
    return <p className="text-gray-500 text-center">No hay alertas que coincidan.</p>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {alertas.map((a) => (
        <AlertaCard key={a.id} alerta={a} />
      ))}
    </div>
  );
}
