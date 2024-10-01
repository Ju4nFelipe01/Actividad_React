import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

// 1,2 componente saludo
export function Saludo(props) {
  let mensaje;

  switch (props.idioma) {
    case 'es':
      mensaje = `Bienvenido ${props.name}, encantados de tenerte aquí.`;
      break;
    case 'en':
      mensaje = `Welcome ${props.name}, we're glad to have you here.`;
      break;
    case 'fr':
      mensaje = `Bienvenue ${props.name}, ravi de vous avoir ici.`;
      break;
    default:
      mensaje = `Bienvenido ${props.name}, encantados de tenerte aquí.`;
  }

  return <h1 className='titulo'>{"1,2 - " + mensaje}</h1>;
}

// 3 props.children
export function Contenedor(props) {
  return (
    <div style={{ border: '2px solid black', padding: '16px', borderRadius: '8px' }}>
      {props.children}
    </div>
  );
}

// 4 Componente Contador
export function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}
 