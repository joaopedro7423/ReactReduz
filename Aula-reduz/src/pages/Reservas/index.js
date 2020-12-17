import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import "./style.css";

import { removeReserve, updateAmountReserve } from "../../store/modules/reserve/actions";

export default function Reservas() {
  const reserves = useSelector((state) => state.reserve);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeReserve(id));
  }

  function decrementoAmount(trip) {
   dispatch(updateAmountReserve(trip.id, trip.amount-1));
  }

  function incrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount +1));
  }

  return (
    <div>
      <h1 className="titulo">Voce solicitou {reserves.length} reserva</h1>

      {reserves.map((reserve) => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>

          <div id="amount">
            <button type="button" onClick={() => decrementoAmount(reserve)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>

            <input type="text" readOnly value={reserve.amount} />

            <button type="button" onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>
          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
