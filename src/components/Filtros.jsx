import { useState } from "react";

export default function Filtros({ onFiltrar, onReset }) {
  const [filtros, setFiltros] = useState({
    nombre: "",
    estado: "",
    equipo: "",
    servicio: "",
    duenio: "",
    busqueda: "",
    socializado: "",
    localizacion: "",
    homologacion: "",
    impacto: "",
    categoria: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nuevos = { ...filtros, [name]: value };
    setFiltros(nuevos);
    onFiltrar(nuevos);
  };

  const limpiar = () => {
    const vacios = {
      nombre: "",
      estado: "",
      equipo: "",
      servicio: "",
      duenio: "",
      busqueda: "",
      socializado: "",
      localizacion: "",
      homologacion: "",
      impacto: "",
      categoria: "",
    };
    setFiltros(vacios);
    onReset();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-3 items-center">

      <input
        type="text"
        name="nombre"
        placeholder="Nombre del cambio"
        value={filtros.nombre}
        onChange={handleChange}
        className="border rounded px-3 py-2 w-full sm:w-60"
      />

      <input
        type="text"
        name="busqueda"
        placeholder="Buscar descripción..."
        value={filtros.busqueda}
        onChange={handleChange}
        className="border rounded px-3 py-2 w-full sm:w-60"
      />

      <select name="estado" value={filtros.estado} onChange={handleChange} className="border rounded px-3 py-2">
        <option value="">Estado</option>
        <option value="Aprobado">Aprobado</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Rechazado">Rechazado</option>
      </select>

      <input type="text" name="equipo" placeholder="Equipo" value={filtros.equipo} onChange={handleChange} className="border rounded px-3 py-2" />

      <input type="text" name="servicio" placeholder="Servicio" value={filtros.servicio} onChange={handleChange} className="border rounded px-3 py-2" />

      <input type="text" name="duenio" placeholder="Dueño" value={filtros.duenio} onChange={handleChange} className="border rounded px-3 py-2" />

      <select name="socializado" value={filtros.socializado} onChange={handleChange} className="border rounded px-3 py-2">
        <option value="">Socializado</option>
        <option value="SI">SI</option>
        <option value="NO">NO</option>
      </select>

      <input
        type="text"
        name="localizacion"
        placeholder="Localización"
        value={filtros.localizacion}
        onChange={handleChange}
        className="border rounded px-3 py-2"
      />

      <select name="homologacion" value={filtros.homologacion} onChange={handleChange} className="border rounded px-3 py-2">
        <option value="">Homologación</option>
        <option value="SI">SI</option>
        <option value="NO">NO</option>
      </select>

      <select name="impacto" value={filtros.impacto} onChange={handleChange} className="border rounded px-3 py-2">
        <option value="">Impacto</option>
        <option value="Alto">Alto</option>
        <option value="Medio">Medio</option>
        <option value="Bajo">Bajo</option>
      </select>

      <select name="categoria" value={filtros.categoria} onChange={handleChange} className="border rounded px-3 py-2">
        <option value="">Categoría</option>
        <option value="NOCAB">NOCAB</option>
        <option value="ECAB">ECAB</option>
      </select>

      <button onClick={limpiar} className="ml-auto bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-sm font-semibold">
        Borrar filtros
      </button>

    </div>
  );
}
