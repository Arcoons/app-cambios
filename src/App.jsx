import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Filtros from "./components/Filtros";
import TablaAlertas from "./components/TablaAlertas";
import { alertas as alertasMock } from "./data/alertasMock";

export default function App() {
  const navigate = useNavigate();

  const [filtroActual, setFiltroActual] = useState({});
  const [alertasFiltradas, setAlertasFiltradas] = useState([]);

  const alertasLocales = JSON.parse(localStorage.getItem("cambios")) || [];
  const alertasCompletas = [...alertasMock, ...alertasLocales];

  const hoy = new Date();
  const mesActual = hoy.getMonth() + 1;
  const anioActual = hoy.getFullYear();

  useEffect(() => {
    filtrarAlertas(filtroActual);
  }, [filtroActual]);

  const filtrarAlertas = (filtros) => {
    const filtradas = alertasCompletas.filter((a) => {
      const fecha = new Date(a.fechaVencimiento);
      const enMesActual =
        fecha.getMonth() + 1 === mesActual && fecha.getFullYear() === anioActual;

      return (
        enMesActual &&

        (!filtros.nombre ||
          a.nombre?.toLowerCase().includes(filtros.nombre.toLowerCase())) &&

        (!filtros.estado || a.estado === filtros.estado) &&

        (!filtros.equipo ||
          a.equipo?.toLowerCase().includes(filtros.equipo.toLowerCase())) &&

        (!filtros.servicio ||
          a.servicio?.toLowerCase().includes(filtros.servicio.toLowerCase())) &&

        (!filtros.duenio ||
          a.duenio?.toLowerCase().includes(filtros.duenio.toLowerCase())) &&

        (!filtros.busqueda ||
          a.descripcion?.toLowerCase().includes(filtros.busqueda.toLowerCase())) &&

        (!filtros.socializado || a.socializado === filtros.socializado) &&

        (!filtros.localizacion ||
          a.localizacion?.toLowerCase().includes(filtros.localizacion.toLowerCase())) &&

        (!filtros.homologacion || a.homologacion === filtros.homologacion) &&

        (!filtros.impacto || a.impacto === filtros.impacto) &&

        (!filtros.categoria || a.categoria === filtros.categoria)
      );
    });

    setAlertasFiltradas(filtradas);
  };

  const resetFiltros = () => {
    setFiltroActual({});
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
           Monitoreo de Cambios (Mes Actual)
        </h1>

        <button
          onClick={() => navigate("/nuevo")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
           Nuevo Cambio
        </button>
      </div>

     
      <Filtros onFiltrar={setFiltroActual} onReset={resetFiltros} />

     
      <TablaAlertas alertas={alertasFiltradas} />
    </div>
  );
}
