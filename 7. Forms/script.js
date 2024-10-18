
//senhas coincidem
function validarSenha() {
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmar');
    const msgErro = document.getElementById('senhaErro');

  if (senha.value == confirmarSenha.value) {
    msgErro.style.display = 'none';
  } else {
    msgErro.style.display = 'block';
    senha.focus();
  }
}

//senhas válidas

function verificarSenha() {
    const senhaValor = document.getElementById('senha').value; 
    const requisitosSection = document.getElementById('requisitos');

    const tamanhoValido = document.getElementById('tamanhoValido');
    const maiusculaValida = document.getElementById('maiusculaValida');
    const minusculaValida = document.getElementById('minusculaValida');
    const numeroValido = document.getElementById('numeroValido');
    const especialValido = document.getElementById('especialValido');

    const temTamanhoValido = senhaValor.length >= 6 && senhaValor.length <= 15;
    const temMaiuscula = /[A-Z]/.test(senhaValor);
    const temMinuscula = /[a-z]/.test(senhaValor);
    const temNumero = /[0-9]/.test(senhaValor);
    const temDoisEspeciais = /[^A-Za-z0-9].*[^A-Za-z0-9]/.test(senhaValor);

    if (temTamanhoValido) {
        tamanhoValido.classList.add('valido');
        tamanhoValido.classList.remove('invalido');
    } else {
        tamanhoValido.classList.add('invalido');
        tamanhoValido.classList.remove('valido');
    }

    if (temMaiuscula) {
        maiusculaValida.classList.add('valido');
        maiusculaValida.classList.remove('invalido');
    } else {
        maiusculaValida.classList.add('invalido');
        maiusculaValida.classList.remove('valido');
    }

    if (temMinuscula) {
        minusculaValida.classList.add('valido');
        minusculaValida.classList.remove('invalido');
    } else {
        minusculaValida.classList.add('invalido');
        minusculaValida.classList.remove('valido');
    }

    if (temNumero) {
        numeroValido.classList.add('valido');
        numeroValido.classList.remove('invalido');
    } else {
        numeroValido.classList.add('invalido');
        numeroValido.classList.remove('valido');
    }

    if (temDoisEspeciais) {
        especialValido.classList.add('valido');
        especialValido.classList.remove('invalido');
    } else {
        especialValido.classList.add('invalido');
        especialValido.classList.remove('valido');
    }

    if (temTamanhoValido && temMaiuscula && temMinuscula && temNumero && temDoisEspeciais) {
        requisitosSection.style.display = 'none'; 
    } else {
        requisitosSection.style.display = 'block'; 
    }
}

//rga valido

function buscarNome(rga) {
    const listaEstudantes = new Map();

    listaEstudantes.set("2023.1906.012-7", "Amanda Caroline de Gois Balcaçar");
    listaEstudantes.set("2023.1906.066-6", "Alexandre Gonçalves Torres");
    listaEstudantes.set("2023.1906.034-8", "Mylenna Peralta Farias");

    if (listaEstudantes.has(rga)) {
        return listaEstudantes.get(rga);
    } else {
        return "Estudante não encontrado";
    }
}

function validarRGA() {
    var rga = document.getElementById("rga");
    var nome = document.getElementById("nome");
    var msgErro = document.getElementById("rgaErro");

    var result = buscarNome(rga.value);

    if (result != "Estudante não encontrado") {
        nome.value = result;
        msgErro.style.display = "none";
    }
    else {
        msgErro.style.display = "block";
        rga.focus();
        nome.value = "Não encontrado";
    }
}