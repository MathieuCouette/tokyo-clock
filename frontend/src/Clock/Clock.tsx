type ClockProps = {
  timeZone?: string;
};

function Clock(props: ClockProps) {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const timeZone =
    props.timeZone !== undefined
      ? props.timeZone
      : Intl.DateTimeFormat().resolvedOptions().timeZone;
  const formattedDateTime = new Date(Date.now()).toLocaleString(locale, {
    timeZone: timeZone,
  });

  return (
    <div>
      <h1>{timeZone}</h1>
      <p>{formattedDateTime}</p>
    </div>
  );
}

export default Clock;
