import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { criarCliente, getClienteById, updateCliente } from '../../services/clienteService';

const CreateClienteComponente = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cellPhone, setCellPhone] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");

    const [errors, setErrors] = useState({

      name: "",
      email: "",
      cellPhone: "",
      address: "",
      state: "",

    });

    const {id} = useParams();

    const navigator = useNavigate();


    useEffect(() => {
    
    if(id){
    
    getClienteById(id).then((response) =>{
     

      //console.log(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setCellPhone(response.data.cellPhone);
      setAddress(response.data.address);
      setState(response.data.state);



    }).catch((error) => {

   console.error(error);
    });

    }

    }, [id]);

     function saveCliente(event){

        event.preventDefault();

      if(validateForm()){
        const cliente = {name, email, cellPhone,address,state};


        if(id){

          updateCliente(id, cliente).then((response) =>{


            navigator('/clientes')

          }).catch((error) => {

                console.error(error);

          }); 

        } else {

    criarCliente(cliente).then((response) => {

           //console.log(response.data);

           navigator('/clientes')

    }).catch((error) => {

            console.log(error);

    });

    }

        console.log(cliente)


       
  
 }

}

function validateForm(){

  let valid = true;
  const errorsCopy = {...errors}

  if(name.trim()){

    errorsCopy.name = "";

  }else{

    errorsCopy.name = "Campo Nome é obrigatório!!";
    valid = false;
  }

  if(email.trim()){

    errorsCopy.email = "";

  }else{

    errorsCopy.email = "Campo Email é obrigatório!!";
    valid = false;
  }

  if(cellPhone.trim()){

    errorsCopy.cellPhone = "";

  }else{

    errorsCopy.cellPhone = "O Campo Celular é obrigatório!!";
    valid = false;
  }

  if(address.trim()){

    errorsCopy.address = "";

  }else{

    errorsCopy.address = "O Campo Endereço é obrigatório!!";
    valid = false;
  }

  if(state.trim()){

    errorsCopy.state = "";

  }else{

    errorsCopy.state = "O campo Estado é obrigatório!!";
    valid = false;
  }

  setErrors(errorsCopy);
  console.log(errorsCopy)

  return valid;
}

function pageTitle(){


  if(id){
    console.log("ID:", id);

  return <h2 className='text-center'>Atualizar Cliente</h2>

} else {

   return <h2 className='text-center'>Adicionar Cliente</h2>
}

}
  return (

    <div className="container-fluid">

        <div className='row'>
           <div className='card col-md-10 offset-md-1 offset-md-1'>
             {pageTitle()}
              <h3 className='text-center'>Pet Shop Nathanzinho</h3>
                <div className='card-body'>
                  <form>
                    <div className='form-group md-2'>
                      <label className='form-label'>Nome:</label>
                      <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className={`form-control ${errors.name ? 'is-invalid':  ""}`} placeholder='Digite seu Nome'/>
                      {errors.name && (<div className='invalid-feedback'>{errors.name}</div>)}
                    </div>

                    <div className='form-group md-2'>
                      <label className='form-label'>@ Email:</label>
                      <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className={`form-control ${errors.email ? 'is-invalid':  ""}`} placeholder='@ Digite seu Email'/>
                      {errors.email && (<div className='invalid-feedback'>{errors.email}</div>)}
                    </div>

                    <div className='form-group md-2'>
                      <label className='form-label'>Celular:</label>
                      <input type="text" name="cellPhone" onChange={(e) => setCellPhone(e.target.value)} value={cellPhone}  className={`form-control ${errors.cellPhone ? 'is-invalid':  ""}`} placeholder='Digite seu número de Celular'/>
                       {errors.cellPhone && (<div className='invalid-feedback'>{errors.cellPhone}</div>)}
                    </div>
                    <div className='form-group md-2'>
                      <label className='form-label'>Endereço:</label>
                      <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} value={address} className={`form-control ${errors.address ? 'is-invalid':  ""}`} placeholder='Digite seu endereço'/>
                      {errors.address && (<div className='invalid-feedback'>{errors.address}</div>)}
                    </div>
                    <div className='form-group md-2'>
                      <label className='form-label'>Estado:</label>
                      <select name="state" value={state} className={`form-control ${errors.state ? 'is-invalid':  ""}`} onChange={(e) => setState(e.target.value)}>
                             <option value="">-- Selecione o Estado--</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                      </select>
                      {errors.state && (<div className='invalid-feedback'>{errors.state}</div>)}
                    </div><br></br>
                    <button type="button" className="btn btn-success" onClick={saveCliente}><i class="bi bi-save2"></i><br></br>Cadastrar</button>
                  </form>
                </div>

           </div>
        </div>
    </div>

  )

}


export default CreateClienteComponente;