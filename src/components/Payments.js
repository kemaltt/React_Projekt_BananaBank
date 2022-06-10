import { useState } from "react";

const Payments = () => {
  const [betrag, setBetrag] = useState(0);
  const [inputBetrag, setInputBetrag] = useState("");

  const addBetrag = () => {
    // let inputBetrag = Number(document.querySelector(".geldbetrag").value);
    // console.log(inputBetrag);

    // console.log(inputBetrag);
    setBetrag(betrag + Number(inputBetrag));
    setInputBetrag("");
  };

  const getBetrag = () => {
    setBetrag(betrag - Number(inputBetrag));
    setInputBetrag("");
  };

  return (
    <div className="payments_container">
      <h1>Banana Bank</h1>

      <div className="konto">
        <h3>Dein Girokonto</h3>
        <p className="saldo">{betrag}€</p>
        <input
          onChange={(e) => setInputBetrag(e.target.value)}
          className="geldbetrag"
          type="number"
          name="number"
          id=""
          value={inputBetrag}
          placeHolder="Gib einen Geldbetrag ein"
        />
        <div className="btn">
          <button onClick={addBetrag}>Einzahlen</button>
          <button onClick={getBetrag}>Auszahlen</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
