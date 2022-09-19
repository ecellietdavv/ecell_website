import Image from "next/image";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Teams() {
  const teams = [
    {
      year: "2022",
      members: [
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
      ],
    },
    {
      year: "2021",
      members: [
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
      ],
    },
    {
      year: "2020",
      members: [
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
        {
          name: "Name Surname",
          designation: "Lorem, ipsum",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          social: {
            email: "xyz@gmail.com",
            phone: "9191919191",
            linkedin: "linked in",
          },
        },
      ],
    },
  ];

  const [activeTeam, setActiveTeam] = useState(0);

  const MemberCard = ({ name, designation, img, social, idx }) => {
    return (
      <div
        className="flex group flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group bg-light border border-dark dark:bg-mid dark:border-light dark:text-white dark:hover:bg-brand-600 hover:bg-brand-600 rounded-xl"
        key={idx}
      >
        <div className="rounded-full overflow-hidden h-32 w-32">
          <Image
            width={128}
            height={128}
            className="object-cover duration-200 group-hover:scale-105 ease-in-out"
            src={img}
            alt={name}
          />
        </div>

        <h1 className="mt-4 text-2xl font-semibold capitalize">
          {name}
        </h1>

        <p className="mt-2 capitalize">
          {designation}
        </p>

        <div className="flex mt-3 text-dark dark:text-white -mx-2">
          <a
            href={social?.email}
            target="_blank"
            className="mx-2"
            aria-label="Email"
            rel="noreferrer"
          >
            <MdEmail className="h-6 w-6" />
          </a>
          <a
            href={social?.phone}
            target="_blank"
            className="mx-2"
            aria-label="Phone"
            rel="noreferrer"
          >
            <AiFillPhone className="h-6 w-6" />
          </a>
          <a
            href={social?.linkedin}
            target="_blank"
            className="mx-2"
            aria-label="Linkedin"
            rel="noreferrer"
          >
            <BsLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="xl:h-screen">
      <div className="flex h-full xl:flex-row flex-col">
        <div className="xl:w-1/4 min-h-[400px] h-full flex flex-row xl:flex-col justify-center items-center space-x-10 xl:space-x-0 xl:space-y-10 py-4 px-6 bg-brand-500">
          {teams &&
            teams?.map((team, idx) => {
              return (
                <button
                  key={idx}
                  className="xl:w-1/2 h-20 w-20 rounded-full bg-light px-6 py-2 text-center xl:rounded-sm border-none"
                  onClick={() => {
                    setActiveTeam(idx);
                  }}
                >
                  {team.year}
                </button>
              );
            })}
        </div>
        <div className="xl:w-3/4 max-h-screen overflow-y-auto overflow-auto py-6 sm:p-6 bg-light dark:bg-dark dark:text-white">
          <h3 className="text-5xl text-center pb-5 font-semibold">
            Team {teams[activeTeam]?.year}
          </h3>
          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 shadow-md rounded-3xl gap-6 p-5">
            {teams[activeTeam]?.members?.map((member, idx) => {
              const { name, designation, social, img } = member;
              return (
                // eslint-disable-next-line react/jsx-key
                <MemberCard
                  name={name}
                  designation={designation}
                  social={social}
                  img={img}
                  idx={idx}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
