"use client";
import { useState } from "react";

export default function Original1() {
  const [randomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (isNaN(userGuess)) {
      setMessage("Por favor, ingresa un número válido.");
      return;
    }

    if (userGuess === randomNumber) {
      setMessage("🎉 ¡Correcto! Adivinaste el número.");
    } else if (userGuess < randomNumber) {
      setMessage("🔼 El número es mayor.");
    } else {
      setMessage("🔽 El número es menor.");
    }
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
    setGuess("");
    setMessage("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>🎯 Adivina el número (1 al 10)</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Tu intento..."
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleGuess} style={{ padding: "10px" }}>Adivinar</button>
      <button onClick={resetGame} style={{ padding: "10px", marginLeft: "10px" }}>Reiniciar</button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
}
