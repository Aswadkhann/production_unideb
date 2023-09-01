import React, { useState, useEffect, useRef } from "react";

const Count: React.FC<{ end: number }> = ({ end }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const duration = 2000; // Duration of the counting animation in milliseconds
    const steps = 100; // Number of steps in the animation
    const increment = end / steps; // Calculate increment per step
    const intervalDuration = duration / steps; // Calculate interval duration

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps) {
        setCount((prevCount) => Math.min(prevCount + increment, end));
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [end]);

  return (
    <span ref={countRef} className="text-center text-[50px] font-bold counting">
      {Math.round(count)}
    </span>
  );
};

const CountingNumber: React.FC<{ countText?: string; title: string; end: number; border?: boolean }> = ({
  countText,
  title,
  end,
  border,
}) => {
  return (
    <div
      className={`flex-1 my-5 sm:my-[50px] pb-9 lg:pb-0 sm:pb-10 font-nunito ${
        border && "border-b-2 border-r-0 md:border-r-2 md:border-b-0"
      } text-center items-center justify-center bg-[#FFFFFF]`}
    >
      <div className="flex justify-center items-center text-gray-800">
        <Count end={end} />
        {countText && (
          <span className="text-[40px] font-bold mt-2">{countText}</span>
        )}
      </div>
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default CountingNumber;
