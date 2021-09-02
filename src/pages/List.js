import Template from '../components/Template';
import { Link } from 'react-router-dom';
import { Row, Col, Layout, Steps, Button, message } from 'antd';


export default function Create() {
  return (
    <Template>
      <Link to="/new">
        <Button type="primary">
          New Playbook
        </Button>
      </Link>
    </Template>
  );
}