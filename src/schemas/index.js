import workflowSchema from './workflow';
import campaignSchema from './campaign';
import customFieldsSchema from './customFields';
import labelSchema from './label';
import templateSchema from './template';
import taskSchema from './task';
import eventSchema from './event';
import workRequestSchema from './workRequest';

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
        "labels": {
          "type": "array",
          "title": "A list of labels",
          "default": [],
          "items": labelSchema,
        },
        "customFields": {
          "type": "array",
          "title": "A list of Custom Fields",
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
        "workflows": {
          "type": "array",
          "title": "A list of workflows",
          "default": [],
          "items": workflowSchema,
        },
        "tasks": {
          "type": "array",
          "title": "A list of tasks",
          "default": [],
          "items": taskSchema,
        },
        "events": {
          "type": "array",
          "title": "A list of events",
          "default": [],
          "items": eventSchema
        },
        "workRequests": {
          "type": "array",
          "title": "A list of Work Requests",
          "default": [],
          "items": workRequestSchema
        }
      }
    },
  }
};

export default schema;