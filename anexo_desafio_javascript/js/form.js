// classe contato
class contato {

    constructor(nome, sobrenome, email, telefone, contato) {

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;

    }

}

// função do formulário
function Post(event, form) {

    // impede recarregar página
    event.preventDefault();

    // cria objeto
    let data = new contato(

        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value

    );

    // mostra no console
    console.log(data);

    // mensagem
    alert("Enviado com sucesso!");

    // limpa formulário
    form.reset();

}