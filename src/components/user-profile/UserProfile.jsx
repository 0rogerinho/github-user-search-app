//icons
import { BiMap } from 'react-icons/bi';
import { BsBuildings } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
//context
import { useData } from '../../Context/DataProvider';
//components
import { Information, Statistics, SocialProfile } from '../user-profile';

const dataOctocat = {
  name: 'The Octocat',
  avatar_url: 'https://avatars.githubusercontent.com/u/65123575?v=4',
  html_url: 'https://github.com/octocat',
  created_at: '2011-01-25T18:44:36Z',
  public_repos: '8',
  following: '9',
  followers: '11625',
  bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, perferendis laborum dolorum voluptate maxime dicta reprehenderit tempore alias expedita, optio molestias delectus quis ab quia! Ipsum error amet in dolorem!',
  location: 'San Francisco',
  twitter_username: null,
  company: '@github',
};

export const UserProfile = () => {
  const { data } = useData();

  const googleMaps = 'https://www.google.com.br/maps/place';

  console.log(data);
  return (
    <div className=" flex justify-center text-[#021737] dark:text-[#ffffff]">
      <main className="bg-[#ffffff] dark:bg-lightGray w-[20.4375rem] md:w-[35.8125rem] mb-[4.9375rem] p-[2rem] md:p-10 px-6 rounded-xl shadow-lg">
        <Information
          srcImg={data ? data?.avatar_url : dataOctocat?.avatar_url}
          name={data ? data?.name : dataOctocat?.name}
          text={data ? data?.name : dataOctocat?.name}
          href={data ? data?.html_url : dataOctocat?.html_url}
          lastActive={data ? data?.created_at : dataOctocat?.created_at}
        />

        <p className="text-[.8125rem] md:text-[.9375rem] w-[17.4375rem] md:w-[30.8125rem] mb-6">
          {data ? data?.bio : dataOctocat.bio}
        </p>

        <div className=" bg-[#EDF1FF] dark:bg-gray px-[.9375rem] py-[1.125rem] rounded-xl flex justify-center gap-4 md:gap-20 mb-6 text-[.6875rem] md:text-[.8125rem]">
          <Statistics
            text="Repos"
            valor={data ? data?.public_repos : dataOctocat.public_repos}
          />
          <Statistics
            text="Followers"
            valor={data ? data?.followers : dataOctocat.followers}
          />
          <Statistics
            text="Following"
            valor={data ? data?.following : dataOctocat.following}
          />
        </div>
        <ul className="text-[.8125rem] md:text-[1rem] flex flex-row flex-wrap gap-x-[10%]">
          <div>
            <SocialProfile
              icon={<BiMap size={22} />}
              href={data?.location && `${googleMaps}/${data?.location}`}
              text={data?.location}
            />
            <SocialProfile
              icon={<FiTwitter size={22} />}
              href={data?.twitter_username}
              text={
                data ? data?.twitter_username : dataOctocat.twitter_username
              }
            />
          </div>

          <div>
            <SocialProfile
              icon={<BsBuildings size={22} />}
              text={data ? data?.company : dataOctocat.company}
            />
          </div>
        </ul>
      </main>
    </div>
  );
};
