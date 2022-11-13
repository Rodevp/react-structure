import { useState } from "react";
import { Title, Description } from "../components/index";
import StackItem from "./components/StackItem";
import styles from "./stack.module.css";

function Stack() {
  const [stack, setStack] = useState([]);

  const addItem = () => {
    setStack([stack.length + 1, ...stack]);
    setItem("");
  };

  const deleteItem = () => {
    const stackCopy = [...stack];
    stackCopy.shift();
    setStack(stackCopy);
  };

  return (
    <div>
      <Title>Estructura de datos STACK 📚</Title>
      <Description>
        Una pila (stack en inglés) es una lista ordenada o estructura de datos
        que permite almacenar y recuperar datos, siendo el modo de acceso a sus
        elementos de tipo LIFO (del inglés Last In, First Out, «último en
        entrar, primero en salir»).
      </Description>
      <section className={styles.playground}>
        <div className={styles.actions}>
          <div>
            <button
              onClick={addItem}
              className={styles.button}
              disabled={stack.length === 5 ? true : false}
            >
              Apilar
            </button>
            <button onClick={deleteItem} className={styles.button}>
              Desapilar
            </button>
          </div>
        </div>
        <div className={styles.stack}>
          {stack.map((item) => {
            return (
              <StackItem className={styles.stackItem} key={item} item={item} />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Stack;
