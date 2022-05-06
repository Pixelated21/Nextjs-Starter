import { Popover, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import headerData from "../../data/header";
import Link from "next/link";
import { useAuthContext } from "../../hooks/context/useAuthContext";
import AuthModal from "../../modals/AuthModal";
import useToggle from "../../hooks/misc/useToggle";
import AuthenticationConfig from "../../config/Authentication";
import { useRouter } from "next/router";
import { classNames } from "../../utils/class-name";
import AuthAction from "../../hooks/actions/useAuthActions";
import useAuthAction from "../../hooks/actions/useAuthActions";
import { removeCookies, getCookies, getCookie, setCookies } from "cookies-next";

const Header1 = ({ shadow, size = "small", type = "user" }) => {
  setCookies('test','ok')
  
  const [token,setToken] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setToken(getCookies());

    },2000)
  },[])

  console.log(token)


  const { isOpen, toggleModal } = useToggle();

  const { isAuth, userRole, userInfo } = useAuthContext();

  const { logoutAction } = useAuthAction();

  const router = useRouter();

  const config = (type) => {
    if (type === "user") {
      return {
        navigation: headerData.userTypeNavigation,
        visual: "bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400",
      };
    }
    // if (type === "example") {
    //   return {
    //     navigation: headerData.employeeTypeNavigation,
    //     visual: "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
    //   };
    // }
  };

  return (
    <>
      <AuthModal
        show={isOpen}
        toggle={toggleModal}
        formConfig={AuthenticationConfig()}
      />

      <Popover
        as="header"
        className={classNames(
          size === "small" ? "" : "pb-12",
          config(type).visual,
          shadow
        )}
      >
        {({ open }) => (
          <>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="flex justify-between h-16 mb-5 xl:mb-20">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center"></div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {config(type).navigation.map((item, key) => {
                      if (item.auth === false && isAuth === false) {
                        return (
                          <Link key={key} href={item.href}>
                            <a
                              className={`${
                                router.route === item.href
                                  ? "border-gray-300 text-gray-700  border-b-2 hover:text-gray-600"
                                  : ""
                              } border-transparent duration-300 text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-semibold`}
                            >
                              {item.name}
                            </a>
                          </Link>
                        );
                      }
                      if (isAuth === true) {
                        return (
                          <Link key={key} href={item.href}>
                            <a
                              className={`${
                                router.route === item.href
                                  ? "border-gray-300 text-gray-700  border-b-2 hover:text-gray-600"
                                  : ""
                              } border-transparent duration-300 text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-semibold`}
                            >
                              {item.name}
                            </a>
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {!isAuth ? (
                      <button
                        onClick={toggleModal}
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white shadow-sm hover:bg-gray-100 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      >
                        <span>Sign In</span>
                      </button>
                    ) : (
                      <button
                        onClick={logoutAction}
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white shadow-sm hover:bg-gray-100 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      >
                        <span>Sign Out</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Transition.Root as={Fragment}>
              <div className="lg:hidden">
                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                      <div className="pt-3 pb-2">
                        <div className="flex items-center justify-between px-4">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                              alt="Workflow"
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                          {config(type).navigation.map((item, key) => {
                            if (item.auth === false && isAuth === false) {
                              return (
                                <Link key={key} href={item.href}>
                                  <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                                    {item.name}
                                  </a>
                                </Link>
                              );
                            }

                            if (isAuth === true) {
                              return (
                                <Link key={key} href={item.href}>
                                  <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                                    {item.name}
                                  </a>
                                </Link>
                              );
                            }
                          })}
                        </div>
                      </div>

                      {isAuth ? (
                        <div className="pt-4 pb-2">
                          <div className="flex items-center px-5">
                            <div className="ml-3 min-w-0 flex-1">
                              {/*FIXME: Add User Generated Image */}

                              <div className="text-base font-medium text-gray-800 truncate">
                                First Name Last Name
                              </div>
                              <div className="text-sm font-medium text-gray-500 truncate">
                                Email
                              </div>
                            </div>
                            <button
                              type="button"
                              className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <span className="sr-only">
                                View notifications
                              </span>
                            </button>
                          </div>
                          <div className="mt-3 px-2 space-y-1">
                            <button
                              onClick={logoutAction}
                              className="block w-full text-left rounded-md px-3 py-2 text-base duration-300 text-gray-900 font-medium hover:bg-red-500 hover:text-white"
                            >
                              Sign Out
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-3 px-2 pt-1 pb-2 flex items-center space-y-1">
                          <button
                            onClick={toggleModal}
                            className="block w-full text-left rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                          >
                            Sign In
                          </button>
                        </div>
                      )}
                    </div>
                  </Popover.Panel>
                </Transition.Child>
              </div>
            </Transition.Root>
          </>
        )}
      </Popover>
    </>
  );
};

export default Header1;
