import { motion } from "framer-motion";
function QueueItem(props) {

  const { className, item } = props

  return (
    <motion.div
      className={className}
    >
      {item}
    </motion.div>
  )
}

export default QueueItem