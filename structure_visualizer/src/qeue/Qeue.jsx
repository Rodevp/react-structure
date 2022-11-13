import { useState } from "react";
import QueueItem from "./components/QueueItem";
import { Title } from "../components/index";
import { Description } from "../components/index";
import styles from "./queue.module.css";

function Queue() {
  const [queue, setQueue] = useState([]);

  const addItem = () => {
    setQueue([queue.length + 1, ...queue]);
  };

  const deleteItem = () => {
    const queueCopy = [...queue];
    queueCopy.pop();
    setQueue(queueCopy);
  };

  return (
    <div>
      <Title>Estructura de datos COLA ♣</Title>
      <Description>
        Una cola (queue en inglés) es una estructura de datos compuesta por una
        serie de elementos donde insertamos data al final de la serie, y
        retiramos data por el frente. Es lo que llamamos una estructura FIFO
        (First In, First Out).
      </Description>
      <section className={styles.playground}>
        <div className={styles.actions}>
          <div>
            <button
              onClick={addItem}
              className={styles.button}
              disabled={queue.length === 5 ? true : false}
            >
              Encolar
            </button>
            <button onClick={deleteItem} className={styles.button}>
              Desacolar
            </button>
          </div>
        </div>
        <div className={styles.queue}>
          {queue.map((item) => {
            return (
              <QueueItem className={styles.queueItem} key={item} item={item} />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Queue;
