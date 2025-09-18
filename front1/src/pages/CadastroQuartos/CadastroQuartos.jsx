import { useState } from "react";
import styles from "./CadastroQuartos.module.css";
import api from "../../api/axios";

function CadastroQuartos() {
  const [form, setForm] = useState({
    room_number: "",
    floor: "",
    type: "Basico",
    occupied: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/rooms", form); // POST para /rooms
      alert(`Quarto cadastrado com sucesso! ID: ${response.data.id}`);
      setForm({ room_number: "", floor: "", type: "Basico", occupied: false });
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar quarto.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Cadastrar Quarto</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Número do Quarto:
          <input
            type="number"
            name="room_number"
            value={form.room_number}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Andar:
          <input
            type="number"
            name="floor"
            value={form.floor}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Tipo de Quarto:
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="Basico">Básico</option>
            <option value="Plus">Plus</option>
            <option value="Premium">Premium</option>
          </select>
        </label>

        <label>
          Ocupado:
          <input
            type="checkbox"
            name="occupied"
            checked={form.occupied}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.btn}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroQuartos;
