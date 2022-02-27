import React from "react";

export default function Card({ prop }) {
  const highlight =
    prop.point >= 4
      ? "bg-orange-200 text-orange-800 "
      : new Date().getMonth() - 1 >= prop.date.getMonth() && prop.date.getFullYear() == new Date().getFullYear()
      ? "bg-green-200 text-green-800 "
      : "invisible ";

  const highlightText =
    prop.point >= 4
      ? "Popular"
      : new Date().getMonth() - 1 >= prop.date.getMonth() && prop.date.getFullYear() == new Date().getFullYear()
      ? "Newest"
      : "hidden";

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <span className={highlight + "inline-block px-2 py-1 leading-none rounded-full font-semibold uppercase tracking-wide text-xs"}>
            {highlightText}
          </span>
          <h2 className="mt-2 mb-2  font-bold">{prop.name ? prop.name : "No Name"}</h2>
          <p className="text-sm">{prop.description ? prop.description : "No Description"}</p>
        </div>
        <div className="px-4 pt-2 pb-2 border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-1">
            {prop.category ? prop.category : "No Category"} | {prop.university ? prop.university : "No University"}
          </span>
        </div>
        <div className="px-4 pb-4 flex items-center text-sm text-gray-600">
          {Array.from(Array(prop.point), (e, i) => {
            return (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
            );
          })}
          {Array.from(Array(5 - prop.point), (e, i) => {
            return (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400">
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
            );
          })}
          <span className="ml-2">{prop.point} / 5</span>
        </div>
      </a>
    </div>
  );
}
