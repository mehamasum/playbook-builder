import fieldValuesSchema from './_field_values';


export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "Work Request",
    "default": {},
    "examples": [
        {
            "templateName": "Work request template",
            "title": "Enter the title of your work request here",
            "field_values": [
                {
                    "label": "Brief",
                    "value": [
                        "<p>Please summarize this program and what you want to achieve. <br />How will you measure the success of the campaign?</p>"
                    ]
                },
                {
                    "label": "Goals",
                    "value": [
                        "What objectives are you trying to achieve? Be specific.\n        What are the priorities of the objectives?\n        Can you suggest strategy or positioning to achieve these objectives?\n\n        Examples:\n        1. Increase brand awareness\n        2. Drive more leads and users to the website\n        3. Revenue increase by 10%"
                    ]
                },
                {
                    "label": "Success Metrics",
                    "value": [
                        "Please add your own success metrics here. Below are some examples:\n\n        1. X% of downloads\n        2. # of new sign-ups\n        3. x% of visits to the site\n        4. Number of new customers\n        5. Number of paid customers"
                    ]
                },
                {
                    "label": "Key Message",
                    "value": [
                        "If you could get one sentence through all the clutter, what would that be?"
                    ]
                },
                {
                    "label": "Type of Campaign",
                    "value": [
                        "New Product"
                    ]
                },
                {
                    "label": "Holiday Sale Description",
                    "value": [
                        "Enter info here if there's a holiday season"
                    ]
                }
            ]
        }
    ],
    "required": [
        "templateName",
        "title",
        "field_values"
    ],
    "properties": {
        "title": {
            "$id": "#/properties/title",
            "type": "string",
            "title": "Title",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Enter the title of your work request here"
            ]
        },
        "templateName": {
            "$id": "#/properties/templateName",
            "type": "string",
            "title": "Template Name",
            "default": "",
            "examples": [
                "Work request template"
            ]
        },
        "field_values": fieldValuesSchema
    }
};