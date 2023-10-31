//icons
import { BiMap } from 'react-icons/bi';
import { BsBuildings } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
//context
import { useData } from '../../Context/DataProvider';
//components
import { Information, Statistics, SocialProfile } from '../user-profile';

export const UserProfile = () => {
  const { data } = useData();

  const googleMaps = 'https://www.google.com.br/maps/place';

  return (
    <div className=" flex justify-center text-[#4B6A9B] dark:text-[#ffffff]">
      <main className="bg-[#ffffff] dark:bg-lightGray w-[20.4375rem] md:w-[35.8125rem] mb-[4.9375rem] p-[2rem] md:p-10 px-6 rounded-xl">
        <Information
          srcImg={data?.avatar_url}
          name={data?.name}
          text={data?.name}
          href={data?.html_url}
          lastActive={data?.created_at}
        />

        <p className="text-[.8125rem] md:text-[.9375rem] w-[17.4375rem] md:w-[30.8125rem] mb-6">
          {data?.bio ??
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros'}
        </p>

        <div className=" bg-[#EDF1FF] dark:bg-gray px-[.9375rem] py-[1.125rem] rounded-xl flex justify-center gap-4 md:gap-20 mb-6 text-[.6875rem] md:text-[.8125rem]">
          <Statistics text="Repos" valor={data?.public_repos} />
          <Statistics text="Followers" valor={data?.followers} />
          <Statistics text="Following" valor={data?.following} />
        </div>
        <ul className="text-[.8125rem] md:text-[1rem] flex flex-row flex-wrap gap-x-[10%]">
          <div>
            <SocialProfile
              icon={<BiMap size={22} />}
              href={data?.location && `${googleMaps}${data?.location}`}
              text={data?.location}
            />
            <SocialProfile
              icon={<FiTwitter size={22} />}
              href={data?.twitter_username}
              text={data?.twitter_username}
            />
          </div>

          <div>
            <SocialProfile
              icon={<BsBuildings size={22} />}
              href={data?.company}
              text={data?.company}
            />
          </div>
        </ul>
      </main>
    </div>
  );
};
