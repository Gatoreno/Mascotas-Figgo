import React,{Component} from 'react';
import './App.css';
import MascotaCard from './MascotaCard'
import AddMascota from './AddMascota'

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
  },
  {
    id:2,
    name:'Cachalote',
    especie: 'mamifero',
    edad: 1,
    img: 'https://static.emol.cl/emol50/Fotos/2016/04/22/file_20160422070449.jpg',
    cost: 950000,
    descrip: 'ceteceo de agua salada',
    fecha: '11/05/2019'
  },
  {
    id:23,
    name:'Azul',
    especie: 'mamifero',
    edad: 1,
    img: 'https://s03.s3c.es/imag/_v0/580x300/d/d/a/ballena-azul-efe.jpg',
    cost: 3000000,
    descrip: 'ceteceo de agua salada',
    fecha: '11/05/2019'
  }

];

//bd a setItem y pasarlo como objct
localStorage.setItem('mascotas',JSON.stringify(mascotas));


//clase componente aoo
class App extends Component {


constructor(props){
  super(props);
  //Iniciar estado con la lista de mascotas
  this.state = {
    mascotas:JSON.parse (localStorage.getItem('mascotas'))
  };
// binding de delete
  this.onDelete = this.onDelete.bind(this);
}

//método previo a carga
  componentWillMount(){
   const mascotas =  this.getMascotas();
   this.setState({mascotas});// set estado con lista de mascotas
  }


  //CRuds
  //obtener mascotas lista de mascotas
  getMascotas(){
    return this.state.mascotas
  }
  onAdd(){

  }
  onDelete(id){

    const mascotas = this.getMascotas();
    const filtermasc = mascotas.filter(mascota => {
      return mascota.id !== id;

    });
    console.log(filtermasc)

    this.setState({mascotas:filtermasc}); 
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