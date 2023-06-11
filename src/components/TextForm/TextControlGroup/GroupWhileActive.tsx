import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useRestartGame } from "hooks/useRestartGame";
import { FC } from "react";

type Props = {
  time: number;
};

export const GroupWhileActive: FC<Props> = ({ time }) => {
  const restartFunc = useRestartGame(true);
  const handleRestart = () => {
    restartFunc();
  };

  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      className="flex items-center space-x-3"
    >
      {/* restart button */}
      <button className="text-xl" onClick={handleRestart}>
        <Icon
          className="rounded bg-gray-500 p-1 text-2xl text-white"
          icon="solar:restart-bold"
        />
      </button>
      {/* timer */}
      <span className="flex items-center space-x-1 font-bold opacity-60">
        <Icon icon="bx:alarm" />
        <span>
          {Math.floor(time / 60)}:{time % 60 < 10 && 0}
          {time % 60}
        </span>
      </span>
    </motion.div>
  );
};
