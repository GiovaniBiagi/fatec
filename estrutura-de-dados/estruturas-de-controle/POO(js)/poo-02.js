function Livro(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

//Para instanciar a classe, podemos usar:
var livro = new Livro("title", "pag", "isbn");

//Então podemos acessar suas propriedades e atualizá-las:
console.log(livro.title);
livro.title = "new title";
console.log(livro.title);

//Uma classe também tem funções, e podemos delará-las e usá-las assim:
Livro.prototype.mostrarTitulo = function () {
  console.log(this.title);
};
livro.mostrarTitulo();

//Também podemos declarar funções diretamente na definição da classe:
function Livro(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}
livro.printIsbn();
