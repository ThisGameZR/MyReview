import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import Select from "../../components/util/Select";

export default function Register() {
  const emailAddressList = [
    {
      id: 1,
      value: ".ac.",
    },
    {
      id: 2,
      value: ".edu.",
    },
  ];

  const [selectedEmailAddressList, setSelectedEmailAddressList] = useState(emailAddressList[0]);

  return (
    <>
      <Navbar></Navbar>
      <div className="h-[17.5vh]"></div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="h-12 w-auto">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register Account</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="my-4">
                <label htmlFor="email-address" className="sr-only">
                  Display Name
                </label>
                <input
                  id="email-address"
                  name="displayName"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Display Name"
                />
              </div>
              <div className="">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <div className="grid grid-cols-[50%_30%_20%]">
                  <input
                    id="email-address"
                    autoComplete="off"
                    name="email"
                    type="text"
                    required
                    className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email Address"
                  />
                  <Select list={emailAddressList} selected={selectedEmailAddressList} setSelected={setSelectedEmailAddressList} />
                  <input
                    id="email-address"
                    autoComplete="off"
                    name="email"
                    type="text"
                    required
                    className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Suffix"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div className="">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mb-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[17.5vh]"></div>
      <Footer></Footer>
    </>
  );
}
