export default function Card(props) {
  return (
    <div>
      <div key={id}>
        <button onClick={props.onClose}>X</button>
        <h2>Name: {props.name}</h2>
        <h2>Status: {props.status}</h2>
        <h2>Species: {props.species}</h2>
        <h2>Gender: {props.gender}</h2>
        <h2>Origin: {props.origin}</h2>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}
