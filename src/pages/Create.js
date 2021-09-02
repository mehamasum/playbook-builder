import Editor from '../components/Editor';
import Template from '../components/Template';
import { PageHeader } from 'antd';

export default function Create() {
  return (
    <Template>
      <>
      <PageHeader
        className="site-page-header"
        title="New Playbook"
        subTitle="Build your playbook"
      />
      <Editor />
      </>
    </Template>
  );
}