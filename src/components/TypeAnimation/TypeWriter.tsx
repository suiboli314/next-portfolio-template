"use client";

import { useState, useEffect } from "react";

type PropType = {
  sequence: string[];
  infinite?: boolean;
  deleteDelay?: number;
  delay?: number;
};

const TypeWriter = (props: PropType) => {
  const { sequence, infinite } = props;
  let { delay, deleteDelay } = props;

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [fulfill, setFulfill] = useState(false);

  const getRandTypingSpeed = (min:number, max: number) => (Math.random() * (max - min) + min);

  if (!delay) delay = getRandTypingSpeed(30, 200);
  if (!deleteDelay) deleteDelay = 20;

  useEffect(() => {
    
    function writing() {
      if (textIndex < sequence[sequenceIndex].length && !fulfill) {
        setCurrentText(
          (prevText) => prevText + sequence[sequenceIndex][textIndex],
        );
        setTextIndex((prevIndex) => prevIndex + 1);
      } else if (textIndex == sequence[sequenceIndex].length && !fulfill) {
        setFulfill(true);
        setCurrentText((prevText) => prevText + " ");
      } else if (textIndex > 0 && fulfill) {
        setCurrentText((prevText) => prevText.substring(0, textIndex));
        setTextIndex((prevIndex) => prevIndex - 1);
      }
    }

    let timeout: NodeJS.Timeout;
    if (!sequence) return;

    if (textIndex != 0 || !fulfill) {
      timeout = setTimeout(
        () => writing(),
        fulfill
          ? deleteDelay
          : textIndex == sequence[sequenceIndex].length
            ? 800 // delay for last word accomplishment
            : delay,
      );
    } else {
      setFulfill(false);
      setTextIndex(0);
      setCurrentText("");
      setSequenceIndex(sequenceIndex < sequence?.length - 1 ? sequenceIndex + 1 : 0);
    }

    return () => clearTimeout(timeout);
  }, [
    textIndex,
    sequenceIndex,
    fulfill,
    delay,
    deleteDelay,
    infinite,
    sequence,
  ]);

  return <span>{currentText}</span>;
};

export default TypeWriter;
