import React, { useEffect, useState } from 'react'
import { deleteCliente, getAllClientes } from '../../services/clienteService';
import { useNavigate } from 'react-router-dom';

const ListaClientes = () => {

  const [clientes, setClientes] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {

    listarClientes();

  }, []);

  function listarClientes(){

    getAllClientes().then((reponse) =>{
  
     // console.log(reponse.data);
      setClientes(reponse.data);

    }).catch((error) =>{

        console.log(error);

    });

  }

 

  function addNewCliente(){

    navigator('/addClientes');

  }

  function atualizarCliente(id){

  navigator(`/atualizarCliente/${id}`)

  }

  function removerCliente(id){

    deleteCliente(id).then((response) => {

   console.log(response.data);
   listarClientes();

    }).catch((error) => {

      console.log(error);

    });

    
  }

  return (
    
    <div>
      <h2 style={{ textAlign: 'center' }}>Lista de Clientes</h2>
       <br></br> 
      <button className='btn btn-success' onClick={addNewCliente}><i class="bi bi-save"></i>Adicionar Cliente</button>
      <br></br><br></br>
      
      <table className="table table-striped-columns table-hover table-bordered">
        <thead>
          <tr>
            
            <th>Id:</th>
            <th>Nome:</th>
            <th>Email:</th>
            <th>Celular:</th>
            <th>Endereço:</th>
            <th>Estado:</th>
            <th>Atualizar</th>
            <th>Excluir</th>
            
          </tr>
        </thead>
        <tbody>
            {clientes.map((cliente) => (

            
          <tr key = {cliente._id}>
            
            <td>{cliente._id}</td>
            <td>{cliente.name}</td>
            <td>{cliente.email}</td>
            <td>{cliente.cellPhone}</td>
            <td>{cliente.address}</td>
            <td>{cliente.state}</td>
            <td><button class="btn btn-warning"  onClick={() => atualizarCliente(cliente._id)}><i class="bi bi-pen"></i>Atualizar</button></td>
            <td><button style={{marginLeft: '10px'}} class="btn btn-danger" onClick={() => removerCliente(cliente._id)}  ><i class="bi bi-trash"></i> Excluir</button></td>
          </tr>
          ))}

        </tbody>  
      </table>
    </div>
  )
}

export default ListaClientes
