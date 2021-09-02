import Form from '@rjsf/antd';
import { Row, Col, Layout, Steps, Button, message } from 'antd';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import schema from '../schemas';

import { useEffect, useState } from "react";

const { Step } = Steps;

const steps = [
  'Labels',
  'Custom Fields',
  'Templates',
  'Campaigns',
  'Workflows',
  'Tasks',
  'Events',
  'Work Requests'
];

export default function Editor({ initialData = null }) {
  const [formData, setFormData] = useState(initialData);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    hideAndShow(0);
  }, []);

  const next = () => {
    setCurrent(current + 1);
    hideAndShow(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
    hideAndShow(current - 1);
  };

  const hideAndShow = (stepIndex) => {
    const openIndex = stepIndex + 1;
    console.log(openIndex);

    const nodes = document.querySelectorAll('#root_fixture > div > div');
    nodes.forEach((node, index) => {
      console.log({ node, index });
      if (index === 0) return; // header for list 
      node.style.display = index === openIndex ? 'initial' : 'none';
    })
  }


  return (
    <div>
      <Row gutter={32}>
        <Col span={24}>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item} title={item} />
            ))}
          </Steps>
        </Col>
        <Col span={24}>
          <div className="steps-action">
            <Button style={{ margin: '0 8px' }} onClick={() => prev()} disabled={current <= 0}>
              Previous
            </Button>
            <Button type="primary" onClick={() => next()} disabled={current >= steps.length - 1}>
              Next
            </Button>
          </div>
        </Col>
      </Row>
      <Row gutter={32}>
        <Col span={12}>
          <Form schema={schema}
            formData={formData}
            onChange={(e) => {
              const data = e.formData;
              setFormData(data);
            }}
            onSubmit={(e) => {
              fetch('/playbooks', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              }).then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error('Something went wrong');
                }
              })
                .then((responseJson) => {
                  alert('Saved!');
                })
                .catch((error) => {
                  console.log(error);
                  alert('Something went wrong!');
                });
            }}
          />
        </Col>
        <Col span={12}>
          <AceEditor
            mode="json"
            theme="github"
            onChange={(newValue) => setFormData(JSON.parse(newValue))}
            editorProps={{ $blockScrolling: true }}
            value={JSON.stringify(formData, null, 2)}
            fontSize={14}
          />
        </Col>
      </Row>
    </div>
  );
}