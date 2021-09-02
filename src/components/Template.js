import Form from '@rjsf/antd';
import "antd/dist/antd.css";
import { Row, Col, Layout, Steps, Button, message } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Template({ children }) {
  return (
    <Layout className="site-layout">
      <Header className="site-header">
        Playbook Manager
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2021 Welcome</Footer>
    </Layout>
  );
}