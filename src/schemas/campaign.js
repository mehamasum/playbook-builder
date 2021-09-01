import briefSchema from './_brief';
import labelsSchema from './_labels';

export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "Campaign",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "description": "",
            "endDate": "1 month",
            "startDate": "2 days",
            "parentCampaign": "Sample: Product Launch 2021 - Swift Sneaker",
            "title": "Basketball Subcampaign",
            "labels": [
                "USA",
                "18-40 year olds"
            ],
            "brief": {
                "templateName": "Campaign Brief",
                "title": "Brief - Basketball",
                "field_values": [
                    {
                        "label": "Brief",
                        "value": [
                            "<p><strong><span style=\"font-size: 24px;\">Swift Steph Basketball High-Top&nbsp;</span></strong><br /><br />We are launching a new product [The Swift High Top] and need to create awareness of the benefits it offers to our customers. The product allows users to [fill in your response here}. We will create awareness by [fill your in response here].</p>"
                        ]
                    },
                    {
                        "label": "Goals",
                        "value": [
                            "Please edit the examples below to your specific use case:\n          1. Receive more than 10,000 website visits within 2 weeks\n          2. 10% of visitors click on the product\n          3. 20% of visitors who click on the product convert to paid customers"
                        ]
                    },
                    {
                        "label": "Success Metrics",
                        "value": [
                            "Please edit the examples below to your specific use case:\n          1. 10,000 unique visitors\n          2. 1,000 visitors click on the product\n          3. 200 new paid customers"
                        ]
                    },
                    {
                        "label": "Key Message",
                        "value": [
                            "New tech on high-top basketball sneakers and collaborations/partnership with NBA players"
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
                            "New Swift Sneaker and the holiday gift guide"
                        ]
                    }
                ]
            }
        }
    ],
    "required": [
        "description",
        "endDate",
        "startDate",
        "title",
        "labels",
    ],
    "properties": {
        "title": {
            "$id": "#/properties/title",
            "type": "string",
            "title": "Campaign title",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Basketball Subcampaign"
            ]
        },
        "description": {
            "$id": "#/properties/description",
            "type": "string",
            "title": "Campaign description",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                ""
            ]
        },
        "startDate": {
            "$id": "#/properties/startDate",
            "type": "string",
            "title": "Campaign start date from today",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "2 days"
            ]
        },
        "endDate": {
            "$id": "#/properties/endDate",
            "type": "string",
            "title": "Campaign end date from today",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "1 month"
            ]
        },
        "parentCampaign": {
            "$id": "#/properties/parentCampaign",
            "type": "string",
            "title": "Name of parent campaign",
            "description": "You need to define another campaign with this name",
            "default": "",
            "examples": [
                "Sample: Product Launch 2021 - Swift Sneaker"
            ]
        },
       
        "labels": labelsSchema, 
        "brief": briefSchema
    }
};