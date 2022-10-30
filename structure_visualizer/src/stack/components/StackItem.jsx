import { motion } from "framer-motion";

function StackItem(props) {
  const { item, className } = props;

  return (
    <motion.div
      className={className}
      animate={{ rotate: [0, 3, -3, 0] }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {item}
    </motion.div>
  );
}

export default StackItem;
