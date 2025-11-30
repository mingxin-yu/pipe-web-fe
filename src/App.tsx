import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import TopNavBar from './components/TopNavBar';
import LeftNavBar from './components/LeftNavBar';
import UserProfile from './components/UserProfile';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

const { Content } = Layout;

function App() {
  const navigate = useNavigate();

  const handleUserMenuClick = (key: string) => {
    if (key === 'logout') {
      // Handle logout
      console.log('Logout');
      // You can add logout logic here, e.g., navigate to login page
    }
  };

  return (
    <Layout className="app-layout">
      <TopNavBar onUserMenuClick={handleUserMenuClick} />
      <Layout>
        <LeftNavBar />
        <Content className="app-content">
          <Routes>
            <Route path="/user-profile" element={
              <UserProfile
                userId="user-123"
                email="user@example.com"
                firstName="John"
                lastName="Doe"
                organization={{
                  id: "org-1",
                  name: "Example Organization",
                  domain: "example.com"
                }}
                onCancel={() => navigate('/')}
              />
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-detail" element={<ProjectDetail />} />
            <Route path="/designs" element={<div>Designs Page</div>} />
            <Route path="/design-spaces" element={<div>Design Spaces Page</div>} />
            <Route path="/design-params" element={<div>Design Parameters Page</div>} />
            <Route path="/design-results" element={<div>Design Results Page</div>} />
            <Route path="/design-tasks" element={<div>Design Tasks Page</div>} />
            <Route path="/organizations" element={<div>Organizations Page</div>} />
            <Route path="/" element={<div>Your page content goes here</div>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
