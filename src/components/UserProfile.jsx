import React from 'react';
import { MapPin, Link, TwitterLogo, Buildings } from '@phosphor-icons/react';
import { user } from './Context/UserData';

const Perfil = ({ srcImg, name, lastActive, link }) => {
  const date = new Date(lastActive);
  return (
    <section className="flex text-[#4B6A9B] dark:text-[#ffffff] gap-[20px] md:gap-10 mb-[1.875rem]">
      <img
        className="block w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full"
        src={`${srcImg}`}
        alt="Avatar"
      />
      <div className="text-[.8125rem] md:text-[1rem]">
        <h1 className="font-bold text-[#2B3442] dark:text-[#ffffff] md:text-[1.625rem]">
          {name}
        </h1>
        <a className=" text-blue" href="#">
          {link}
        </a>
        <p>
          Joined{' '}
          {new Intl.DateTimeFormat('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }).format(date)}
        </p>
      </div>
    </section>
  );
};
const Dados = ({ text, valor }) => {
  return (
    <div>
      <p>{text}</p>
      <p className="font-bold text-center text-[#2B3442] dark:text-[#ffffff] md:text-[1.375rem]">
        {valor}
      </p>
    </div>
  );
};
const UserProfile = () => {
  const { data } = React.useContext(user);
  if (data)
    return (
      <div className=" flex justify-center text-[#4B6A9B] dark:text-[#ffffff]">
        <main className="bg-[#ffffff] dark:bg-lightGray w-[20.4375rem] md:w-[35.8125rem] mb-[4.9375rem] p-[2rem] md:p-10 px-6 rounded-xl">
          <Perfil
            srcImg={data.avatar_url}
            name={data.name}
            link="@octocat"
            lastActive={data.created_at}
          />

          <p className="text-[.8125rem] md:text-[.9375rem] w-[17.4375rem] md:w-[30.8125rem] mb-6">
            {data.bio == null
              ? 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros'
              : data.bio}
          </p>

          <div className=" bg-[#EDF1FF] dark:bg-gray px-[.9375rem] py-[1.125rem] rounded-xl flex justify-center gap-4 md:gap-20 mb-6 text-[.6875rem] md:text-[.8125rem]">
            <Dados text="Repos" valor={data.public_repos} />
            <Dados text="Followers" valor={data.followers} />
            <Dados text="Following" valor={data.following} />
          </div>
          <ul className="w-[11.5625rem] md:w-[30.8125rem] text-[.8125rem] md:text-[1rem] flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-5">
            <li>
              <MapPin
                size={22}
                weight="bold"
                className="inline mr-[.625rem] md:mr-[1rem]"
              />
              <a href={data.location === null ? '#' : data.location}>
                {data.location === null ? 'Not Available' : data.location}
              </a>
            </li>
            <li>
              <Link size={22} weight="bold" className="inline mr-[10px]" />
              <a href={data.html_url}>{data.html_url}</a>
            </li>

            <li>
              <TwitterLogo
                size={22}
                weight="bold"
                className="inline mr-[10px] md:mr-[1rem] transition-opacity"
              />
              <a href="">
                {data.twitter_username === null
                  ? 'Not Available'
                  : data.twitter_username}
              </a>
            </li>
            <li>
              <Buildings
                size={22}
                weight="bold"
                className="inline mr-[10px] md:mr-[1rem] transition-opacity"
              />
              <a href="">
                {data.company === null ? 'Not Available' : data.company}
              </a>
            </li>
          </ul>
        </main>
      </div>
    );
};

export default UserProfile;
