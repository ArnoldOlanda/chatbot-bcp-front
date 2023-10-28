import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import BeatLoader from "react-spinners/BeatLoader";

/**
 * Este elemento representa la parte donde seta el input y el boton de enviar el mensaje.
 * @returns JSX.Element
 */

interface Props {
  handleClickSend: (a: string) => void;
  addMessages: (a: object) => void;
  loading: boolean;
}

export function Footer({ handleClickSend, addMessages, loading }: Props) {
  const [text, seText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text != "") {
          handleClickSend(text);
          addMessages({
            rol: "person",
            msg: text,
          });

          seText("");
        }
      }}
      className="bg-[#161A79] shadow-md rounded px-8 pt-2 pb-0 mb-4"
    >
      <div className="flex">
        <input
          value={text}
          onChange={(e) => {
            seText(e.target.value);
          }}
          className="shadow appearance-none border rounded-full py-1 px-4 text-black bg-white mb-3 focus:outline-none focus:shadow-outline w-full h-11"
          id="form_p"
          type="form_p"
          placeholder="¿Como denuncio la perdida de cuenta?"
        />

        <button
          className="h-[50px] w-[60px] bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-full mb-2 focus:outline-none focus:shadow-outline ml-3"
          type="submit"
        >
          {loading ? (
            <BeatLoader color={"white"} loading={loading} size={8} />
          ) : (
            <i className="fas fa-paper-plane"></i>
          )}
        </button>
      </div>
    </form>
  );
}
