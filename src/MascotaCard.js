import React,{Component} from 'react';
import './App.css';


class MascotaCard extends Component {

    constructor(props){
        super(props);
        //instancía de on Delete
        this.onDelete = this.onDelete.bind(this);
    }

    //método onDelete 
    onDelete(){
        const {onDelete,id} = this.props;
        
        onDelete(id);
    }

    render(){
        const {id,name,especie,
            edad,img, cost, descrip, fecha} = this.props;

        return(
            <div key={id}>
            <b>{name}</b> <br></br>
            <img width="120px" alt="eq" src={(img)} />
            <br></br>
            <span> $ {cost} .00 mx</span>
              <br></br>
              <span>especie - {especie}</span> <br></br>
              <span>edad - {edad} años</span><br></br>
              <span>descripción - {descrip}</span><br></br>
              <span>fecha de ingreso - {fecha}</span><br></br>
             
              
              <div>
                <button onClick={this.onDelete} >
                    Borrar
                </button>
                <input type="button" value="editar" />
              </div>

            </div>
        );
    }
}


export default MascotaCard;
