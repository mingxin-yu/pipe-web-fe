import { useState } from 'react';
import { Form, Input, Button, Space, Typography, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css';

const { Title } = Typography;

interface UserProfileProps {
  userId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  profilePictureUrl?: string;
  organization?: {
    id: string;
    name: string;
    domain: string;
  };
  onCancel?: () => void;
}

const UserProfile = ({
  userId,
  email: initialEmail,
  firstName: initialFirstName,
  lastName: initialLastName,
  profilePictureUrl,
  organization,
  onCancel,
}: UserProfileProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  const handleCancel = () => {
    form.resetFields();
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="user-profile-container">
      <Title level={1} className="user-profile-title">
        User Profile
      </Title>

      <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            userId: userId || '',
            email: initialEmail || '',
            firstName: initialFirstName || '',
            lastName: initialLastName || '',
            profilePictureUrl: profilePictureUrl || '',
            organization: organization?.name || '',
          }}
          className="user-profile-form"
        >
          <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                label="User ID"
                name="userId"
              >
                <Input size="large" placeholder="User ID" disabled />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input size="large" placeholder="Email" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                label="First Name"
                name="firstName"
              >
                <Input size="large" placeholder="First Name" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
              >
                <Input size="large" placeholder="Last Name" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                label="Profile Picture URL"
                name="profilePictureUrl"
              >
                <Input size="large" placeholder="Profile Picture URL" />
              </Form.Item>
            </Col>

            {organization && (
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item
                  label="Organization"
                  name="organization"
                >
                  <Input size="large" placeholder="Organization" disabled />
                </Form.Item>
              </Col>
            )}
          </Row>

          <Form.Item className="user-profile-actions">
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button onClick={handleCancel}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
    </div>
  );
};

export default UserProfile;

