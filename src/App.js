import React,{Component} from 'react';
import './App.css';
import MascotaCard from './MascotaCard'

//base de datos súper local XD
const mascotas =[
  {
    id:1,
    name:'Charal',
    especie: 'pez',
    edad: 1,
    img: 'https://static.inaturalist.org/photos/6286535/medium.jpeg?1487134259',
    cost: 1,
    descrip: 'charal de agua dulce',
    fecha: '11/05/2019'
  }

];

//bd a setItem y pasarlo como objct
localStorage.setItem('mascotas',JSON.stringify(mascotas));


//clase componente aoo
class App extends Component {


constructor(props){
  super(props);
  this.state = {
    mascotas: []
  };

  this.onDelete = this.onDelete.bind(this);
}

//método previo a carga
  componentWillMount(){
   this.getMascotas();
  }


  //CRuds
  //obtener mascotas static db
  getMascotas(){
    const mascotas = JSON.parse (localStorage.getItem('mascotas'));

    this.setState({mascotas});
  }
  
  onDelete(id){

    alert(id);
  }

  //termina Cruds
  //render u.u_-
    render(){
      return (
        <div className="App">
        <h1>
            Mascotas de Figgo
        </h1>
              {
                this.state.mascotas.map(mascota => {
                    return(
                        <MascotaCard 
                        name={mascota.name}
                        {...mascota}
                        onDelete={this.onDelete}
                        >
                        
                        </MascotaCard>
                      )
                })
              }
        </div>
      );
    }
}


//exportar componente a vista principal
export default App;


/*

<div key={mascota.id}>
                      <img width="120px" alt="eq" src={(mascota.img)} />
                      <br></br>
                       <b>{mascota.name}</b>
                        <br></br>
                        <span>especie - {mascota.especie}</span> <br></br>
                        <span>edad - {mascota.edad}</span><br></br>
                        <span>descripción - {mascota.descrip}</span>
                        
                        <div>
                          <input type="button" value="borrar" />
                          <input type="button" value="editar" />
                        </div>

                      </div>
*/