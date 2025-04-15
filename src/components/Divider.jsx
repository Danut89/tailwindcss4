import React from 'react';
import { motion } from 'framer-motion';

const Divider = () => {
  return (
    <div className="flex justify-center my-16">
      <div className="relative flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
            initial={{ opacity: 0.4, scale: 0.9 }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.2, 0.9] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Divider;



