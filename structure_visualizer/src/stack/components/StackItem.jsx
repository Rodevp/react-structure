import { motion } from "framer-motion";
import useRandomColor from "../../hooks/useRandomColor";

function StackItem(props) {
  const { item, className } = props;
  const color =  useRandomColor()

  return (
      <motion.div
        className={className}
        animate={{ rotate: [0, 3, -3, 0], x: [-20, 30, 0], y: [-20, 0] }}
        transition={{ ease: "easeOut", duration: 1 }}
        style={{
          backgroundColor: color
        }}
      >
        {item}
      </motion.div>
  );
}

export default StackItem;
