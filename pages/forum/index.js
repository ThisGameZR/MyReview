import React from "react";
import Navbar from "../../layouts/Navbar";
import ForumCard from "../../components/util/ForumCard";

export default function Index() {
  const forums = [
    {
      forumId: 1,
      title: "Forum 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      tags: ["Calculus", "Math", "Algebra", "Geometry"],
      date: new Date("2022-01-01"),
      author: {
        name: "John Doe",
        avatar: "/images/placeholder.jpeg",
      },
    },
    {
      forumId: 2,
      title: "Forum 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      date: new Date("2022-01-01"),
      tags: ["Calculus", "Math"],
      author: {
        name: "John Smith",
        avatar: "/images/placeholder.jpeg",
      },
    },
    {
      forumId: 3,
      title: "Physics 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      date: new Date("2020-02-01"),
      tags: ["Physics", "Science"],
      author: {
        name: "Berry Barton",
        avatar: "/images/placeholder.jpeg",
      },
    },
    {
      forumId: 4,
      title: "Computer Programming 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      date: new Date("2021-04-05"),
      tags: ["Computer Science", "Programming", "Chiang Mai University", "Coding", "C++"],
      author: {
        name: "Kim Walker",
        avatar: "/images/placeholder.jpeg",
      },
    },
    {
      forumId: 5,
      title: "Biology 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      date: new Date("2021-04-05"),
      tags: ["Biology", "Science"],
      author: {
        name: "Zoey Smith",
        avatar: "/images/placeholder.jpeg",
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-[8vh]"></div>
      <div className="flex w-screen h-full justify-center">
        <div className="flex flex-col w-full ">
          {/* Search div */}
          <div className="flex flex-row w-full py-2 bg-slate-50 border-b-black border-b border-solid justify-center">
            <div className="w-full lg:w-[60%] flex flex-row">
              <div className="flex justify-center items-center bg-gray-300 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="w-[90%] px-4 py-2 outline-none focus:bg-gray-100 placeholder:text-gray-600 border border-solid border-gray-300 rounded"
                placeholder="Search for forums..."
              />
            </div>
          </div>
          {/* Forum results */}
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              {forums.map((forum) => {
                return <ForumCard key={forum.forumId} prop={forum} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
