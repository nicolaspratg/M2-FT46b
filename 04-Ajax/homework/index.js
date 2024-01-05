const URL_BASE = "http://localhost:5000/amigos";
const amigosList = document.querySelector("#lista");

const createListItems = (amigo) => {
  const li = document.createElement("li");
  li.innerHTML = amigo.name;
  amigosList.appendChild(li);
};

const showAmigos = () => {
    amigosList.innerHTML = "";
  $.get(URL_BASE, (data) => {
    data.forEach(createListItems);
  });
};

const buscarAmigo = () => {
  const id = $("#input").val();
  $.get(`${URL_BASE}/${id}`, (data) => {
    $("#amigo").text(data.name);
  });
};

const deleteAmigo = () => {
  const id = $("#inputDelete").val();
  $.ajax({
    url: `${URL_BASE}/${id}`,
    type: "DELETE",
    success: () => {
      $("#success").text(`Tu amigo con ID ${id} ha sido eliminado correctamente`);
    },
  });
};

$("#boton").click(showAmigos);
$("#search").click(buscarAmigo);
$("#delete").click(deleteAmigo);
