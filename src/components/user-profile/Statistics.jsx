export const Statistics = ({ text, valor }) => {
  return (
    <div>
      <p>{text}</p>
      <p className="font-bold text-center text-[#2B3442] dark:text-[#ffffff] md:text-[1.375rem]">
        {valor}
      </p>
    </div>
  );
};
