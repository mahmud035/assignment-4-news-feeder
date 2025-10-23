const getCurrentDate = () => {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedDate = formatter.format(now);
  return formattedDate;
};

const getFormattedDate = (timestamp) => {
  const localDate = new Date(timestamp);
  const now = new Date();

  // Calculate the difference in milliseconds
  const timeDiff = now - localDate;
  const diffInHours = Math.abs(timeDiff / (1000 * 60 * 60));

  if (diffInHours < 24) {
    const hoursAgo = Math.floor(diffInHours);
    return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  } else if (diffInHours >= 24 && diffInHours < 48) {
    return 'Yesterday';
  } else {
    // Format the converted date
    const formatter = new Intl.DateTimeFormat(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const { day, month, year } = formatter
      .formatToParts(localDate)
      .reduce((acc, part) => {
        acc[part.type] = part.value;
        return acc;
      }, {});

    return `${day} ${month} ${year}`;
  }
};

export { getCurrentDate, getFormattedDate };
