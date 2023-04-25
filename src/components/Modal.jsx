import React from "react";

const Modal = ({isShowForm, setIsShowForm, handleSubmit, register, submit, 
reset, setIsUserIdToEdit, isUserIdToEdit, errors}) => {
  const handleClickCloseModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
      image_url: "",
    })
    setIsUserIdToEdit()
  };

  return (
    <section
      className={`fixed top-0 left-0 bottom-0 right-0 
    bg-black/40 flex justify-center items-center transition-opacity
    ${isShowForm ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-4 grid gap-4 w-[300px] relative"
      >
        <h3 className=" text-2xl font-bold">
          {isUserIdToEdit ? "Editar usuario" : "Nuevo usuario"}
        </h3>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="first_name">
            Nombre <span className=" text-red-500">*</span>
          </label>
          <input
            className=" border-[1px] rounded-sm bg-gray-100 p-1"
            id="first_name"
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("first_name", {
              required: "Este campo es requerido",
              maxLength: {
                value: 25,
                message: "Maximo 25 caracteres",
              },
              minLength: {
                value: 1,
                message: "Minimo de 1 caracter",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "El nombre no es valido",
              },
            })}
          />
          <span className=" text-red-700" >{errors.first_name && errors.first_name.message}</span>
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="last_name">
            Apellidos <span className=" text-red-500">*</span>
          </label>
          <input
            className=" border-[1px] rounded-sm bg-gray-100 p-1"
            id="last_name"
            type="text"
            placeholder="Ingresa tu apellido"
            {...register("last_name", {
              required: "Este campo es requerido",
              maxLength: {
                value: 25,
                message: "Maximo 25 caracteres",
              },
              minLength: {
                value: 1,
                message: "Minimo de 1 caracter",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "el Apellido no es valido",
              },
            })}
          />
          <span className=" text-red-700">
            {errors.last_name && errors.last_name.message}
          </span>
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="email">
            Correo <span className=" text-red-500">*</span>
          </label>
          <input
            className=" border-[1px] rounded-sm bg-gray-100 p-1"
            id="email"
            type="email"
            placeholder="Ingresa tu correo electronico"
            {...register("email", {
              required: "Este campo es requerido",
              maxLength: {
                value: 25,
                message: "Maximo 25 caracteres",
              },
              minLength: {
                value: 1,
                message: "Minimo de 1 caracter",
              },
              pattern: {
                value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                message: "El email no es valido",
              },
            })}
          />
          <span className=" text-red-700" >{errors.email && errors.email.message}</span>
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="password">
            Contraseña <span className=" text-red-500">*</span>
          </label>
          <input
            className=" border-[1px] rounded-sm bg-gray-100 p-1"
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: "Este campo es requerido",
              maxLength: {
                value: 25,
                message: "Maximo 25 caracteres",
              },
              minLength: {
                value: 1,
                message: "Minimo de 1 caracter",
              },
            })}
          />
          <span className=" text-red-700">{errors.password && errors.password.message}</span>
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            className=" border-[1px] rounded-sm bg-gray-100 p-1"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="image_url">
            URL imagen
          </label>
          <input
            className=" border-[1px] rounded-sm bg-gray-100 p-1"
            id="image_url"
            type="text"
            placeholder="Ingresa tu imagen"
            {...register("image_url", {
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                message: "El formato de url para imágenes es invalido.",
              },
            })}
          />
          <span>
            {errors.image_url && errors.image_url.message}
          </span>
        </div>
        <i
          onClick={handleClickCloseModal}
          className="bx bx-x absolute top-0 right-2 text-2xl hover:text-red-500 cursor-pointer"
        ></i>
        <button
          className="bg-purple-p text-white p-2 
            hover:bg-purple-p/90 transition-colors text-sm"
        >
          {
            isUserIdToEdit ? "Guardar cambios" : "Agregar nuevo usuario"
          }
        </button>
      </form>
    </section>
  );
};

export default Modal;
