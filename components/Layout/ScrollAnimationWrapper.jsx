import { motion } from 'framer-motion';

export default function ScrollAnimationWrapper({
  children,
  className,
  onClick,
  ...props
}) {
  return (
    <motion.div
      onClick={() => onClick()}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
