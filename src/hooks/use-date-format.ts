import dayjs from "@/lib/dayjs";

const useDateFormat = () => {
  const formatDate = (date: string | Date, format = "DD MMM BBBB") => {
    return dayjs(date).format(format);
  };

  const formatToRelative = (date: string | Date) => {
    const now = dayjs();
    const targetDate = dayjs(date);
    const diffInDays = now.diff(targetDate, "day");

    if (diffInDays < 1) return "วันนี้";
    if (diffInDays < 2) return "เมื่อวาน";
    if (diffInDays < 7) return `${diffInDays} วันที่แล้ว`;

    return formatDate(date);
  };

  return { formatDate, formatToRelative };
};

export default useDateFormat;
