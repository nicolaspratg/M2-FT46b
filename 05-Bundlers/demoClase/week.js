var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];


export const name = (number) => names[number];
// const name = (number) => names[number];

export const number = (name) => names.indexOf(name);
// const number = (name) => names.indexOf(name);

// module.exports = {
//   name,
//   number,
// };
