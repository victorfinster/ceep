import React, { Component } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete.svg";
export default class CardNota extends Component {
  deletar() {
    const indice = this.props.indice;
    this.props.deletarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img alt="Delete" src={deleteSVG} onClick={this.deletar.bind(this)} />
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}
