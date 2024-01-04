const URL_BASE = "https://jsonplaceholder.typicode.com";
const usersList = document.querySelector("#usersList");

const crateListItems = (user) => {
  const li = document.createElement("li");
  li.innerHTML = user.name;
  usersList.appendChild(li);
};

const showUsers = () => {
  // GET AJAX
  $.get(`${URL_BASE}/users`, (response) => {
    response.forEach(crateListItems);
  });
};

$(".boton").click(showUsers);

$(".delete").click(() => {
  const firstUserListItem = $("#usersList li:first-child"); // Delete the first user each time the button is clicked

  if (firstUserListItem.length) {
    const userNameToDelete = firstUserListItem.text().trim(); // Get the user ID or name from the list item and use it in the DELETE request

    $.ajax({
      url: `${URL_BASE}/users/${userNameToDelete}`, // Adjust the URL based on your API
      type: "DELETE",
      success: (response) => {
        console.log("User deleted successfully");
        firstUserListItem.remove();
      },
      error: (error) => {
        console.error("Error deleting user", error);
      },
    });
  } else {
    console.log("No users to delete");
  }
});
