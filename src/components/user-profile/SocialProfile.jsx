export const SocialProfile = ({ icon, href, text }) => {
  return (
    <li>
      <a
        className={`flex text-[#021737] dark:text-[#ffffff] ${
          href && 'text-blue'
        } `}
        href={href}
        target="_blank"
      >
        <div className={`flex w-10 h-10 font-extrabold`}>{icon}</div>
        <p>{text ?? 'Not Available'}</p>
      </a>
    </li>
  );
};
