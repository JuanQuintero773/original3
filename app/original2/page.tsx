"use client";
import { useState, useEffect } from "react";

export default function Original2() {
  const [gameState, setGameState] = useState<"waiting" | "ready" | "clicked" | "tooSoon">("waiting");
  const [message, setMessage] = useState("Haz clic en la pantalla para comenzar 👇");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [reactionTime, setReactionTime] = useState<number | null>(null);

  // Inicia el juego: después de un tiempo aleatorio, cambia el estado a "ready"
  const startGame = () => {
    setReactionTime(null);
    setMessage("Espera... el círculo cambiará de color ⏳");
    setGameState("waiting");

    const delay = Math.random() * 3000 + 2000; // entre 2 y 5 segundos
    setTimeout(() => {
      setGameState("ready");
      setStartTime(Date.now());
      setMessage("¡Haz clic ahora! 🟢");
    }, delay);
  };

  const handleClick = () => {
    if (gameState === "waiting") {
      setGameState("tooSoon");
      setMessage("😅 Te adelantaste. Haz clic para intentarlo de nuevo.");
    } else if (gameState === "ready" && startTime) {
      const reaction = Date.now() - startTime;
      setReactionTime(reaction);
      setGameState("clicked");
      setMessage(`⏱️ Tu tiempo de reacción: ${reaction} ms`);
    } else if (gameState === "clicked" || gameState === "tooSoon") {
      startGame();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
        cursor: "pointer",
        backgroundColor:
          gameState === "ready"
            ? "#4CAF50"
            : gameState === "tooSoon"
            ? "#E53935"
            : "#1976D2",
        color: "white",
        transition: "background-color 0.3s",
      }}
    >
      <h1>⚡ Juego de Reacción Rápida</h1>
      <p style={{ fontSize: "1.2rem" }}>{message}</p>
      {reactionTime && (
        <p style={{ fontSize: "1.1rem", marginTop: "10px" }}>
          Intenta mejorar tu tiempo 😉
        </p>
      )}
    </div>
  );
}
