document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const commentInput = document.getElementById("comment");

        const name = nameInput.value;
        const comment = commentInput.value;

        if (name.trim() === "" || comment.trim() === "") {
            alert("Por favor, ingresa un nombre y un comentario.");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `<strong>${name}:</strong> ${comment}`;
        commentList.appendChild(li);

        nameInput.value = "";
        commentInput.value = "";
    });
});