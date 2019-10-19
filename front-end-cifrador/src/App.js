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
      palabraClave: ""
    };

    this.handlePalabraClaveChange = this.handlePalabraClaveChange.bind(this);
    this.handleTextoChange = this.handleTextoChange.bind(this);
  }

  async handlePalabraClaveChange (nuevaPalabra) {
    await this.setState({palabraClave: nuevaPalabra});
    this.cifrarTexto();
  }

  async handleTextoChange (nuevoTexto) {
    await this.setState({textoIngresado: nuevoTexto});
    this.cifrarTexto();
  }

  cifrarTexto() {
    console.log("Cifrando...");
    
    this.setState({textoCifrado: this.state.textoIngresado});
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
