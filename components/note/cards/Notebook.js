export default function Notebook(data) {
  console.log("Notebook.js: data: ", data);
  return (
    <>
      <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
        <div>
          <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">
            What does success as a UX designer look like and how to get there
            systematically
          </h3>
        </div>
        <div>
          <div className="mb-3 flex items-center flex-no-wrap">
            <div className="w-6 h-6 bg-cover bg-center rounded-md">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                alt="read by Alia"
                className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
              />
            </div>
            <div className="w-6 h-6 bg-cover rounded-md -ml-2">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                alt="read by jason"
                className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
              />
            </div>
            <div className="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                alt="read by Kane"
                className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
            <p className="text-sm">March 28, 2020</p>
            <button
              className="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
              aria-label="edit note"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
