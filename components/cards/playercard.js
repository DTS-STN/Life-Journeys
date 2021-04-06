export default function PlayerCard({ user, value }) {
  return (
    <section className="text-3xl font-bold p-3 border w-200 rounded-xl inline-block bg-white">
      <p>{user}</p>
      <p>Vote: {value}</p>
    </section>
  );
}
