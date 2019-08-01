import React,{Component} from 'react';
import './App.css';

class AddMascota extends Component{

constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this);

}

onSubmit(event){
    event.preventDefault();
    /*console.log(
        this.nameInput.value,
        this.especieInput.value,
        this.costInput.value,
        this.imgInput.value,
        this.dateInput.value
    );*/

   
    this.props.onAdd(
        this.nameInput.value,
        this.imgInput.value,
        this.costInput.value,
        this.especieInput.value,
        this.edadInput.value,
        this.descripInput.value,
        this.fechaInput.value
    );

    this.nameInput.value = '';
    this.imgInput.value = '';
    this.costInput.value = '';
    this.especieInput.value = '';
    this.edadInput.value= '';
    this.descripInput.value= '';
    this.fechaInput.value= '';
//https://www.ecotiendabuceo.es/upload/stblog/1/5/30/530large.jpg

}

    render(){
        return(
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

                <hr></hr>
            </div>
        );
    }

}


export default AddMascota;