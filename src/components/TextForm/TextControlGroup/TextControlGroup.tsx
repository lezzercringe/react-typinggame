import { Icon } from "@iconify/react";
import { Dropdown } from "components/Dropdown/Dropdown";
import { motion } from "framer-motion";
import { useTextStore } from "store/useTextStore";
type Props = {
  currentTime: number;
  timerRef: number | null;
};

export const TextControlGroup = ({ currentTime: time, timerRef }: Props) => {
  const loadedTexts = useTextStore((state) => state.loadedTexts).map(
    (text) => ({
      ...text,
      name: `Text ${Number(text.id) + 1}`,
    })
  );

  const setCurrentTextById = useTextStore((state) => state.setTextById);
  const switchText = (value: { name: string; id: string }) => {
    setCurrentTextById(value.id);
  };

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
      {loadedTexts.length > 0 && (
        <Dropdown
          setValue={switchText}
          valueArray={loadedTexts}
          value={loadedTexts[0]}
        />
      )}
    </div>
  );
};
