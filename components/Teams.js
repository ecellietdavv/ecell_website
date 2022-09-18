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
        className="flex flex-col m-5 items-center p-8 transition-colors duration-200 transform cursor-pointer group bg-light border border-dark dark:bg-mid dark:hover:bg-brand-600 hover:bg-brand-600 rounded-xl"
        key={idx}
      >
        <Image
          width={128}
          height={128}
          className="object-cover rounded-full ring-4 ring-gray-300"
          src={img}
          alt={name}
        />

        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white ">
          {name}
        </h1>

        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
          {designation}
        </p>

        <div className="flex mt-3 text-white -mx-2">
          <a
            href={social?.email}
            target="_blank"
            className="mx-2 text-dark dark:text-light"
            aria-label="Email"
            rel="noreferrer"
          >
            <MdEmail className="h-6 w-6" />
          </a>
          <a
            href={social?.phone}
            target="_blank"
            className="mx-2 text-dark dark:text-light"
            aria-label="Phone"
            rel="noreferrer"
          >
            <AiFillPhone className="h-6 w-6" />
          </a>
          <a
            href={social?.linkedin}
            target="_blank"
            className="mx-2 text-dark dark:text-light"
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
    <div className="h-screen">
      <div className="flex h-full lg:flex-row flex-col">
        <div className="w-1/4 h-full flex flex-col justify-center items-center space-y-10 py-4 px-6 bg-brand-500">
          {teams &&
            teams?.map((team, idx) => {
              return (
                <button
                  key={idx}
                  className="w-1/2 bg-light px-6 py-2 text-center rounded-sm border-none"
                  onClick={() => {
                    setActiveTeam(idx);
                  }}
                >
                  {team.year}
                </button>
              );
            })}
        </div>
        <div className="w-3/4 overflow-auto p-6 dark:bg-mid">
          <h3 className="text-5xl pb-5 font-semibold">
            Team {teams[activeTeam]?.year}
          </h3>
          <div className="grid grid-cols-3 dark:bg-mid shadow-md rounded-3xl bg-light p-5">
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
