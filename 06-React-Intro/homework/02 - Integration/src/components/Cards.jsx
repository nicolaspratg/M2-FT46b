import Card from "./Card";

export default function Cards(props) {
  return (
    <div>
      <div>
        {characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={character.onClose}
          />
        ))}
      </div>
    </div>
  );
}
