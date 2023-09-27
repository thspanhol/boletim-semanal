# ⚜️ Projeto Boletim Semanal ⚜️

O projeto foi desenvolvido com o intuito de utilizar a biblioteca SheetJS para converter uma tabela do Exel para JSON, e utilizar esses dados para gerar um gráfico com o React Google Charts contendo as informações mais relevantes.

### ⚜️ Instalação

Clone o repositório com o comando:
```
git clone https://github.com/thspanhol/boletim-semanal.git
```

Depois entre na pasta do projeto e instale as dependências com o comando:
```
npm install
```

Após isso, para abrir a aplicação basta usar o comando:
```
npm run dev
```
### ⚜️ Como Utilizar

Ao abrir a aplicação será renderizada uma tela com um botão que permite selecionar um arquivo Exel local. Clicando nesse botão a página irá gerar dois gráficos coletando as informações de duas colunas específicas da tabela, que foram predefinidas no código.

## ⚜️ Possíveis alterações

* Alterando a prop "titulo" utilizada no componente GetJason é possível alterar qual coluna da tabela será utilizada para elaboração dos gráficos.

## ⚜️ Construído com

* React - O framework usado para desenvolver os componentes JSX
* CSS - Para estilização da página
* Vite - Para a construção do projeto
* SheetJS - Para converter os dados do Exel para JSON
* React Google Charts - Para gerar os gráficos

## ⚜️ Autor

* **Thales Spanhol** - [Perfil no GitHub](https://github.com/thspanhol)

---