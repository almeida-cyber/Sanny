const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');

// Coloque aqui o link do vídeo do YouTube que você quer que ela assista!
// Pode ser um Short ou um vídeo normal.
const LINK_DO_VIDEO = "https://www.youtube.com/watch?v=-baB66elbtc&list=RD-baB66elbtc&start_radio=1";

// Função para fazer o botão "Não" fugir
function fugir() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Calcula novas coordenadas seguras na tela para o botão sumir
    const novoX = Math.random() * (larguraJanela - 150);
    const novoY = Math.random() * (alturaJanela - 100);

    btnNao.style.position = 'fixed';
    btnNao.style.left = novoX + 'px';
    btnNao.style.top = novoY + 'px';
}

// Função executada ao clicar no "Sim"
function abrirVideo() {
    // Redireciona a aba atual diretamente para o vídeo fofo do YouTube
    window.location.href = LINK_DO_VIDEO;
}

// Ouvintes de eventos para o botão "Não" (foge ao passar o mouse ou clicar)
btnNao.addEventListener('mouseover', fugir);
btnNao.addEventListener('click', fugir);

// Ouvinte de evento para o botão "Sim" (abre o vídeo)
btnSim.addEventListener('click', abrirVideo);