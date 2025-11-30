import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Input, Button, Card, Row, Col, Typography, Tag } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import './index.css';

const { Title } = Typography;

interface Project {
  key: string;
  id: number;
  projectId: string;
  name: string;
  description: string;
  createdOn: string;
  owner: number | null;
  revitDocumentCreationGuid: string | null;
  isActive: boolean;
}

const Projects = () => {
  const navigate = useNavigate();
  const [projectNameFilter, setProjectNameFilter] = useState('');
  const [descriptionFilter, setDescriptionFilter] = useState('');
  const [ownerFilter, setOwnerFilter] = useState('');

  // Sample data with IDs 1, 2, 3 - replace with actual API call
  const [dataSource] = useState<Project[]>([
    {
      key: '1',
      id: 1,
      projectId: '550e8400-e29b-41d4-a716-446655440000',
      name: 'Project Alpha',
      description: 'First project description',
      createdOn: '2024-01-15T10:30:00Z',
      owner: 1,
      revitDocumentCreationGuid: '550e8400-e29b-41d4-a716-446655440010',
      isActive: true,
    },
    {
      key: '2',
      id: 2,
      projectId: '550e8400-e29b-41d4-a716-446655440001',
      name: 'Project Beta',
      description: 'Second project description',
      createdOn: '2024-01-20T14:15:00Z',
      owner: 1,
      revitDocumentCreationGuid: null,
      isActive: true,
    },
    {
      key: '3',
      id: 3,
      projectId: '550e8400-e29b-41d4-a716-446655440002',
      name: 'Project Gamma',
      description: 'Third project description',
      createdOn: '2024-01-25T09:00:00Z',
      owner: 2,
      revitDocumentCreationGuid: '550e8400-e29b-41d4-a716-446655440020',
      isActive: false,
    },
  ]);

  const handleEdit = (record: Project) => {
    navigate(`/project-detail?id=${record.id}`);
  };

  const handleDelete = (record: Project) => {
    console.log('Delete:', record);
    // Handle delete action
  };

  const handleCreate = () => {
    navigate('/project-detail');
  };

  const handleSearch = () => {
    console.log('Search with filters:', {
      projectName: projectNameFilter,
      description: descriptionFilter,
      owner: ownerFilter,
    });
    // Handle search action
  };

  const columns: ColumnsType<Project> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      fixed: 'left',
    },
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 250,
      ellipsis: true,
    },
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'createdOn',
      width: 180,
      render: (text: string) => {
        const date = new Date(text);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
      },
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      width: 100,
      render: (owner: number | null) => owner || 'N/A',
    },
    {
      title: 'Revit GUID',
      dataIndex: 'revitDocumentCreationGuid',
      key: 'revitDocumentCreationGuid',
      width: 200,
      ellipsis: true,
      render: (guid: string | null) => guid || 'N/A',
    },
    {
      title: 'Status',
      key: 'isActive',
      width: 100,
      render: (_: any, record: Project) => (
        <Tag color={record.isActive ? 'green' : 'red'}>
          {record.isActive ? 'Active' : 'Inactive'}
        </Tag>
      ),
    },
    {
      title: 'Edit',
      key: 'edit',
      width: 100,
      fixed: 'right',
      render: (_: any, record: Project) => (
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
          className="action-button"
        >
          Edit
        </Button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      width: 100,
      fixed: 'right',
      render: (_: any, record: Project) => (
        <Button
          type="link"
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record)}
          className="action-button"
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="projects-container">
      <Title level={1} className="projects-title">
        Projects
      </Title>

      {/* Filters */}
      <Card className="projects-filters" size="small">
          <Row gutter={16} align="middle">
            <Col xs={24} sm={8} md={6} lg={6}>
              <Input
                size="large"
                placeholder="Project Name"
                value={projectNameFilter}
                onChange={(e) => setProjectNameFilter(e.target.value)}
                className="filter-input"
              />
            </Col>
            <Col xs={24} sm={8} md={6} lg={6}>
              <Input
                size="large"
                placeholder="Description"
                value={descriptionFilter}
                onChange={(e) => setDescriptionFilter(e.target.value)}
                className="filter-input"
              />
            </Col>
            <Col xs={24} sm={8} md={6} lg={6}>
              <Input
                size="large"
                placeholder="Owner"
                value={ownerFilter}
                onChange={(e) => setOwnerFilter(e.target.value)}
                className="filter-input"
              />
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} className="search-button-col">
              <Button
                type="primary"
                icon={<SearchOutlined />}
                onClick={handleSearch}
                className="search-button"
              >
                Search
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Header with count and create button */}
        <div className="projects-header">
          <Title level={4} className="projects-count">
            All Projects - {dataSource.length}
          </Title>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreate}
            className="create-button"
          >
            Create Project
          </Button>
        </div>

        {/* Table */}
        <div className="projects-table-wrapper">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{
              pageSize: 10,
              showSizeChanger: false,
              showTotal: (total) => `Total ${total} projects`,
            }}
            className="projects-table"
            scroll={{ x: 'max-content' }}
          />
        </div>
    </div>
  );
};

export default Projects;

