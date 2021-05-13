import { useEffect, useState } from "react";

type ClockProps = {
  timeZone?: string;
};

function Clock(props: ClockProps) {
  const [dateTime, setDateTime] = useState(new Date(Date.now()));

  useEffect(() => {
    const ms = 1000 - dateTime.getMilliseconds();
    const intervalId = setInterval(() => setDateTime(new Date(Date.now())), ms);
    return () => clearInterval(intervalId);
  });

  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const timeZone =
    props.timeZone !== undefined
      ? props.timeZone
      : Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div>
      <h1>{dateTime.toLocaleString(locale, { timeZone: timeZone })}</h1>
      <p>{timeZone}</p>
    </div>
  );
}

export default Clock;
