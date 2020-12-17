import React from "react";
import { MdDelete } from "react-icons/md";
import "./style.css";

export default function Reservas() {
  return (
    <div>
      <h1 className="titulo">Voce solicitou 1 reserva</h1>

      <div className="reservas">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/79/porto-de-galinhas.jpg?w=1100&h=600&s=1"
          alt="Maceio"
        />
        <strong>Viagem Maceio 7 Dias</strong>
        <span>Quantidade: 2</span>
        <button type="button" onClick={() => {}}>
          <MdDelete size={20} color="#191919" />
        </button>
      </div>

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
