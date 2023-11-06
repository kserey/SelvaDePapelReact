import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit } = useForm();

    const send = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form className="form" onSubmit={handleSubmit(send)}>

            <input type="text" placeholder="Ingresa tu nombre" {...register("name")} />
            <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresa tu teléfono" {...register("phone")} />

            <button className="send" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contact