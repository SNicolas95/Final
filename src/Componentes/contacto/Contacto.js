import React from "react";
import { useForm } from "react-hook-form";
import "./Contacto.css";

const Contacto = () => {
const { register, formState:{ errors}, watch ,handleSubmit } = useForm("");
const onSubmit = (data) =>{ 
  console.log(data);
}

  return (

<div className="container">
<h2> Formulario de registro</h2>

<form className="formulario" onSubmit={handleSubmit(onSubmit)} >


<div className="contenedor-campos">
  <div className="campo">
    <label> Nombre </label>
    <input className="input-text" type="text" {...register('nombre', {
      required:true,
      maxLength:10
    })} />

    {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
    }
    {errors.nombre?.type ==='maxlength' && <p> El campo nombre debe tener menos de 10 caracteres</p>
    }
    
  </div>

  <div className="campo">
    <label> Apellido </label>
    <input className="input-text" type="text" {...register('apellido',{ required:true
    
    })} />
  </div>

  <div className="campo">
    <label> Nombre de usuario </label>
    <input className="input-text" type="text" {...register('nombre-de-usuario',{ required:true
    
    })} />
  </div>

  <div className="campo">
    <label> Contraseña </label>
    <input className="input-text" type="password" {...register('apellido',{ required:true
    
    })} />
  </div>
  
  <div className="campo">
    <label> Email </label>
    <input className="input-text" type="text" {...register('email', {
      pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    })} />


{errors.email?.type === 'pattern' && <p> El formato es incorrecto </p>
    }
  </div>

  <div className="campo">
    <label> Personaje favorito </label>

    <select {...register('sabor')}>
      <option value="Rick"> Rick </option>
      <option value="Morty"> Morty </option>
      <option value="Beth"> Beth </option>
      <option value="Jerry"> Jerry </option>
      <option value="Summer"> Summer </option>

    </select>
    
  </div>

  </div>

  <div className="submit">

  <input className="boton" type="submit" value="Enviar" />

  </div>
  
  

</form>


</div>



);
};

export default Contacto;