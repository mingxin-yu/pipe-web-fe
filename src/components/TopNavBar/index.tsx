import { useNavigate } from 'react-router-dom';
import { Layout, Avatar, Row, Col, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { NAV_ITEMS, NAV_TITLE } from '../../const/navigation';
import './index.css';

const { Header } = Layout;

interface TopNavBarProps {
  onUserMenuClick?: (key: string) => void;
}

const TopNavBar = ({ onUserMenuClick }: TopNavBarProps) => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  const handleUserMenuClick = ({ key }: { key: string }) => {
    if (key === 'profile') {
      navigate('/user-profile');
      if (onUserMenuClick) {
        onUserMenuClick(key);
      }
    } else if (onUserMenuClick) {
      onUserMenuClick(key);
    }
  };

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'User Profile',
      icon: <UserOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  return (
    <Header className="top-nav-header">
      <Row align="middle" justify="space-between">
        {/* Left: Logo */}
        <Col>
          <div className="top-nav-logo">{NAV_TITLE}</div>
        </Col>

        {/* Mid: Navigation Choices */}
        <Col flex="auto" className="top-nav-center">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.key}
              onClick={() => handleNavClick(item.path)}
              className="top-nav-item"
            >
              {item.label}
            </div>
          ))}
        </Col>

        {/* Right: User Avatar with Dropdown */}
        <Col>
          <Dropdown
            menu={{ items: userMenuItems, onClick: handleUserMenuClick }}
            placement="bottomRight"
            trigger={['click']}
          >
            <Avatar
              size="large"
              icon={<UserOutlined />}
              className="top-nav-avatar"
            />
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default TopNavBar;

