import React from 'react';
import Texto from "./Texto.js";
import TextoCifrado from "./TextoCifrado.js";
import PalabraClave from "./PalabraClave.js";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      textoIngresado: "",
      textoCifrado: "",
      palabraClave: "Ejemplo"
    };

    this.handlePalabraClaveChange = this.handlePalabraClaveChange.bind(this);
    this.handleTextoChange = this.handleTextoChange.bind(this);
  }

  async handlePalabraClaveChange (nuevaPalabra) {
    await this.setState({palabraClave: nuevaPalabra});
    this.generarAlfabetoCifrado();
  }

  async handleTextoChange (nuevoTexto) {
    await this.setState({textoIngresado: nuevoTexto});
    //this.cifrarTexto();
  }

  generarAlfabetoCifrado() {
    
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let textoCifrado = "";
    const palabraClave = this.state.palabraClave.toLowerCase();
    const textoOriginal = this.state.textoIngresado;

    let palabraClaveRef = "";
    let alfabetoCifrado = [];
    let index = 0;

    for (let i = 0; i < palabraClave.length; i++) {
      let repetida = false;

      for (let j = 0; j < palabraClaveRef.length; j++) {
        if(palabraClave[i] === palabraClaveRef[j]) repetida = true;
      }

      if(!repetida) {
        palabraClaveRef += palabraClave[i];
        index = alfabeto.indexOf(palabraClave[i]);
        alfabetoCifrado.push(alfabeto.splice(index, 1)[0]);
      }
    }

    while (alfabeto.length > 0) {
      if(index > alfabeto.length - 1) index = 0;
      alfabetoCifrado.push(alfabeto.splice(index, 1)[0]);
    }

    console.log(alfabetoCifrado);

    return alfabetoCifrado;
  }

  render () {
    return (
      <div className="App container"> 
        <div className="row">
          <div className="col-12">
            <PalabraClave palabraClave={this.state.palabraClave}
            onPalabraClaveChange={this.handlePalabraClaveChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Texto textoIngresado={this.state.textoIngresado} 
            onPalabraClaveChange={this.handleTextoChange} />
          </div>
          <div className="col-6">
            <TextoCifrado textoCifrado={this.state.textoCifrado} />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
