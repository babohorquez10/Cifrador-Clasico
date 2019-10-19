import React from 'react';

class PalabraClave extends React.Component {

    constructor(props) {
        super(props);

        this.handlePalabraClaveChange = this.handlePalabraClaveChange.bind(this);
    }

    handlePalabraClaveChange (e) {
        this.props.onPalabraClaveChange(e.target.value);
    }

    render() {
        return (
            <div>  
                <h3>Palabra Clave: </h3>
                <input type="text" value={this.props.palabraClave} placeholder="Palabra clave..." 
                onChange={this.handlePalabraClaveChange} />
            </div>
          );
    }
  
}

export default PalabraClave;