import labelsSchema from './_labels';

export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "Events",
    "description": "Define sample events",
    "default": {},
    "examples": [
        {
            "campaignName": "Sample: Product Launch 2021 - Swift Sneaker",
            "title": "Swift Sneaker Product Launch",
            "description": "The event description",
            "labels": [
                "Marathoner",
                "Men",
                "Women",
                "Cross Country Running",
                "Running",
                "Article",
                "Middle of the Funnel",
                "USA"
            ],
            "startDate": "1 day",
            "endDate": "1 day",
        }
    ],
    "required": [
        "campaignName",
        "title",
        "description",
        "startDate",
        "endDate",
        "labels",
    ],
    "properties": {
        "campaignName": {
            "$id": "#/properties/campaignName",
            "type": "string",
            "title": "Campaign name",
            "description": "You need to define a campaign with this name.",
            "default": "",
            "examples": [
                "Sample: Product Launch 2021 - Swift Sneaker"
            ]
        },
        "title": {
            "$id": "#/properties/title",
            "type": "string",
            "title": "Event title",
            "description": "The name of the event.",
            "default": "",
            "examples": [
                "Interview with Usain Bolt on Swift Runners"
            ]
        },
        "description": {
            "$id": "#/properties/title",
            "type": "string",
            "title": "Event description",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "We interview Usain Bolt"
            ]
        },
        "startDate": {
            "$id": "#/properties/startDate",
            "type": "string",
            "title": "The startDate schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "1 day"
            ]
        },
        "endDate": {
            "$id": "#/properties/endDate",
            "type": "string",
            "title": "The endDate schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "1 day"
            ]
        },
        "labels": labelsSchema
    }
};
