export default function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="start-screen">
      <div className="start-card">
        <h1>Flight Path Game</h1>
        <p>
          Drag the correct options from the left panel and place them on the
          map. <br></br><br></br> For each wrong answer, 10s will be added to the total time
          🛩️All the best!🛩️
        </p>

        <button className="primary-btn" onClick={onStart}>
          Start Game
        </button>
      </div>
    </div>
  );
}
