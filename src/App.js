import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 50%, #0f574e 100%);
  background-size: 450px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem; 
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black; 
  transition: background-size .8s ease;

  :hover{
    cursor:pointer;
    background-size: 550px;
  }
`;



function App() {

  //state para las frases

  const[frase, guardarFrase] = useState({});

  const consultarAPI = async ()=>{

    /* FETCH COMO PROMESAS
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //fetch funciona con promises
    //console.log(api); se ve como resultado promise {<pending>}. le falta then
    const resultado = api.then(respuesta => respuesta.json());
    resultado.then( frase => console.log(frase));

    */

  //FETCH CON ASYNC AWAIT

  const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  console.log(api); //con await retorna la response
  const resultado = await api.json();
  guardarFrase(resultado[0]);

  }

  //consultar una frase inicialmente

  useEffect( () => {
    consultarAPI()
  }, []);

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />

      <Boton
        onClick={consultarAPI}
      >Frases de Breaking Bad</Boton>
    </Contenedor>
  );
}

export default App;
