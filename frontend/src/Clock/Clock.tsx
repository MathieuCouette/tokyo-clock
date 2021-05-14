import { useEffect, useState } from "react";

type ClockProps = {
  backendUrl?: string;
};

function Clock(props: ClockProps) {
  const [dateTime, setDateTime] = useState(new Date(Date.now()));

  useEffect(() => {
    const ms = 1000 - dateTime.getMilliseconds();
    const intervalId = setInterval(() => setDateTime(new Date(Date.now())), ms);
    return () => clearInterval(intervalId);
  });

  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const [timeZone, setTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  useEffect(() => {
    if (props.backendUrl !== undefined) {
      fetch(props.backendUrl + "/").then((response) =>
        response.json().then((data) => setTimeZone(data.timeZone))
      );
    }
  }, [props.backendUrl]);

  return (
    <div>
      <h1>{dateTime.toLocaleString(locale, { timeZone: timeZone })}</h1>
      <p>{timeZone}</p>
    </div>
  );
}

export default Clock;
