import { useEffect, useState } from "react";

function CountdownTimer({ initialMinutes, startTimer }) {
  const [time, setTime] = useState(initialMinutes * 60); // زمان به ثانیه

  useEffect(() => {
    let timerId;

    if (startTimer) {
      timerId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timerId);
            alert('زمان تمام شد!');
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [startTimer]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
    <p>
    زمان باقی مانده برای آزمون  : 
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </p>
  </div>
  );
}
export default CountdownTimer ; 