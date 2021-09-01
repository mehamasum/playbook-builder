import Form from "@rjsf/core";
import workflowSchema from './schemas/workflow';
import campaignSchema from './schemas/campaign';
import customFieldsSchema from './schemas/customFields';
import labelSchema from './schemas/label';
import templateSchema from './schemas/template';
import taskSchema from './schemas/task';

import './App.css';
import { useState } from "react";

function App() {
  const [json, setJson] = useState(null);
  const [formData, setFormData] = useState(null);

  const schema = {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "title": "Name",
        "default": "Playbook name"
      },
      "color": {
        "type": "string",
        "title": "Color",
        "default": "#e0e0e0"
      },
      "icon": {
        "type": "string",
        "title": "Icon",
        "default": "content"
      },
      "image": {
        "type": "string",
        "title": "Hero image",
        "default": "https://via.placeholder.com/150"
      },
      "fixture": {
        "type": "object",
        "title": "Resources",
        "properties": {
          "workflows": {
            "type": "array",
            "title": "A list of workflows",
            "default": [],
            "items": workflowSchema,
          },
          "labels": {
            "type": "array",
            "title": "A list of labels",
            "default": [],
            "items": labelSchema,
          },
          "customFields": {
            "type": "array",
            "title": "A list of custom fields",
            "default": [],
            "items": customFieldsSchema,
          },
          "templates": {
            "type": "array",
            "title": "A list of templates",
            "default": [],
            "items": templateSchema,
          },
          "campaigns": {
            "type": "array",
            "title": "A list of campaigns",
            "default": [],
            "items": campaignSchema,
          },
          "tasks": {
            "type": "array",
            "title": "A list of tasks",
            "default": [],
            "items": taskSchema,
          }
        }
      },
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Playbook Builder</h1>
      </header>

      <div className="row">
        <div className="col-md-6">
          <Form schema={schema}
            formData={formData}
            onChange={(e) => {
              const data = e.formData;
              setFormData(data);
              setJson(JSON.stringify(data, null, 2));
            }}
            onSubmit={(e) => {
              fetch('/playbooks', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              }).then(res => res.json())
                .then(res => console.log(res));
            }}
          />
        </div>
        <div className="col-md-6">
          <pre>
            {json}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
