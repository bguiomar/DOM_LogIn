/*
  Exercises 01
  ------------
  Añadir un título para cada uno de los inputs: username, password, confirm password
*/
// usamos getElemtByID para poder localizar con el id a "username". Con el inserAdjacentHTML agregamos a un sitio específico un elemento seleccionado, en nuestro caso con beforeBegin antes del elemento y usamos como etiqueta de texto <label> 
document.getElementById('username').insertAdjacentHTML('beforeBegin','<label for="username"> Username </label>');

document.getElementById('password').insertAdjacentHTML('beforeBegin','<label for="password"> Password </label>');

document.getElementById('confirmPassword').insertAdjacentHTML('beforeBegin','<label for="confirmPassword"> Confirm Password </label>');


/*
  Exercise 02
  -----------
  Agregar una validación a cada input y que muestre un mensaje de error si no hay nada escrito dentro del input
*/
//con esta función lo que queremos es comprobar si existe en el código algún span. 
const checkInput = (event) => {
  
  const errorElement = event.target.parentNode.querySelectorAll('span');

  // queremos comprobar que el input esté vacío o no, y que además no haya un error previo. ¿Cómo sabemos que no tenemos un error previo?, al no tener un span. 

  if (event.target.value === '' && !errorElement.length){
  event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger"> Required </span>')
  }
  
  // esto lo tenemos por si hay un error previo y que hayamos escrito algo en el input (valu !== ''), entonces lo que hacemos es quitarlo, buscamos todos los elementos que son span y los eliminamos. OJO no volver a usar span.
  if (errorElement && event.target.value !== '') { errorElement.forEach(elem => elem.remove());
 }
};

document.getElementById('username').addEventListener('blur',checkInput);
document.getElementById('password').addEventListener('blur',checkInput);
document.getElementById('confirmPassword').addEventListener('blur',checkInput);
//con esto agregamos escuchadores de eventos, usamos el evento "blur" para hacer que se desencadene la función checkInput cuando salimos del input. Con ello verificaremos y mostraremos el mensaje de error cuando sea necesario.

/*
  Exercise 03
  -----------
  Añadir una validación que compruebe que los valores escritos en los inputs password y confirmPassword son iguales. En caso de ser diferentes, añadir un mesaje de error.
*/
document.getElementById('confirmPassword')
//el evento que vamos a escuchar es cuando salgamos del input ("blur") que hará que se ejecute la función anónima que coge como parámetro el event. 
.addEventListener('blur',(event)=>{
    //comparamos los valores del confirmPassword con el password y si no son iguales entontes salta mensaje.
    if (event.target.value !== document.getElementById('password').value){
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Passwords Should Match</span>');
    }
})


/*
  Exercise 04
  -----------
 Asegurarnos que el botón "Register" está por defecto deshabilitado hasta no haber rellenado todos los inputs. Una vez rellenados, se habilite. 
*/

const btn= document.querySelector('button');
btn.setAttribute('disabled','true') // con esto hacemos que esté deshabilitado.
document.getElementById('registrationForm')
//cuando se produzca algún cambio en todo el formulario desencadenamos la función.
.addEventListener('change',(event)=>
 // Lo transformamos en un Array usando el Array.form porque a posteriori queremos usar el método every para saber si los inputs no están vacío nos dará true.
{ const formFilled = Array.from(document.querySelectorAll('input')).every(input => input.value);
 //si están rellenados (formFilled = true)
 if (formFilled){
    btn.removeAttribute('disabled')
 } else {
    btn.setAttribute('disabled', 'true')
 }
})

/*
  Exercise 05
  -----------
  Cuando hagamos click en el boton "Register", salga un mensaje que nos informe que el registro se ha hecho satisfactoriamente. 
  
*/

const form = document.getElementById('registrationForm');
 // el evento submit se dispara cuando enviamos el formulario y desencadena la funció que hace que: 
form.addEventListener('submit', (event)=>{
    event.preventDefault(); // con esto evitamos que el formulario se envíe y evitamos un comportamiento predeterminado al recargar la pág.
    const alert = document.createElement('div');
    alert.classList.add('alert','alert-success');
    alert.innerText = 'user registered successfully';
    form.prepend(alert) //con esto lo que hacemos es que se coloque al principio del formulario.
});