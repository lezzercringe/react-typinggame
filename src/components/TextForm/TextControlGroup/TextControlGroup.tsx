import { useTextStore } from "store/useTextStore";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
type Props = {
  currentTime: number;
  timerRef: number | null;
};

export const TextControlGroup = ({ currentTime: time, timerRef }: Props) => {
  const enteredTextLength = useTextStore((state) => state.enteredText).length;
  return (
    <div className="h-6 w-full">
      {timerRef ? (
        <motion.span
          transition={{ duration: 0.2 }}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="flex items-center space-x-1 font-bold opacity-60"
        >
          <Icon icon="bx:alarm" />
          <span>
            {Math.floor(time / 60)}:{time % 60 < 10 && 0}
            {time % 60}
          </span>
        </motion.span>
      ) : (
        <span></span>
      )}
    </div>
  );
};
