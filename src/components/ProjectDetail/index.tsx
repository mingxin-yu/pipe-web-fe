import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, Form, Input, Button, Space, Typography, Row, Col } from 'antd';
import './index.css';

const { Title } = Typography;
const { TextArea } = Input;

interface ProjectDetailProps {
  projectId?: string;
  name?: string;
  description?: string;
  owner?: number | null;
  revitDocumentCreationGuid?: string | null;
  isActive?: boolean;
}

const ProjectDetail = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  // In a real app, you would fetch the project data based on the ID
  // For now, we'll use empty values for create mode
  const isEditMode = id !== null;

  useEffect(() => {
    if (isEditMode && id) {
      // In a real app, fetch project data here
      // For now, we'll just set some placeholder values
      form.setFieldsValue({
        name: '',
        description: '',
        owner: null,
        revitDocumentCreationGuid: '',
      });
    }
  }, [id, isEditMode, form]);

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    // Handle form submission here
    // After successful save, navigate back to projects
    navigate('/projects');
  };

  const handleCancel = () => {
    form.resetFields();
    navigate('/projects');
  };

  return (
    <div className="project-detail-container">
      <Card className="project-detail-card">
        <Title level={1} className="project-detail-title">
          {isEditMode ? 'Edit Project' : 'Create Project'}
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            name: '',
            description: '',
            owner: null,
            revitDocumentCreationGuid: '',
          }}
          className="project-detail-form"
        >
          <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                label="Project Name"
                name="name"
                rules={[
                  { required: true, message: 'Please input project name!' },
                ]}
              >
                <Input size="large" placeholder="Project Name" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                label="Owner"
                name="owner"
              >
                <Input 
                  size="large" 
                  placeholder="Owner ID" 
                  type="number"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                label="Revit Document Creation GUID"
                name="revitDocumentCreationGuid"
              >
                <Input size="large" placeholder="Revit Document Creation GUID" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item
                label="Description"
                name="description"
              >
                <TextArea 
                  size="large" 
                  placeholder="Description" 
                  rows={4}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item className="project-detail-actions">
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
      </Card>
    </div>
  );
};

export default ProjectDetail;

