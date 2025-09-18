import { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./Quartos.module.css";
import api from "../../api/axios";

Modal.setAppElement("#root");

function Quartos() {
  const [quartos, setQuartos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [erroModal, setErroModal] = useState(false); // controla modal de erro

  const descricoes = {
    Basico: "Um quarto simples com conforto essencial, ideal para estadias rápidas.",
    Plus: "Mais espaço e benefícios extras, perfeito para quem busca custo-benefício.",
    Premium: "Luxo e sofisticação, experiência completa para estadias especiais.",
  };

  useEffect(() => {
    const fetchQuartos = async () => {
      try {
        const response = await api.get("/rooms");
        setQuartos(response.data);
      } catch (error) {
        console.error(error);
        setModalMessage("❌ Erro ao buscar quartos.");
        setErroModal(true);
        setModalIsOpen(true);
      }
    };

    fetchQuartos();
  }, []);

  const handleAlugar = async (id) => {
    const quarto = quartos.find((q) => q.id === id);

    if (quarto.occupied) {
      setModalMessage("❌ Não Disponível");
      setModalIsOpen(true);
      setErroModal(false);
      setTimeout(() => setModalIsOpen(false), 2000);
      return;
    }

    try {
      await api.patch(`/rooms/${id}`, { occupied: true });
      setQuartos((prev) =>
        prev.map((q) => (q.id === id ? { ...q, occupied: true } : q))
      );
      setModalMessage("✅ Alugado!");
      setModalIsOpen(true);
      setErroModal(false);
      setTimeout(() => setModalIsOpen(false), 2000);
    } catch (error) {
      console.error(error);
      setModalMessage("❌ Erro ao alugar quarto.");
      setModalIsOpen(true);
      setErroModal(true);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Lista de Quartos</h2>
      <div className={styles.grid}>
        {quartos.map((q) => (
          <div key={q.id} className={styles.card}>
            <h3>Quarto {q.room_number}</h3>
            <p><strong>Andar:</strong> {q.floor}</p>
            <p><strong>Tipo:</strong> {q.type}</p>
            <p className={styles.descricao}>{descricoes[q.type]}</p>
            <button
              className={q.occupied ? styles.btnDisabled : styles.btn}
              onClick={() => handleAlugar(q.id)}
              disabled={q.occupied}
            >
              {q.occupied ? "Não Disponível" : "Alugar"}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={erroModal ? styles.modalError : styles.modalContent}
        overlayClassName={styles.modalOverlay}
        closeTimeoutMS={300}
      >
        <button
          className={styles.modalCloseBtn}
          onClick={() => setModalIsOpen(false)}
        >
          ✖
        </button>
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
}

export default Quartos;
