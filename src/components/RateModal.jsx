import React from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { ClientContext } from "../contexts/ClientProvider";

const RateModal = ({ setModal, productId }) => {
  const { updateRate } = React.useContext(ClientContext);
  const [rate, setRate] = React.useState(0);
  React.useEffect(() => {
    updateRate(rate, productId);
  }, [rate]);
  return (
    <div className="my-modal-container" onClick={() => setModal(null)}>
      <div className="my-modal">
        <div className="modal-header">
          <p>Оценить</p>
          <button onClick={() => setModal(null)}>&#10006; </button>
        </div>
        <div className="modal-body">
          <div
            className="rate-btn"
            onClick={async () => {
              await setRate(1);
            }}
          >
            1
          </div>
          <div
            className="rate-btn"
            onClick={async () => {
              await setRate(2);
            }}
          >
            2
          </div>
          <div
            className="rate-btn"
            onClick={async () => {
              await setRate(3);
            }}
          >
            3
          </div>
          <div
            className="rate-btn"
            onClick={async () => {
              await setRate(4);
            }}
          >
            4
          </div>
          <div
            className="rate-btn"
            onClick={async () => {
              await setRate(5);
            }}
          >
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateModal;
