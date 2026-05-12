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

```
document.getElementById("message").innerHTML =
  "✅ Suscripción exitosa. Revisa tu correo.";

form.reset();
```

})

.catch(function(error){

```
document.getElementById("message").innerHTML =
  "❌ Error al enviar";

console.log(error);
```

});

});
