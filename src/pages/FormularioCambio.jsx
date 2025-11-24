import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioCambio() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    estado: "",
    equipo: "",
    servicio: "",
    duenio: "",
    socializado: "",
    localizacion: "",
    homologacion: "",
    impacto: "",
    categoria: "",
    fechaVencimiento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const guardar = () => {
    const cambiosGuardados = JSON.parse(localStorage.getItem("cambios")) || [];
    cambiosGuardados.push({ id: Date.now(), ...form });
    localStorage.setItem("cambios", JSON.stringify(cambiosGuardados));

    alert("Cambio registrado correctamente.");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        ➕ Registrar Nuevo Cambio
      </h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <input
            className="border px-3 py-2 rounded"
            type="text"
            placeholder="Nombre del cambio"
            name="nombre"
            onChange={handleChange}
          />

          <input
            className="border px-3 py-2 rounded"
            type="text"
            placeholder="Descripción"
            name="descripcion"
            onChange={handleChange}
          />

          <select className="border px-3 py-2 rounded" name="estado" onChange={handleChange}>
            <option value="">Estado</option>
            <option>Aprobado</option>
            <option>Pendiente</option>
            <option>Rechazado</option>
          </select>

          <input
            className="border px-3 py-2 rounded"
            type="text"
            placeholder="Equipo"
            name="equipo"
            onChange={handleChange}
          />

          <input
            className="border px-3 py-2 rounded"
            type="text"
            placeholder="Servicio"
            name="servicio"
            onChange={handleChange}
          />

          <input
            className="border px-3 py-2 rounded"
            type="text"
            placeholder="Dueño"
            name="duenio"
            onChange={handleChange}
          />

          <select className="border px-3 py-2 rounded" name="socializado" onChange={handleChange}>
            <option value="">Socializado</option>
            <option>SI</option>
            <option>NO</option>
          </select>

          <input
            className="border px-3 py-2 rounded"
            type="text"
            placeholder="Localización"
            name="localizacion"
            onChange={handleChange}
          />

          <select className="border px-3 py-2 rounded" name="homologacion" onChange={handleChange}>
            <option value="">Homologación</option>
            <option>SI</option>
            <option>NO</option>
          </select>

          <select className="border px-3 py-2 rounded" name="impacto" onChange={handleChange}>
            <option value="">Impacto</option>
            <option>Alto</option>
            <option>Medio</option>
            <option>Bajo</option>
          </select>

          <select className="border px-3 py-2 rounded" name="categoria" onChange={handleChange}>
            <option value="">Categoría</option>
            <option>NOCAB</option>
            <option>ECAB</option>
          </select>

          <input
            type="date"
            className="border px-3 py-2 rounded"
            name="fechaVencimiento"
            onChange={handleChange}
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={guardar}
          >
            Guardar Registro
          </button>
        </div>
      </div>
    </div>
  );
}
