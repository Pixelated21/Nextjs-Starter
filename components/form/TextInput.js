export default function TextInput({field, storeInfo,register}) {
    return (
        <>
            <label htmlFor='email' className='block text-sm font-medium text-gray-400'>
                {field.label}
            </label>
            <div className='mt-1'>
                <input
                    type={field.type}
                    {...register(field.name)}
                    name={field.name}
                    id={field.name}
                    onChange={storeInfo}
                    value={field.value}
                    className='shadow-sm bg-gray-300 focus:bg-white duration-300 focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder={field.placeholder}
                />
            </div>
        </>
    )
}
