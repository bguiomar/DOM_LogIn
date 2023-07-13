/*
  Exercises 01
  ------------
  Añadir un título para cada uno de los inputs: username, password, confirm password
*/
document.getElementById('username').insertAdjacentHTML('beforeBegin','<label for="username"> Username </label>');

document.getElementById('password').insertAdjacentHTML('beforeBegin','<label for="password"> Password </label>');

document.getElementById('confirmPassword').insertAdjacentHTML('beforeBegin','<label for="confirmPassword"> Confirm Password </label>');


/*
  Exercise 02
  -----------
  Agregar una validación a cada input y que muestre un mensaje de error si no hay nada escrito dentro del input
*/

const checkInput = (event) => {
      //con esta función lo que queremos es comprobar si existe en el código algún span. 
  const errorElement = event.target.parentNode.querySelectorAll('span');

// queremos comprobar que el input esté vacío o no, y que además no haya un error previo. Sabemos que no tenemos un error previo, al no tener un span. 

  if (event.target.value === '' && !errorElement.length){
  event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger"> Required </span>')
  }
  
  // esto lo tenemos por si hay un error previo y que hayamos escrito algo en el input (valu !== ''), entonces lo que hacemos es quitarlo, buscamos todos los elementos que son span y los eliminamos. OJO no volver a usar span
  if (errorElement && event.target.value !== '') { errorElement.forEach(elem => elem.remove());
 }
};

document.getElementById('username').addEventListener('blur',checkInput);
document.getElementById('password').addEventListener('blur',checkInput);
document.getElementById('confirmPassword').addEventListener('blur',checkInput);

/*
  Exercise 03
  -----------
  Añadir una validación que compruebe que los valores escritos en los inputs password y confirmPassword son iguales. En caso de ser diferentes, añadir un mesaje de error.
*/
document.getElementById('confirmPassword').addEventListener('blur',(event)=>{
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
document.getElementById('registrationForm').addEventListener('change',(event)=>{ const formFilled = Array.from(document.querySelectorAll('input')).every(input => input.value);
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

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const alert = document.createElement('div');
    alert.classList.add('alert','alert-success');
    alert.innerText = 'user registered successfully';
    form.prepend(alert)

});




