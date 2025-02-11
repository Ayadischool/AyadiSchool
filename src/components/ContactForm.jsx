"use client";
import React from "react";
import { Form, Input, Button, message, ConfigProvider, theme } from "antd";
import { motion } from "framer-motion";
import { db } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), values);
      message.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      console.error("Error sending message: ", error);
      message.error("Failed to send message.");
    }
    setLoading(false);
  };

  const decorativeSquares1 = Array(3).fill(null);
  const decorativeSquares2 = Array(3).fill(null);

  // Custom dark theme for Ant Design components
  const customTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: '#4ade80', // lime-400
      colorBgContainer: '#172554', // blue-950
      borderRadius: 4,
      colorBorder: '#374151', // gray-700
      colorText: '#',
      colorTextPlaceholder: '#9ca3af', // gray-400
    },
    components: {
      Input: {
        colorBgContainer: '#FFFFF', // blue-900
        colorBorder: '#374151', // gray-700
      },
      Button: {
        colorPrimary: '#4ade80', // lime-400
        colorPrimaryHover: '#22c55e', // lime-500
      },
    },
  };

  return (
    <ConfigProvider theme={customTheme}>
      <div className="relative w-full lg:mb-20 p-4 md:p-8">
        {/* Left decorative graphics */}
        <div className="absolute left-0 bottom-0 opacity-70">
          {decorativeSquares1.map((_, index) => (
            <motion.div
              key={`left-${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-16 h-16 border-2 border-emerald-400 absolute"
              style={{
                left: `${index * 20}px`,
                bottom: `${index * 20}px`,
              }}
            />
          ))}
        </div>

        {/* Right decorative graphics */}
        <div className="absolute right-0 bottom-0 opacity-70">
          {decorativeSquares2.map((_, index) => (
            <motion.div
              key={`right-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-16 h-16 border-2 border-orange-400 absolute"
              style={{
                right: `${index * 20}px`,
                bottom: `${index * 20}px`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-blue-950 p-8 rounded-lg shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-lime-400">CONTACT US</h2>
                  <p className="text-gray-300 mb-6">Leave us a message</p>
                </div>

                <Form
                  form={form}
                  onFinish={handleSubmit}
                  layout="vertical"
                  className="space-y-4"
                >
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                      { min: 2, message: "Name must be at least 2 characters" },
                      { max: 50, message: "Name cannot exceed 50 characters" },
                      { pattern: /^[a-zA-Z\s]*$/, message: "Name can only contain letters and spaces" }
                    ]}
                  >
                    <Input size="large" placeholder="First Name Last Name" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email address" }
                    ]}
                  >
                    <Input size="large" placeholder="Email Address" />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please enter your message" },
                      { min: 10, message: "Message must be at least 10 characters" },
                      { max: 500, message: "Message cannot exceed 500 characters" }
                    ]}
                  >
                    <TextArea rows={4} size="large" placeholder="Your Message" />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      size="large"
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Weekend UX</h3>
                <p className="text-gray-300">
                  B 37/3 Ground Floor Double Story
                  <br />
                  Ramesh Nagar, Near Raja Garden
                  <br />
                  Chowk Delhi- 110015
                </p>
                <p className="text-lime-400">+91 9599272754</p>
                <p className="text-lime-400">hello@info.com.ng</p>

                <div className="mt-6 w-full h-48 bg-gray-800 rounded overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d359.82909923525136!2d75.78695784269365!3d11.26198437117855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1739006216223!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ConfigProvider>
  );
};

export default ContactForm;