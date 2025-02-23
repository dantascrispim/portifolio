function enviarWhats(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5588994075586";
    
    
    const text = ` Olá me chamo ${nome}, ${mensagem}`
    const msgFormatada =  encodeURIComponent(text);
    
    const whatsappLink = `https://wa.me/${telefone}?text=${msgFormatada}`;

    
    window.open(whatsappLink, "_blank") ;
}

