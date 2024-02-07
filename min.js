
let nam = document.querySelector('#nam');
let roll = document.querySelector('#roll');
let reg = document.querySelector('#reg');
let pass = document.querySelector('#pass');
let btn = document.querySelector('.send-btn');


btn.addEventListener('click',function(e){
e.preventDefault();
  

if(nam.value == '' && roll.value == '' && reg.value == '' && pass.value == ''){
  alert("kichu likho")
}else{

  let newRow = document.createElement('tr');

  let newNam = document.createElement('th');
  newNam.innerHTML = nam.value;
  newRow.appendChild(newNam);

  let newRoll = document.createElement('th');
newRoll.innerHTML = roll.value;
newRow.appendChild(newRoll);

  let newReg = document.createElement('th');
newReg.innerHTML = reg.value;
newRow.appendChild(newReg);

  let newPass = document.createElement('th');
newPass.innerHTML = pass.value;
newRow.appendChild(newPass);

list.appendChild(newRow)

}



});
