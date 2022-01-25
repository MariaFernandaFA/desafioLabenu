import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    nomeDaLoteria: ""
  };

  resultadoLoteria = () => {
    const url = "https://brainn-api-loterias.herokuapp.com/api/v1/loterias";
    axios.get(url, {
      [
        {
          "id": 0,
          "nome": "mega-sena"
        },
        {
          "id": 1,
          "nome": "quina"
        },
        {
          "id": 2,
          "nome": "lotofácil"
        },
        {
          "id": 3,
          "nome": "lotomania"
        },
        {
          "id": 4,
          "nome": "timemania"
        },
        {
          "id": 5,
          "nome": "dia de sorte"
        }
      ]
    }, {
      access-control-allow-origin: * 
      connection: keep-alive 
      content-length: 169 
      content-type: application/json; charset=utf-8 
      date: Tue,25 Jan 2022 00:27:57 GMT 
      etag: W/"a9-Acu/03IResJ0XdX/xNstYQiohl4" 
      server: Cowboy 
      via: 1.1 vegur 
      x-powered-by: Express 
    })
  }

 