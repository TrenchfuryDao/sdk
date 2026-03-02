export default function Leaderboard() {
  const players = [
    { name: "0xA21...91F", score: 1200 },
    { name: "0xBC3...88A", score: 980 },
    { name: "0xD99...22E", score: 870 },
  ];

  return (
    <section className="leaderboard">
      <h3>Top Warriors</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} — {player.score} pts
          </li>
        ))}
      </ul>
    </section>
  );
}
