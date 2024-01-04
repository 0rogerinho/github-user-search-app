export const Information = ({ srcImg, name, lastActive, href, text }) => {
  const date = new Date(lastActive);
  return (
    <section className="flex text-[#010B1B] dark:text-[#ffffff] gap-[20px] md:gap-10 mb-[1.875rem]">
      <img
        className="block w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full"
        src={`${srcImg}`}
        alt="Avatar"
      />
      <div className="text-[.8125rem] md:text-[1rem]">
        <h1 className="font-bold md:text-[1.625rem]">{name}</h1>
        <a className=" text-blue" href={href}>
          @{text}
        </a>
        <p>
          Joined{' '}
          {lastActive &&
            new Intl.DateTimeFormat('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            }).format(date)}
        </p>
      </div>
    </section>
  );
};
