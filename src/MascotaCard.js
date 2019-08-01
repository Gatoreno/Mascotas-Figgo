import React,{Component} from 'react';
import './App.css';


class MascotaCard extends Component {

    constructor(props){
        super(props);

        //instancia de estado de edición

        this.state = {
            isEdit: false
        };

        //instancía de on Delete
        this.onDelete = this.onDelete.bind(this);
        //init de on Edit
        this.onEdit = this.onEdit.bind(this); 
        // la verdad es que tengo algunas dudas de este bind
    }
    onEdit(){
        this.setState({isEdit:true});
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
            <div>
                {
                    this.state.isEdit
                    ? ( 
                              <div>
                              
                              <form onSubmit={this.onSubmit}>
                              <input type="text" placeholder="name" 
                              ref={nameInput => this.nameInput = nameInput} />
          
                              <input placeholder="especie" 
                              ref={especieInput => this.especieInput = especieInput} />
          
                              <input type="url" placeholder="urlimagen"
                              ref={imgInput => this.imgInput =imgInput} />
          
                              <input type="number" placeholder="costo" 
                              ref={costInput => this.costInput =costInput} />
          
                              <input type="number" placeholder="edad" 
                              ref={edadInput => this.edadInput =edadInput} />
          
                              
                              <input type="date" placeholder="fecha" 
                              ref={fechaInput => this.fechaInput =fechaInput} />
                              <br></br>
                              <textarea placeholder="descripción"
                              ref={descripInput => this.descripInput = descripInput}></textarea>
                              <br></br>
          
                              <button>Añadir</button>
                          </form>
                              </div>
                    ) : (
                        <div>
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
                            <button onClick={this.onEdit} >
                            Editar
                        </button>
                        </div>
                        </div>
                    )
                }
                </div>
                
           
        );
    }
}


export default MascotaCard;
