import ReadingTime from "reading-time";

const useReadingTime = () => {
  const getReadingTime = (text: string) => {
    return ReadingTime(text, {
      wordsPerMinute: 300,
    }).text;
  };

  return { getReadingTime };
};

export default useReadingTime;
