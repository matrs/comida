// Initialize the tooltips
let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// alerta al clickear enviar correo
$(document).ready(function () {
  $("#enviarCorreo").click(function (e) {
    alert("El correo fue enviado correctamente...");
  });
});

// ingredientes y preparacion son h6
$("h6").on("click", function () {
  $(this).css({ color: "red" });
});

// $("#ingred").on("click", function () {
//   $(this).css({ color: "red" });
// });

$(".card-title").dblclick(function () {
  $(".card-body").toggle(200);
});
