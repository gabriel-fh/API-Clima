# Aplicação de Clima

Uma aplicação simples de clima que permite que você insira o nome de uma cidade e obtenha informações sobre o clima atual. Esta aplicação foi desenvolvida utilizando HTML, SASS e JavaScript, e faz uso da API do OpenWeather para obter os dados meteorológicos.
Nesse projeto foi colocado em prática pela primeira vez conhecimentos de `fetch, async/await ` para fazer as chamadas assíncronas à API do OpenWeather e `tratamento de erros` para lidar com casos em que a cidade pesquisada não é encontrada ou ocorre algum problema durante a obtenção dos dados meteorológicos

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Insira o nome de uma cidade na caixa de pesquisa.
- Após a pesquisa, a aplicação irá retornar as seguintes informações sobre a cidade pesquisada:
  - Nome da cidade
  - Bandeira do país
  - Temperatura atual
  - Temperatura mínima
  - Temperatura máxima
  - Sensação térmica
  - Umidade
  - Velocidade do vento em km/h
- Se a cidade pesquisada não for encontrada, a aplicação exibirá uma mensagem informando que a cidade não foi encontrada.

## Como usar

### Pré-requisitos

Antes de executar a aplicação, certifique-se de ter os seguintes requisitos atendidos:

- Conta no OpenWeather: Você precisará criar uma conta no OpenWeather para obter uma chave de API. A chave de API é necessária para fazer as chamadas à API e obter os dados meteorológicos. Pode levar algumas horas para ativação da chave após criar sua conta.
- Chave de API do OpenWeather: Após ativar sua chave de API no OpenWeather, copie a chave fornecida.
- Editor de código: Você precisará de um editor de código para modificar a chave de API no arquivo script.js.

### Configuração

Siga as etapas abaixo para configurar e executar a aplicação:

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `script.js` no seu editor de código.
3. Na variável `apiWeatherKey`, substitua o valor `INSIRA_SUA_CHAVE_AQUI` pela chave de API fornecida pelo OpenWeather. Não esqueça de que a a chave da API deve ficar entre aspas.
4. Salve o arquivo `script.js`.

### Executando a Aplicação

Para executar a aplicação, siga as etapas abaixo:

1. Abra o arquivo `index.html` em seu navegador de preferência.
2. Insira o nome de uma cidade na caixa de pesquisa.
3. A aplicação exibirá as informações do clima para a cidade pesquisada, ou uma mensagem informando que a cidade não foi encontrada.

## Observações

- Certifique-se de que sua chave de API do OpenWeather está configurada corretamente no arquivo `script.js` antes de executar a aplicação.
- Lembre-se de que o OpenWeather pode levar algumas horas para ativar sua chave de API após a criação da conta.

Aproveite a aplicação de clima e fique sempre informado sobre as condições meteorológicas da sua cidade!

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma nova issue para relatar problemas, sugestões ou propor melhorias. Se desejar, também pode enviar um pull request com suas contribuições.

## Licença
Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
