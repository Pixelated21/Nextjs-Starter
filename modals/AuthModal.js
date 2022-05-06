import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import SelectInput from "../components/form/SelectInput";
import TextInput from "../components/form/TextInput";
import { useForms } from "../hooks/misc/useForms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const AuthModal = ({ show, toggle, formConfig }) => {
  const { storeInfo, fields } = useForms();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formConfig.schema),
  });

  const onSubmit = () => {
    const data = formConfig.action.formSubmit();
    toggle();
    reset(fields);
  };

  useEffect(() => {
    reset(fields);
  }, [fields]);

  return (
    <>
      <Transition.Root appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 overflow-y-auto bg-black bg-opacity-90"
          onClose={toggle}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://wallpaperaccess.com/full/2186932.png)",
                  backgroundBlendMode: "multiply",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#000000a1",
                }}
                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl"
              >
                <Dialog.Title
                  as="h3"
                  className="text-xl mb-6 font-semibold leading-6 text-white"
                >
                  {formConfig.presentation.visualInfo.title}
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-1">
                      {formConfig.presentation.formBody.map((field, key) =>
                        field.type === "select" ? (
                          <SelectInput
                            register={register}
                            key={key}
                            field={field}
                            storeInfo={storeInfo}
                          />
                        ) : (
                          <TextInput
                            register={register}
                            key={key}
                            field={field}
                            storeInfo={storeInfo}
                          />
                        )
                      )}
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500  border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      >
                        {formConfig.presentation.visualInfo.submit}
                      </button>

                      {formConfig.mode ? (
                        <button
                          type="button"
                          onClick={formConfig.toggles.registerToggle}
                          className="text-sm font-medium "
                        >
                          <span className="text-gray-400 hover:text-gray-200 duration-200">
                            Dont have an account yet?
                          </span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={formConfig.toggles.loginToggle}
                          className="text-sm font-medium"
                        >
                          <span className="text-gray-400 hover:text-gray-200 duration-200">
                            Already have an account?
                          </span>
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AuthModal;
