import React, { useState, useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import Select from "../../components/util/Select";
import Card from "../../components/util/Card";

export default function Index() {
  const universityList = [
    {
      id: 1,
      value: "Select University",
    },
    {
      id: 2,
      value: "Chiang Mai University",
    },
    {
      id: 3,
      value: "Bangkok University",
    },
    {
      id: 4,
      value: "Chulalongkorn University",
    },
  ];

  const categoryList = [
    {
      id: 1,
      value: "Select Category",
    },
    {
      id: 2,
      value: "Computer Science",
    },
    {
      id: 3,
      value: "Electrical Engineering",
    },
    {
      id: 4,
      value: "Mechanical Engineering",
    },
  ];

  const sortByList = [
    {
      id: 1,
      value: "Sort By",
    },
    {
      id: 2,
      value: "Popularity",
    },
    {
      id: 3,
      value: "Newest",
    },
  ];

  const [selectedUniversity, setSelectedUniversity] = useState(universityList[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);
  const [selectedSortBy, setSelectedSortBy] = useState(sortByList[0]);

  const courses = [
    {
      courseId: 1,
      name: "Calculus 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      category: "Mathematics",
      university: "Chiang Mai University",
      date: new Date("2022-01-01"),
      point: 3,
    },
    {
      courseId: 2,
      name: "Calculus 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      date: new Date("2022-01-01"),
      category: "Mathematics",
      university: "Chiang Mai University",
      point: 4,
    },
    {
      courseId: 3,
      name: "Physics 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      date: new Date("2020-02-01"),
      category: "Science",
      university: "Chulalongkorn University",
      point: 2,
    },
    {
      courseId: 4,
      name: "Computer Programming 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      date: new Date("2021-04-05"),
      category: "Computer Science",
      university: "Chulalongkorn University",
      point: 5,
    },
    {
      courseId: 5,
      name: "Biology 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum corrupti nesciunt similique culpa repudiandae, perferendis non qui nihil ut voluptatem recusandae vel deleniti sint voluptas praesentium odio ad placeat.",
      date: new Date("2021-04-05"),
      category: "Science",
      university: "Bangkok University",
      point: 4,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-[8vh]"></div>
      <div className="flex w-screen h-full justify-center">
        <div className="flex flex-col w-full ">
          {/* Search div */}
          <div className="flex flex-row w-full bg-slate-50 border-b-black border-b border-solid justify-center">
            <div className="flex flex-col px-4 py-2 gap-2 lg:py-4 lg:grid lg:grid-cols-[20%_20%_20%_40%] w-full lg:w-[60%] lg:gap-8 xl:grid-cols-[20%_20%_15%_35%]">
              <div className="">
                <Select list={universityList} selected={selectedUniversity} setSelected={setSelectedUniversity} />
              </div>
              <div className="">
                <Select list={categoryList} selected={selectedCategory} setSelected={setSelectedCategory} />
              </div>
              <div className="">
                <Select list={sortByList} selected={selectedSortBy} setSelected={setSelectedSortBy} />
              </div>
              <div className="border border-solid border-gray-300 rounded">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded outline-none focus:bg-gray-100 placeholder:text-gray-600"
                  placeholder="Enter course name, course id, instructor name..."
                />
              </div>
            </div>
          </div>
          {/* Result div */}
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              {courses.map((course) => (
                <Card key={course.courseId} prop={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
