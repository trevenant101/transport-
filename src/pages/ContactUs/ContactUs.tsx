/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Card, Form, Input, notification } from "antd";
import truck from "../../assets/images/Truck2.jpg";
import Footer from "../../assets/components/Footer";
import { AwesomeButtonProgress } from "react-awesome-button";
import emailjs from "emailjs-com";
import "react-awesome-button/dist/styles.css";
import ContactCard from "./ContactCard";

const ContactUs: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [form] = Form.useForm(); // Form instance reference

  const sendEmail = (values: any) => {
    return emailjs.send(
      "service_lpyuq89",
      "template_drcmoya",
      values,
      "e0jnCqVUt0x05ZcYk"
    );
  };

  const handleSendEmail = (
    values: any,
    next: (success: boolean) => void
  ): void => {
    if (isSending) return; // Prevent sending if already in progress

    setIsSending(true);

    sendEmail(values)
      .then(
        () => {
          notification.success({
            message: "Success",
            description: "Your message has been sent successfully!",
          });
          next(true); // Indicate success
        },
        () => {
          notification.error({
            message: "Error",
            description: "There was an error sending your message.",
          });
          next(false); // Indicate failure
        }
      )
      .finally(() => {
        setIsSending(false);
        form.resetFields(); // Clear the form fields
      });
  };

  return (
    <>
      <section
        className="contact_us py-12 bg-cover bg-center"
        style={{
          backgroundImage: `url(${truck})`,
          backdropFilter: "blur(100px)",
        }}
      >
        <div className="container mx-auto flex justify-center items-center shadow-2xl">
          <Card className="bg-gradient-to-br from-indigo-200 to-violet-200 opacity-[0.95] md:p-12 rounded-lg shadow-lg w-full lg:w-11/12">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                <Form name="contactForm" form={form} layout="vertical">
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input className="rounded-md" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                      {
                        type: "email",
                        message: "The input is not a valid email!",
                      },
                    ]}
                  >
                    <Input className="rounded-md" />
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
                    name="message"
                    label="Message"
                    rules={[
                      { required: true, message: "Please input your message!" },
                    ]}
                  >
                    <Input.TextArea className="rounded-md" />
                  </Form.Item>
                  <Form.Item shouldUpdate>
                    {({ getFieldsValue, validateFields }) => {
                      const values = getFieldsValue();
                      const allFieldsFilled = Object.keys(values).every(
                        (key) => values[key]
                      );
                      return (
                        <AwesomeButtonProgress
                          type="primary"
                          size="large"
                          disabled={!allFieldsFilled || isSending}
                          resultLabel={!allFieldsFilled ? "Error!" : "Success"}
                          loadingLabel={"Sending..."}
                          onPress={async (element, next) => {
                            try {
                              await validateFields();
                              handleSendEmail(values, next);
                            } catch (errorInfo) {
                              console.log("Validation Failed:", errorInfo);
                              handleSendEmail(null, next); // Show error state
                            }
                          }}
                        >
                          Send
                        </AwesomeButtonProgress>
                      );
                    }}
                  </Form.Item>
                </Form>
              </div>
              <div className="w-full sm:mr-5 md:w-1/3 mt-8 md:mt-0">
                <ContactCard />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="map_sec bg-gray-200 py-12">
        <div className="container mx-auto">
          <div className="map_inner text-center">
            <h4 className="text-3xl font-semibold mb-4">
              Find Us on Google Map
            </h4>
            <div className="map_bind rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.549462228537!2d74.62736391459237!3d25.34829198380492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c82c20cbe73b7%3A0xd1545fb8a931b25b!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1644607480500"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
