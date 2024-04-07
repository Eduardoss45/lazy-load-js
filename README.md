# Lazy Load com JavaScript

Este é um exemplo simples de como implementar o carregamento preguiçoso (lazy loading) de imagens usando JavaScript e a funcionalidade Intersection Observer.

## Descrição

O lazy loading é uma técnica que adia o carregamento de recursos não essenciais (como imagens) até que sejam necessários. Isso pode melhorar significativamente o desempenho da página, especialmente em sites com muitas imagens.

Neste exemplo, as imagens só serão carregadas quando entrarem na viewport do navegador, ou seja, quando se tornarem visíveis para o usuário rolar a página.

## Como funciona

O script JavaScript detecta quando as imagens entram na viewport usando o Intersection Observer. Quando uma imagem é detectada, seu atributo `src` é substituído por uma versão de alta resolução da imagem, melhorando a qualidade visual.

## Uso

Basta incluir o script JavaScript fornecido neste exemplo em sua página HTML e adicionar a classe `.image-container` aos contêineres de imagem que deseja carregar preguiçosamente.

Certifique-se de fornecer uma versão de baixa resolução da imagem inicialmente no atributo `src` e uma versão de alta resolução no atributo `data-src`. O script se encarregará de substituir o `src` pela versão de alta resolução quando necessário.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lazy Load com JavaScript</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 class="title">Montainhas pelo mundo</h1>
    <div class="container">
        <div class="image-container">
            <img data-src="imagem-1-hd.jpg" alt="Montanha 1">
            <p>Montainha 1</p>
        </div>
        <!-- Mais contêineres de imagem aqui -->
    </div>

    <script src="scripts.js" defer></script>
</body>
</html>
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções de bugs, ou qualquer outra adição que possa tornar este exemplo mais útil.

## Licença

Este exemplo está licenciado sob a [Licença MIT](LICENSE).
