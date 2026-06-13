import type { INodeProperties } from 'n8n-workflow';

export const tokensDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					]
				}
			},
			"options": [
				{
					"name": "GET Me",
					"value": "GET Me",
					"action": "Get token details",
					"description": "Get token details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"GET Me"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer_auth",
			"type": "string",
			"default": "",
			"description": "Control API uses bearer authentication. You need to generate an access token for use with this API. More details can be found in the <a href=\"https://ably.com/documentation/control-api/#authentication\">Ably documentation</a>.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"GET Me"
					]
				}
			}
		},
];
