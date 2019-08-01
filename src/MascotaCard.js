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
        this.onSubmitEdit = this.onSubmitEdit.bind(this);
    }

    //handle methonds de la card
    onEdit(){
        this.setState({isEdit:true});
    }
    onSubmitEdit(event){
        event.preventDefault();

        this.props.onSubmitEdit(
            this.nameInputsub.value,
            this.imgInputsub.value,
            this.costInputsub.value,
            this.especieInputsub.value,
            this.edadInputsub.value,
            this.descripInputsub.value,
            this.fechaInputsub.value
        );

        this.setState({isEdit : false});
    }
    //método onDelete 
    onDelete(){
        const {onDelete,id} = this.props;
        
        onDelete(id);
    }

    //termina handle methonds 
    render(){
        const {id,name,especie,
            edad,img, cost, descrip, fecha} = this.props;

        return(
            <div>
                {
                    this.state.isEdit
                    ? ( 
                              <div>
                              
                              <form onSubmit={this.onSubmitEdit}>
                              <input type="hidden" placeholder="name" 
                              ref={nameInputsub => this.nameInputsub = nameInputsub} 
                              defaultValue={name}/>
          
                              <input placeholder="especie" 
                              ref={especieInputsub => this.especieInputsub = especieInputsub}
                              defaultValue={especie} />
          
                              <input type="url" placeholder="urlimagen"
                              ref={imgInputsub => this.imgInputsub =imgInputsub}
                              defaultValue={img} />
          
                              <input type="number" placeholder="costo" 
                              ref={costInputsub => this.costInputsub =costInputsub}
                              defaultValue={cost} />
          
                              <input type="number" placeholder="edad" 
                              defaultValue={edad}
                              ref={edadInputsub => this.edadInputsub =edadInputsub} />
          
                              
                              <input type="date" placeholder="fecha" 
                              defaultValue={fecha}
                              ref={fechaInputsub => this.fechaInputsub =fechaInputsub} />
                              <br></br>
                              <textarea placeholder="descripción"
                              defaultValue={descrip}
                              ref={descripInputsub => this.descripInputsub = descripInputsub}></textarea>
                              <br></br>
          
                              <button>Editar</button>
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
