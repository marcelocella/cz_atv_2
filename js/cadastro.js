function handleSubmit(event){
    event.preventDefault();

    const form = document.getElementById('volunteerForm');
    const formData = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        idade: form.idade.value,
        disponibilidade: form.disponibilidade.value,
        areainteresse: form.areainteresse.value, 
        experiencia: form.experiencia.value,
        motivacao: form.motivacao.value,
        dataCadastro: new Date().toLocaleDateString()

    }

    let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    voluntarios.push(formData);
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');
    successMessage.scrollIntoView({behavior: 'smooth', block: 'center'});

    setTimeout(()=> form.reset(), 2000);
    setTimeout(() => successMessage.classList.remove('Show'), 3000);

    exibirVoluntarios();
}


function exibirVoluntarios(){
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    const tabelaContainer = document.getElementById('tabelaVoluntarios');

    if(!tabelaContainer) return

    if(voluntarios.lenght === 0){
        tabelaContainer.innerHTML = '<p> Nenhum voluntário cadastrado!</p>';

    }

}