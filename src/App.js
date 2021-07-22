import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  /* criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }
  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState(arrayNotas);
  }
  adicionarCategoria(novaCategoria) {
    const novoArrayCategorias = [...this.state.categorias, novaCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategorias };
    this.setState(novoEstado);
  } */
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <ListaDeNotas
            deletarNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
