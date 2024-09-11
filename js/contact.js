const form = document.getElementById("contact_form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
  const BodyMessage = `
        Nom : ${name.value} <br>
        Email : ${email.value} <br>
        Message : ${message.value} <br>
    `;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sy.digitalforbusiness@gmail.com",
    Password: "61A3A5EF24DC989EE4ADC9D3EB014569D378",
    To: "sy.digitalforbusiness@gmail.com",
    From: "sy.digitalforbusiness@gmail.com",
    Subject: "Contact form SyDigital Portfolio",
    Body: BodyMessage,
  }).then((message) => {
    console.log(message);
    console.log(message.trim());
    if (message) {
      Swal.fire({
        title: "Message Envoyé !",
        text: "Merci de nous avoir contactés !",
        icon: "success",
        confirmButtonColor: "#ffc200",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message} !`,
        footer: '<a href="#">Pourquoi ai-je ce problème ?</a>',
        confirmButtonColor: "#ffc200",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
