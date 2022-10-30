
import { useState, useId } from "react";
import { Title } from "../components/index";
import StackItem from "./components/StackItem";
import styles from "./stack.module.css";


function Stack() {

  const [stack, setStack] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    setStack([item, ...stack]);
    setItem("");
  };

  const deleteItem = () => {
    const stackCopy = [...stack];
    stackCopy.shift();
    setStack(stackCopy);
    setItem("");
  };

  const handleInput = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <Title>Estructura de datos STACK 📚</Title>
      <section>
        Una pila (stack en inglés) es una lista ordenada o estructura de datos
        que permite almacenar y recuperar datos, siendo el modo de acceso a sus
        elementos de tipo LIFO (del inglés Last In, First Out, «último en
        entrar, primero en salir»).
      </section>
      <section className={styles.playground}>
        <div className={styles.actions}>
          <input
            type="text"
            value={item}
            placeholder="Introduce un elemento"
            onChange={handleInput}
            className={styles.input}
          />
          <button onClick={addItem} className={styles.button}>
            Apilar
          </button>
          <button onClick={deleteItem} className={styles.button}>
            Desapilar
          </button>
        </div>
        <div className={styles.stack}>
          {
            stack.map( item => {
            return <StackItem className={styles.stackItem} key={item} item={item} />
            })
          }
        </div>
      </section>
    </div>
  );
}

export default Stack;
