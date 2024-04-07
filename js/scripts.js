// Seleciona todas as imagens dentro dos contêineres de imagem com a classe ".image-container"
const images = document.querySelectorAll(".image-container img");

// Cria um novo objeto IntersectionObserver que observará as entradas de interseção
const observer = new IntersectionObserver((entries, observer) => {
  // Para cada entrada observada
  entries.forEach((entry) => {
    // Verifica se a imagem está intersectando a viewport
    if (!entry.isIntersecting) return; // Se não estiver, interrompe a execução

    // Obtém a imagem associada à entrada atual
    const image = entry.target;

    // Substitui a parte do parâmetro da URL da imagem responsável pela largura por um valor maior,
    // carregando assim uma versão de alta resolução da imagem
    image.src = image.src.replace("?w=10&", "?w=1000&");

    // Para de observar a imagem após ter sido carregada
    observer.unobserve(image);
  });
}, {});

// Para cada imagem selecionada, inicia a observação de interseção
images.forEach((image) => {
  observer.observe(image);
});
