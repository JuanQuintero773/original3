"use client";
import { useState } from "react";

export default function Original3() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [truth, setTruth] = useState<boolean | null>(null);

  const possibleAnswers = [
    "Sí",
    "No",
    "Tal vez",
    "Depende del universo",
    "Pregunta de nuevo cuando llueva",
    "El destino no quiere responderte",
    "Definitivamente sí",
    "Definitivamente no",
  ];

  const handleAsk = () => {
    if (!question.trim()) {
      setAnswer("Debes hacer una pregunta al oráculo...");
      setTruth(null);
      return;
    }

    // Escoge respuesta aleatoria
    const randomAnswer =
      possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

    // Decide si el oráculo dice la verdad o miente
    const isTellingTruth = Math.random() < 0.6; // 60% de verdad, 40% mentira

    setAnswer(randomAnswer);
    setTruth(isTellingTruth);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #1a0033, #000)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>🔮 El Oráculo Mentiroso</h1>
      <p style={{ maxWidth: "500px", marginBottom: "30px" }}>
        Haz una pregunta de sí o no, y el oráculo responderá... pero cuidado, a veces miente.
      </p>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ejemplo: ¿Aprobaré el examen?"
        style={{
          padding: "10px",
          width: "80%",
          maxWidth: "400px",
          borderRadius: "8px",
          border: "none",
          textAlign: "center",
          marginBottom: "15px",
        }}
      />
      <button
        onClick={handleAsk}
        style={{
          backgroundColor: "#6A0DAD",
          border: "none",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Consultar
      </button>

      {answer && (
        <div style={{ marginTop: "30px" }}>
          <p style={{ fontSize: "1.5rem", color: "#B39DDB" }}>
            💬 El oráculo dice: <em>{answer}</em>
          </p>

          {truth !== null && (
            <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
              (¿Fue verdad o mentira?... jamás lo sabrás 👁️)
            </p>
          )}
        </div>
      )}
    </div>
  );
}
