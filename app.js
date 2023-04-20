const formulario = document.querySelector('#miFormulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const membresia = document.querySelector('#mebresia').value;
  const dateinicio = document.querySelector('#fecha').value;
  const datefinal= document.querySelector('#fecha2').value;
  const costo= document.querySelector('#costo').value;


  const data = {
    fecha_inicio: dateinicio,
    fecha_nacimiento: datefinal,
    tipo_membresia: 'oro',
    costo: costo
  };

  const json = JSON.stringify(data);

  console.log(json);

  // Aquí se puede agregar código para enviar los datos al servidor
});