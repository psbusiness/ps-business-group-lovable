# Validação geral

- [x] Verificar navegação, páginas legais e idiomas com persistência.
- [x] Verificar apresentação, imagens e empresas em telas grandes e pequenas.
- [x] Verificar validação e envio do formulário sem gravar respostas de teste.
- [x] Revisar metadados, consentimento e sinais de erros; registrar limitações.

## Resultado

- PT, ES e EN persistem após recarregar e navegar pelas quatro páginas de conteúdo; 126 chaves pareadas.
- Menu mobile fecha após seleção e Escape; títulos das seções ficam abaixo do menu. Endereços antigos redirecionam para âncoras da home, por isso não precisam integrar o sitemap nem ter metadados próprios.
- Dez empresas e logos carregam durante a rolagem; telas de 390, 768 e 1280 px sem transbordamento horizontal. Apresentação conferida por capturas.
- Formulário rejeita campos vazios; envio interceptado confirma destino e campos Google sem gravar respostas. Falha de rede mostra erro e permite nova tentativa.
- Aceitar e rejeitar cookies atualizam o consentimento; decisão persiste. Metadados das páginas de conteúdo e recursos públicos disponíveis. Nenhum erro de execução capturado no navegador.
- Limitações: recebimento nas respostas do Google Forms não confirmado, pois o envio é no-cors e foi interceptado neste teste; recebimento de eventos no painel GA4 e disponibilidade dos sites externos não verificados. Registros automáticos de build indisponíveis nesta sessão; não foi executado build manual.