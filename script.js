emailjs.init("a1_OH6bM2YXlMTh87");

const form = document.getElementById("subscribe-form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const email = document.getElementById("email").value;

  const params = {
    user_email: email
  };

  emailjs.send(
    "service_u475znp",
    "template_qci7qc5",
    params
  )

  .then(function(){

    document.getElementById("message").innerHTML =
      "✅ ¡Suscrito correctamente! Revisa tu correo 📩 (ve a bandeja de entrada o spam)";

    document.getElementById("message").style.color = "#22c55e";

    form.reset();

  })

  .catch(function(error){

    document.getElementById("message").innerHTML =
      "❌ Error al enviar. Intenta nuevamente";

    document.getElementById("message").style.color = "#ef4444";

    console.log(error);

  });

});