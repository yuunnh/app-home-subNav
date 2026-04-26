import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

type CustomToastProps = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
};

export function CustomToast({ message, isVisible, onClose, duration = 2000 }: CustomToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute left-0 right-0 flex justify-center"
          style={{ bottom: '80px' }}
        >
          <div className="bg-[#333333] rounded-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)]">
            <div className="flex flex-row justify-center">
              <div className="box-border content-stretch flex gap-[4px] items-start justify-center px-[12px] py-[8px]">
                <div className="flex flex-col font-normal justify-center leading-[0] text-[12px] text-center text-nowrap text-white">
                  <p className="leading-[18px] whitespace-pre">{message}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
