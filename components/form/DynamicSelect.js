import { useEffect, useState } from "react";

export default  function DynamicSelect ({ field, storeInfo }) {


    const [options,setOptions] = useState([])
    



  return (
    <>
      {/* <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-400"
      >
        {field.label}
      </label>
      <div className="mt-1">
        <select
          name={field.name}
          id={field.name}
          onChange={storeInfo}
          value={field.value}
          className="shadow-sm bg-gray-300 focus:bg-white duration-300 focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
        >
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div> */}
    </>
  );
}
