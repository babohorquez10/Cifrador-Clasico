import React from 'react';

class Texto extends React.Component {

    constructor (props) {
        super(props);
        this.handlePalabraClaveChange = this.handlePalabraClaveChange.bind(this);
    }

    handlePalabraClaveChange(e) {
        this.props.onPalabraClaveChange(e.target.value);
    }

    render() {
        return (
            <div>  
                <h2>Texto: </h2>
                <textarea rows="10" className="col-12" placeholder="Ingrese el texto a cifrar..." 
                onChange={this.handlePalabraClaveChange} value={this.props.textoIngresado}>
                    
                </textarea>
            </div>
          );
    }
  
}

export default Texto;