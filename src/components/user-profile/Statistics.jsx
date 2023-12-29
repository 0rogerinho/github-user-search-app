export const Statistics = ({ text, valor }) => {
  return (
    <div>
      <p className="text-base font-extrabold">{text}</p>
      <p className="font-medium text-center text-[#021737] dark:text-[#ffffff] md:text-[1.375rem]">
        {valor}
      </p>
    </div>
  );
};
