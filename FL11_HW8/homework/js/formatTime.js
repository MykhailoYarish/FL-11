function formatTime(inputedMinutes) {
  if (inputedMinutes < 0) {
    return false;
  }

  const minutesInDay = 1440;
  const minutesInHour = 60;
  const days = parseInt(inputedMinutes / minutesInDay);
  const hours = parseInt(
    (inputedMinutes - days * minutesInDay) / minutesInHour
  );
  const minutes = inputedMinutes % 60;
  const time = `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;

  return time;
}

formatTime(120);
