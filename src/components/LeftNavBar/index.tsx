import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { LEFT_NAV_ITEMS, type LeftNavItem } from '../../const/leftNav';
import './index.css';

const { Sider } = Layout;

// Helper function to find path by key in nested structure
const findPathByKey = (items: LeftNavItem[], key: string): string | null => {
  for (const item of items) {
    if (item.key === key) {
      return item.path;
    }
    if (item.children) {
      const found = findPathByKey(item.children, key);
      if (found) return found;
    }
  }
  return null;
};

const LeftNavBar = () => {
  const navigate = useNavigate();
  // Get all parent keys that have children to keep them always open
  const defaultOpenKeys = LEFT_NAV_ITEMS.filter(item => item.children).map(item => item.key);
  const [openKeys] = useState<string[]>(defaultOpenKeys);

  const handleMenuClick = ({ key }: { key: string }) => {
    const path = findPathByKey(LEFT_NAV_ITEMS, key);
    if (path) {
      navigate(path);
    }
  };

  const menuItems = LEFT_NAV_ITEMS.map((item) => {
    if (item.children) {
      return {
        key: item.key,
        label: item.label,
        children: item.children.map((child) => ({
          key: child.key,
          label: child.label,
        })),
      };
    }
    return {
      key: item.key,
      label: item.label,
    };
  });

  return (
    <Sider width={280} className="left-nav-sider">
      <Menu
        mode="inline"
        items={menuItems}
        onClick={handleMenuClick}
        openKeys={openKeys}
        onOpenChange={() => {}} // Prevent closing by not updating state
      />
    </Sider>
  );
};

export default LeftNavBar;

