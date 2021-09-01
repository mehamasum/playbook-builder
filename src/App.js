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
    "definitions": {
      "resources": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "default": "Default name"
          }
        }
      }
    },
    "type": "object",
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
      "custom_fields": {
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
            }} />
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
