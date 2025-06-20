export function formatDateToLong(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();

  if (isNaN(day)) {
    return "Invalid date";
  }
  const getOrdinal = (n: number) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${day}${getOrdinal(day)} of ${month} ${year}`;
}
