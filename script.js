emailjs.init("YOUR_PUBLIC_KEY");

const form = document.getElementById("subscribe-form");

form.addEventListener("submit", function(e){

e.preventDefault();

const email = document.getElementById("email").value;

const params = {
user_email: email
};

emailjs.send(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
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
  "❌ Error al enviar.";

console.log(error);
```

});

});
