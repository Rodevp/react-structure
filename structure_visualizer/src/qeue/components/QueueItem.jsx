import { motion } from "framer-motion";
function QueueItem(props) {

  const { className, item } = props

  return (
    <motion.div
      animate={{
        y: 50,
        x: '-100%'
      }}
      className={className}
    >
      {item}
    </motion.div>
  )
}

export default QueueItem