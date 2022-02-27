import React from "react";
import Image from "next/image";

export default function MediaCard({ prop }) {
  function dateToString(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <span className="flex items-center py-2">
            <div className="relative w-8 h-8 inline-block">
              <Image src={prop.author.avatar} layout="fill" className="rounded-[50%]" />
            </div>
            <div className="inline-block ml-3">{prop.author.name}</div>
          </span>
          <h2 className="mt-2 mb-2  font-bold">{prop?.title ? prop.title : "No Title"}</h2>
          <p className="text-sm">{prop?.description ? prop.description : "No Description"}</p>
        </div>
        <div className="px-4 pt-2 pb-2 border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-1">
            {prop.tags.map((tag, i) => {
              if (i == prop.tags.length - 1) {
                return <>{tag}</>;
              } else {
                return <>{tag}, </>;
              }
            })}
          </span>
        </div>
        <div className="px-4 pb-4 flex items-center text-sm text-gray-600">
          <span>{dateToString(prop.date)}</span>
        </div>
      </a>
    </div>
  );
}
