import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Saludo, Contenedor, Contador } from './App.jsx';

let nombre = "Santiago";
let idioma = prompt("Elige el idioma: es, en, fr");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenedor>
      <Saludo name={nombre} idioma={idioma} />
      <Contador />  {/* Agregado el componente Contador */}
    </Contenedor>
  </StrictMode>,
);