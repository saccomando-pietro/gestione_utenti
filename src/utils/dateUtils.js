export const getVisibleDates = (startDateStr, totalDays) => {
  const start = new Date(startDateStr);
  const dates = [];

  for (let i = 0; i < totalDays; i++) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);
    dates.push(current.toISOString().split("T")[0]);
  }

  return dates;
};

export const daysBetween = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
};
