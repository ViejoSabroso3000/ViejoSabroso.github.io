
    function en(){
              
            let input = document.getElementById("input1");
            // input = input.value.replace(/[e]/ig,"enter");

            let palabraEncriptada = input.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
            input = palabraEncriptada;
            document.getElementById("input2").value=input;
            
        
    }
    function des(){
          
          let input = document.getElementById("input1");
          // input = input.value.replace(/[e]/ig,"enter");
          let palabraDesencriptada = input.value.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
          input = palabraDesencriptada;
          
          document.getElementById('input2').value = input;
  
    }

    function copy(){

        let input = document.getElementById("input2");
        input.select();
        document.execCommand('copy');
    }

    let button1 = document.getElementById("button1");
    button1.onclick = en;

    let button2 = document.getElementById("button2");
    button2.onclick = des;

    let button3 = document.getElementById("copy");
    button3.onclick = copy;