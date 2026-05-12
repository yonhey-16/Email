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

    const msg = document.getElementById("message");

    msg.innerHTML = `
      ✔ Registrado correctamente <br>
      📩 Revisa tu correo o bandeja de spam
    `;

    msg.style.background = "#22c55e";
    msg.style.color = "white";
    msg.style.padding = "15px 20px";
    msg.style.borderRadius = "12px";
    msg.style.marginTop = "20px";
    msg.style.fontWeight = "700";
    msg.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

    form.reset();

  })

  .catch(function(error){

    const msg = document.getElementById("message");

    msg.innerHTML = "❌ Error al enviar. Intenta nuevamente";

    msg.style.background = "#ef4444";
    msg.style.color = "white";
    msg.style.padding = "15px 20px";
    msg.style.borderRadius = "12px";
    msg.style.marginTop = "20px";
    msg.style.fontWeight = "700";

    console.log(error);

  });

});