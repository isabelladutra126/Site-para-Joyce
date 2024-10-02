
    // Função para abrir a imagem em tela cheia
    function expandImage(imagePath) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("expandedImg");
        modal.style.display = "block";
        modalImg.src = imagePath;
    }

    // Função para fechar a imagem em tela cheia
    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
