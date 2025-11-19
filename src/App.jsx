import { useState, useEffect } from "react";
import Filtros from "./components/Filtros";
import ListaAlertas from "./components/ListaAlertas";
import { alertas } from "./data/alertasMock";

export default function App() {
  const [filtroActual, setFiltroActual] = useState({});
  const [alertasFiltradas, setAlertasFiltradas] = useState([]);

  const hoy = new Date();
  const mesActual = hoy.getMonth() + 1;
  const anioActual = hoy.getFullYear();

  useEffect(() => {
    filtrarAlertas(filtroActual);
  }, [filtroActual]);

 const filtrarAlertas = (filtros) => {
  const filtradas = alertas.filter((a) => {
    const fecha = new Date(a.fechaVencimiento);
    const enMesActual =
      fecha.getMonth() + 1 === mesActual &&
      fecha.getFullYear() === anioActual;

    return (
      enMesActual &&

      
      (!filtros.nombre ||
        a.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())) &&

      (!filtros.estado || a.estado === filtros.estado) &&
      (!filtros.equipo ||
        a.equipo.toLowerCase().includes(filtros.equipo.toLowerCase())) &&
      (!filtros.servicio ||
        a.servicio.toLowerCase().includes(filtros.servicio.toLowerCase())) &&
      (!filtros.duenio ||
        a.duenio.toLowerCase().includes(filtros.duenio.toLowerCase())) &&
      (!filtros.busqueda ||
        a.descripcion.toLowerCase().includes(filtros.busqueda.toLowerCase()))
    );
  });

  setAlertasFiltradas(filtradas);
};

  const resetFiltros = () => {
    setFiltroActual({});
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Cambios</h1>

      <Filtros onFiltrar={setFiltroActual} onReset={resetFiltros} />
      <ListaAlertas alertas={alertasFiltradas} />
    </div>
  );
}
