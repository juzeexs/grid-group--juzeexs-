# Projeto: Treinamento de Fluxo Logístico com Drag and Drop

## Lógica Adotada
Usamos HTML para estrutura, CSS para aparência e JavaScript para lógica do Drag and Drop e validação da ordem.

## Dificuldades
- Aprender a manipular drag and drop sem bibliotecas externas.
- Garantir que os elementos não se repitam na área de destino.

## Soluções
- Filtrar os filhos da dropzone usando `filter` e `id`.
- Usar `JSON.stringify` para comparar as ordens corretamente.

Como Usar
Arraste os itens para a área de destino na ordem correta e clique em "Verificar Ordem".
