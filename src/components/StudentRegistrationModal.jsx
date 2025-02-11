import React from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
import { db } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const StudentRegistrationModal = ({ open, onClose, grade }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);


  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "Registration"), values);
      
      // Show success toast with proper message
      toast.success("Registration successful! Our team will contact you soon.", {
        position: "top-center",
        autoClose: 3000,  // Closes after 3 seconds
        hideProgressBar: true, // Hides progress bar
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
  
      form.resetFields();
      onClose();
    } catch (error) {
      toast.error("Error submitting form. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }finally{
        setLoading(false);
    }
  };
  

  const grades = Array.from({ length: 8 }, (_, i) => ({
    value: i + 1,
    label: `Grade ${i + 1}`,
  }));

  return (
    <Modal
      title="Student Registration"
      open={open}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
        initialValues={{ grade }}  // Automatically set grade value when passed
      >
        {/* Student Details */}
        <Form.Item
          label="Student Name"
          name="studentName"
          rules={[{ required: true, message: 'Please enter student name' }]}
        >
          <Input placeholder="Enter student's full name" />
        </Form.Item>

        <Form.Item
          label="Whatsapp Number"
          name="whatsappNumber"
          rules={[{ required: true, message: 'Please enter WhatsApp Number' }]}
        >
          <Input placeholder="Enter your WhatsApp number" />
        </Form.Item>

        <Form.Item
          label="Grade"
          name="grade"
          rules={[{ required: true, message: 'Please select grade' }]}
        >
          <Select placeholder="Select grade">
            {/* If grade is passed as a prop, it will be automatically selected */}
            {grades.map((gradeOption) => (
              <Select.Option key={gradeOption.value} value={gradeOption.value}>
                {gradeOption.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {/* Parent Details */}
        <Form.Item
          label="Father's Name"
          name="fatherName"
          rules={[{ required: true, message: "Please enter father's name" }]}
        >
          <Input placeholder="Enter father's name" />
        </Form.Item>

        <Form.Item
          label="Mother's Name"
          name="motherName"
          rules={[{ required: true, message: "Please enter mother's name" }]}
        >
          <Input placeholder="Enter mother's name" />
        </Form.Item>

        {/* Location Details */}
        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: 'Please enter country' }]}
        >
          <Input placeholder="Enter country" />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: 'Please enter city' }]}
        >
          <Input placeholder="Enter city" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <div className="flex justify-end space-x-4">
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              Register Student
            </Button>
          </div>
        </Form.Item>
      </Form>

    </Modal>
  );
};

export default StudentRegistrationModal;
