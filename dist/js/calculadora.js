
      var op = document.getElementById("desejo").value;

      var tela = document.getElementById("tela");
      tela.innerHTML = "<p>Digite os números e selecione a operação:</p>";

      function somar(numA, numB) {
        result = Number(numA) + Number(numB);
        return (tela.innerHTML =
          "<h1> O resultado de somar " +
          numA +
          " por " +
          numB +
          " é " +
          result.toFixed(2) +
          "</h1>");
      }
      function subtrair(numA, numB) {
        result = Number(numA) - Number(numB);
        tela.innerHTML =
          "<h1> O resultado de subtrair " +
          numA +
          " por " +
          numB +
          " é " +
          result.toFixed(2) +
          "</h1>";
      }
      function multiplicar(numA, numB) {
        result = Number(numA) * Number(numB);
        tela.innerHTML =
          "<h1> O resultado de multiplicar " +
          numA +
          " por " +
          numB +
          " é " +
          result.toFixed(2) +
          "</h1>";
      }
      function dividir(numA, numB) {
        result = Number(numA) / Number(numB);
        if (numB == 0) {
            result = 0
        }
        tela.innerHTML =
          "<h1> O resultado de dividir " +
          numA +
          " por " +
          numB +
          " é " +
          result.toFixed(2) +
          "</h1>";
          
      }

      function calcular(numA, numB, op) {
        numA = document.getElementById("numA").value;
        numB = document.getElementById("numB").value;

        op = document.getElementById("desejo").value;
        if (op === "somar") {
          somar(numA, numB);
        } else if (op === "subtrair") {
          subtrair(numA, numB);
        } else if (op === "dividir") {
          dividir(numA, numB);
        } else if (op == "multiplicar") {
          multiplicar(numA, numB);
        } else {
            tela.innerHTML = "<h1>Escolha a operação matemática!</h1>"
        }
        if (numA == "" || numB == "") {

            tela.innerHTML = "<h1>Campo em branco, insira o primeiro e o segundo número!</h1>"
            
            
        }
      }
    