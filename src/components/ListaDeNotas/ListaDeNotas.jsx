import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
export default class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }
  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.bind(this));
  }
  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasNotas.bind(this));
  }
  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }
  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                indice={index}
                deletarNota={this.props.deletarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
