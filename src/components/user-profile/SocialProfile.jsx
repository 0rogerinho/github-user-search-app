export const SocialProfile = ({ icon, href, text }) => {
  return (
    <li>
      <a className={`flex ${href && 'text-blue'} `} href={href} target="_blank">
        <div className={`flex w-10 h-10 text-[#4B6A9B]  font-extrabold`}>
          {icon}
        </div>
        {text ?? 'Not Available'}
      </a>
    </li>
  );
};
