import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, Form, Input } from "antd";
import Bansal from "../assets/images/bansal-transports-high-resolution-logo-black-transparent (1).png";
import { AwesomeButton } from "react-awesome-button";
import { FiAlertCircle, FiMenu } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingWhatsApp } from "react-floating-whatsapp";

interface NavbarProps {
  links: { name: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);
  const [visible, setVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const NavClick = (link: string) => {
    setActiveTab(link);
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const RequestModal = () => {
    setShowModal(true);
    setVisible(false);
  };

  return (
    <>
      

      <div className="flex justify-between items-center p-4 bg-[#a4a5ff]">
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
                    Request a quote
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
        </AnimatePresence>

        <div className="flex items-center">
          <img src={Bansal} className="h-10 w-80" alt="Logo" />
        </div>

        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-white text-lg font-medium cursor-pointer px-4 py-2 ${
                activeTab === link.path
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-white"
              }`}
              onClick={() => NavClick(link.path)}
            >
              {link.name}
            </Link>
          ))}
          <AwesomeButton onPress={RequestModal}>REQUEST QUOTE</AwesomeButton>
        </div>

        <div className="md:hidden flex items-center">
          <FiMenu
            onClick={showDrawer}
            className="text-white text-2xl cursor-pointer"
          />
        </div>

        <Drawer
          title="Navigation"
          placement="right"
          closable={true}
          onClose={onClose}
          width="100%"
          open={visible}
        >
          {visible && (
            <div className="flex flex-col space-y-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl text-black"
                  onClick={() => NavClick(link.path)}
                >
                  {link.name}
                </Link>
              ))}
              <AwesomeButton onPress={RequestModal}>REQUEST QUOTE</AwesomeButton>
            </div>
          )}
                <FloatingWhatsApp phoneNumber="6350345640" accountName="Naman" />

        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
