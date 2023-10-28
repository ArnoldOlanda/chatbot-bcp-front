import React from "react";
import { useForm } from "react-hook-form";
import "@fortawesome/fontawesome-free/css/all.css";

export function Footer() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#161A79] shadow-md rounded px-8 pt-2 pb-0 mb-4"
    >
      <div className="flex">
        <input
          {...register("form_p", { required: true })}
          className="shadow appearance-none border rounded-full py-1 px-10 text-black bg-white mb-3 focus:outline-none focus:shadow-outline w-full h-11"
          id="form_p"
          type="form_p"
          placeholder="¿Como denuncio la perdida de cuenta?"
        />
        {errors?.form_p && <span>Escribe la pregunta</span>}
        <button
          className="h-[50px] w-[50px] bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-3 rounded-full mb-2 focus:outline-none focus:shadow-outline ml-3"
          type="submit"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
}
