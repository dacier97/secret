
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
//var stringarr;
//var aux = 'ui';

function encrip_change_Array(){

  let arrayInput = new Array();
  let inputvalues = document.getElementById("input-texto").value;
  //console.log(inputvalues);

  if ((/[A-Z]/.test(inputvalues) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(inputvalues)) == false){
    nameValues =[].map.call(inputvalues,function(dataInput){
      arrayInput.push(dataInput);
    });
    //console.log(arrayInput);
  }else{
    alert('Ingresar Solo letras minusculas sin caracteres');
    document.getElementById('input-texto').value = ''
    document.getElementById('input-texto').focus();
  }

  for (let i=0; i<arrayInput.length; i++) {
          arrayInput.forEach((el,i)=>{
            if(el === "a"){
              arrayInput[i] = 'ai';
            } else if(el === "e"){
              arrayInput[i] = 'enter';
            } else if (el === "i"){
              arrayInput[i] = 'imes';
            }else if (el === "o"){
              arrayInput[i] = 'ober';   
            }else if (el === "u"){
              arrayInput[i] = 'ufat';
            } 
        });
    } 
        
  var stringarr = arrayInput.join('');
  aux = stringarr;
  document.getElementById("msg").value = aux;
  //console.log(aux);
  };

  function copia() {

  var copyText = document.getElementById("msg");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.getElementById('msg').value = ''
  document.getElementById('input-texto').value = ''
  
}



    // Se puede crear un arreglo a partir de la cadena
       var search = ['ai','enter','imes','ober','ufat'];
   //console.log(search);
  // Solo tomé algunos caracteres, completa el arreglo
      var  replace = ['a','e','i','o','u'];
       


function desencriptar() {

    var msg1 = document.getElementById("input-texto").value;
    console.log(msg1);
    search.forEach((char, index) => {
        // Remplazar cada caracter en la cadena
        msg1 = msg1.replaceAll(char, replace[index]);
        console.log(msg1);  
    });
    console.log(msg1);
    document.getElementById("msg").value = msg1;
    //return msg;
}


//console.log(changeChars('sentermainai'));
// Probando caracteres con tilde
//console.log(changeChars('Hòlä a tódos; hasta mañana'));*/








 

  
 
 
   
   

  