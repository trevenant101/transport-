import React from "react";
import { Button, Card, Form, Input } from "antd";
import truck from "../../assets/images/Truck2.jpg";
import Footer from "../../assets/components/Footer";
import Example from "./COntactCard";
import { AwesomeButtonProgress } from "react-awesome-button";

const ContactUs: React.FC = () => {
  const onFinish = (values: any): void => {
    console.log("Received values:", values);
  };

  return (
    <>
      <section
        className="contact_us  py-12 bg-cover bg-center "
        style={{
          backgroundImage: `url(${truck})`,
          backdropFilter: "blur(100px)",
        }}
      >
        <div className="container mx-auto flex justify-center items-center shadow-2xl">
          <Card className="bg-gradient-to-br from-indigo-200 to-violet-200 opacity-[0.95] p-6 md:p-12 rounded-lg shadow-lg w-full md:w-3/4 lg:w-3/4">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                <Form name="contactForm" onFinish={onFinish} layout="vertical">
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
                    ]}
                  >
                    <Input className="rounded-md" />
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
                  <Form.Item>
                    <AwesomeButtonProgress
                      type="facebook"
                      onPress={(event, release) => {
                        // do a sync/async task then call `release()`
                      }}
                    >
                      Send
                    </AwesomeButtonProgress>
                  </Form.Item>
                </Form>
              </div>
              <div className="w-full md:w-1/3 mt-8 md:mt-0">
                {/* <Card className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                  <p className="text-base mb-2">
                    <strong>Phone:</strong> +91 8009 054294
                  </p>
                  <p className="text-base mb-2">
                    <strong>Email:</strong> info@flightmantra.com
                  </p>
                  <p className="text-base">
                    <strong>Address:</strong> 1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE
                  </p>
                </Card> */}
                <Example />
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
            <p className="text-base text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quo beatae quasi assumenda, expedita aliquam minima tenetur
              maiores neque incidunt repellat aut voluptas hic dolorem sequi ab
              porro, quia error.
            </p>
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
