export default function SelectInput({ field, storeInfo, register }) {
  return (
    <>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-400"
      >
        {field.label}
      </label>
      <div className="mt-1">
        <select
          name={field.name}
          id={field.name}
          {...register(field.name)}
          onChange={storeInfo}
          value={field.value}
          className="shadow-sm bg-gray-300 focus:bg-white duration-300 focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
        >
          {field.options.map((option, key) => {
            if (key === 1) {
              return (
                <option key={key} defaultValue selected value={option.value}>
                  {option.label}
                </option>
              );
            } else {
              return (
                <option key={key} value={option.value}>
                  {option.label}
                </option>
              );
            }
          })}
        </select>
      </div>
    </>
  );
}
