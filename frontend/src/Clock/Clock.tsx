import { useEffect, useState } from "react";

type ClockProps = {
  timeZone?: string;
};

function Clock(props: ClockProps) {
  const [dateTime, setDateTime] = useState(new Date(Date.now()));

  useEffect(() => {
    const intervalId = setInterval(
      () => setDateTime(new Date(Date.now())),
      1000
    );
    return () => clearInterval(intervalId);
  });

  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const timeZone =
    props.timeZone !== undefined
      ? props.timeZone
      : Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div>
      <h1>{timeZone}</h1>
      <p>{dateTime.toLocaleString(locale, { timeZone: timeZone })}</p>
    </div>
  );
}

export default Clock;
