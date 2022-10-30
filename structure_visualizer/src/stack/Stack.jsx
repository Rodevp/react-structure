import styles from "./stack.module.css";
import { useState } from "react";
import { Title } from "../components/index";

function Stack() {

  const [stack, setStack] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    setStack([item, ...stack]);
    setItem("")
  };

  const deleteItem = () => {
    const stackCopy = [...stack];
    stackCopy.shift()
    setStack(stackCopy);
    setItem("")
  };

  const handleInput = e => {
    setItem(e.target.value)
  }

  return (
    <div>
      <Title>Estructura de datos STACK</Title>
      <section>
        Una pila (stack en inglés) es una lista ordenada o estructura de datos
        que permite almacenar y recuperar datos, siendo el modo de acceso a sus
        elementos de tipo LIFO (del inglés Last In, First Out, «último en
        entrar, primero en salir»).
      </section>
      <section className="">
        <div>
          <input type="text" value={item} placeholder="Introduce un elemento"  onChange={handleInput}/>
          <button onClick={addItem}>Apilar</button>
          <button onClick={deleteItem}>Desapilar</button>
        </div>
        <div className={styles.stack}>
            {
                stack.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            }
        </div>
      </section>
    </div>
  );
}

export default Stack;
