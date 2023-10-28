import { Bot, BotConfig } from 'react--customizable-chat-bot'


import React, { useState } from 'react';

export default function Images() {
  const imageURL = "/src/assets/back.jpg";
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    console.log('Mensaje enviado: ', message);
    setMessage('');
  };
  const estilo = {
    padding: '20px',
    backgroundColor: 'red',
     
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="bg-cover bg-center h-full w-full" style={{ backgroundImage: `url(${imageURL})` }}>
          <div style={estilo}>
        <div className="border border-gray-300 p-2 rounded w-1/2 ">
        Aquí van los mensajes del chat
      </div>
      <div className="flex mt-4 w-1/2" >
        <input 
          type="text" 
          value={message} 
          onChange={handleInputChange} 
          className="border border-gray-300 p-2 rounded flex-grow"
          placeholder="Escribe tu mensaje aquí"
        />
        <button 
          onClick={handleSendClick} 
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Enviar
        </button>
      </div>
        </div>
        </div>
      </div>
    </>
  );
}

