var numbertofind = Math.floor(Math.random() * 100) + 1;
var attemps = 0;

function refresh(){

    let numbertofind = Math.floor(Math.random() * 100);
    console.log(numbertofind); 
} 


function verifynumber(){

    var bet = document.getElementById('bet').value;
    
    if(bet > 100 || bet < 1)
    {
        alert('aposta inválida');
        return;
    } 

        if(bet > numbertofind)
        {
         attemps++;
            alert('🚨 o número para ser encontrado é MENOR');
        }
        else if(bet < numbertofind)
            {
                attemps++;
                alert('🚨 o número para ser encontrado é MAIOR');
            }
    else 
    {
          alert('✅ PARABÉNS VOCÊ ACERTOU!!! Com '+attemps+' erros');
    }

}

refresh();

   