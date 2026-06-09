import type { INodeProperties } from 'n8n-workflow';

export const queuesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					]
				}
			},
			"options": [
				{
					"name": "GET Apps Queues",
					"value": "GET Apps Queues",
					"action": "Lists queues",
					"description": "Lists the queues associated with the specified application ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/queues"
						}
					}
				},
				{
					"name": "POST Apps Queues",
					"value": "POST Apps Queues",
					"action": "Creates a queue",
					"description": "Creates a queue for the application specified by application ID. The properties for the queue to be created are specified in the request body.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/queues"
						}
					}
				},
				{
					"name": "DELETE Apps Queues",
					"value": "DELETE Apps Queues",
					"action": "Deletes a queue",
					"description": "Delete the queue with the specified queue name, from the application with the specified application ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/queues/{{$parameter[\"queue_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /apps/{app_id}/queues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"GET Apps Queues"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"GET Apps Queues"
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
						"Queues"
					],
					"operation": [
						"GET Apps Queues"
					]
				}
			}
		},
		{
			"displayName": "POST /apps/{app_id}/queues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"POST Apps Queues"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"POST Apps Queues"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Max Length",
			"name": "maxLength",
			"type": "number",
			"default": 10000,
			"description": "Message limit in number of messages.",
			"routing": {
				"send": {
					"property": "maxLength",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"POST Apps Queues"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My queue",
			"description": "A friendly name for your queue.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"POST Apps Queues"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east-1-a",
			"description": "The data center region. US East (Virginia) or EU West (Ireland). Values are `us-east-1-a` or `eu-west-1-a`.",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"POST Apps Queues"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ttl",
			"name": "ttl",
			"type": "number",
			"default": 60,
			"description": "TTL in minutes.",
			"routing": {
				"send": {
					"property": "ttl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"POST Apps Queues"
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
						"Queues"
					],
					"operation": [
						"POST Apps Queues"
					]
				}
			}
		},
		{
			"displayName": "DELETE /apps/{app_id}/queues/{queue_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"DELETE Apps Queues"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"DELETE Apps Queues"
					]
				}
			}
		},
		{
			"displayName": "Queue ID",
			"name": "queue_id",
			"required": true,
			"description": "The queue ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Queues"
					],
					"operation": [
						"DELETE Apps Queues"
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
						"Queues"
					],
					"operation": [
						"DELETE Apps Queues"
					]
				}
			}
		},
];
