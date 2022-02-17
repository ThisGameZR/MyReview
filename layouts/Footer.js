import React from "react";

export default function Footer() {
  return (
    <footer class="bg-gray-800">
      <div class="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-10 lg:px-8">
        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
          <p class="text-sm text-gray-400">© Copyright 2021. All Rights Reserved to ThisGameZ.</p>

          <div class="flex mt-3 -mx-2 sm:mt-0">
            <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
              {" "}
              Terms {"&"} Conditions
            </a>

            <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
              {" "}
              Privacy{" "}
            </a>

            <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
              {" "}
              Cookies{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
