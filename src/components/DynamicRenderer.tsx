// import { componentMap } from "../library/componentMap";

// export default function DynamicRenderer({ component, props }: any) {
//   const Comp = componentMap[component];
//   if (!Comp) return <p>Unknown component.</p>;
//   return <Comp {...props} />;
// }
import { componentMap } from "../library/componentMap";
import { motion } from "framer-motion";

export default function DynamicRenderer({ component, props }: any) {
  const Comp = componentMap[component];
  if (!Comp) return <p>Unknown component</p>;

  return (
    <motion.div
      className="glass p-4 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Comp {...props} />
    </motion.div>
  );
}
