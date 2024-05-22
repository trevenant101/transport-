import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiMobile3, CiUser } from "react-icons/ci";
import Bansal from "../assets/images/bansal-transports-high-resolution-logo-black-transparent (1).png";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { AwesomeButton } from "react-awesome-button";
import { Form, Input, Modal, Radio } from "antd";
import ExampleWrapper from "../assets/components/Modal";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import form from "antd/es/form";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/Home", current: true },
  { name: "AboutUS", href: "/AboutUS", current: false },
  { name: "Contact Us", href: "/ContactUs", current: false },
  { name: "Services", href: "/Services", current: false },
];

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const userRole = "Employee";
  const [showModal, setShowModal] = useState(false);

  function RequestModal() {
    console.log("hello");
    setShowModal(true);
    console.log(showModal, "qwerty");
  }

  return (
    <>
      <div className="flex items-center justify-between ml-16">
        <div className="flex items-center">
          <CiMobile3 className="h-10 w-10 mr-" />:
          <h1 className="mb-0 m">6350345640</h1>
        </div>
        <div className="text-gray-600 mr-16">qwerty@gmail.com</div>
      </div>

      <Disclosure as="nav" className="bg-gray-400">
        {({ open }: { open: boolean }) => (
          <>
            <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src={Bansal}
                    alt="Your Company"
                  />
                </div>
                <div className="flex space-x-4">
                  {navigation.map((item) =>
                    // Check the user role and conditionally render menu items
                    item.name === "Team" && userRole !== "Employee" ? null : (
                      <a
                        key={item.name}
                        href={
                          item.name === "Dashboard"
                            ? `/${userRole}Dashboard`
                            : item.href
                        }
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <AwesomeButton onPress={RequestModal}>
                    REQUEST QUOTE
                  </AwesomeButton>
                  <AnimatePresence>
                    {showModal && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowModal(false)}
                        className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: "12.5deg" }}
                          animate={{ scale: 1, rotate: "0deg" }}
                          exit={{ scale: 0, rotate: "0deg" }}
                          onClick={(e) => e.stopPropagation()}
                          className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                        >
                          <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                          <div className="relative z-10">
                            <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                              <FiAlertCircle />
                            </div>
                            <h3 className="text-3xl font-bold text-center mb-2">
                              Request a qoute
                            </h3>
                            <Form layout="vertical">
                              <Form.Item
                                label="First Name"
                                name="name"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter the first name",
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>

                              <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                  {
                                    type: "email",
                                    message: "The input is not valid E-mail!",
                                  },
                                  {
                                    required: true,
                                    message: "Please input your E-mail!",
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                label="Phone Number"
                                name="phoneNumber"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter the phone number",
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                            </Form>
                            <div className="flex gap-2">
                              <button
                                onClick={() => setShowModal(false)}
                                className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => setShowModal(false)}
                                className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>{" "}
                  {/* Profile dropdown */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
