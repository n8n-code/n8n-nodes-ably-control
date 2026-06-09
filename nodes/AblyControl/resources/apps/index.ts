import type { INodeProperties } from 'n8n-workflow';

export const appsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					]
				}
			},
			"options": [
				{
					"name": "GET Accounts Apps",
					"value": "GET Accounts Apps",
					"action": "Lists apps",
					"description": "List all applications for the specified account ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"account_id\"]}}/apps"
						}
					}
				},
				{
					"name": "POST Accounts Apps",
					"value": "POST Accounts Apps",
					"action": "Creates an app",
					"description": "Creates an application with the specified properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"account_id\"]}}/apps"
						}
					}
				},
				{
					"name": "DELETE Apps",
					"value": "DELETE Apps",
					"action": "Deletes an app",
					"description": "Deletes the application with the specified application ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/apps/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PATCH Apps",
					"value": "PATCH Apps",
					"action": "Updates an app",
					"description": "Updates the application with the specified application ID.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/apps/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST Apps Pkcs 12",
					"value": "POST Apps Pkcs 12",
					"action": "Updates app's APNs info from a `.p12` file",
					"description": "Updates the application's Apple Push Notification service (APNs) information.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apps/{{$parameter[\"id\"]}}/pkcs12"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accounts/{account_id}/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"GET Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"required": true,
			"description": "The account ID for which to retrieve the associated applications.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"GET Accounts Apps"
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
						"Apps"
					],
					"operation": [
						"GET Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{account_id}/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"required": true,
			"description": "The account ID of the account in which to create the application.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "Apns Certificate",
			"name": "apnsCertificate",
			"type": "string",
			"default": "",
			"description": "The Apple Push Notification service certificate.",
			"routing": {
				"send": {
					"property": "apnsCertificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "Apns Private Key",
			"name": "apnsPrivateKey",
			"type": "string",
			"default": "",
			"description": "The Apple Push Notification service private key.",
			"routing": {
				"send": {
					"property": "apnsPrivateKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "Apns Use Sandbox Endpoint",
			"name": "apnsUseSandboxEndpoint",
			"type": "boolean",
			"default": true,
			"description": "The Apple Push Notification service sandbox endpoint.",
			"routing": {
				"send": {
					"property": "apnsUseSandboxEndpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "Fcm Key",
			"name": "fcmKey",
			"type": "string",
			"default": false,
			"description": "The Firebase Cloud Messaging key.",
			"routing": {
				"send": {
					"property": "fcmKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My App",
			"description": "The name of the application for your reference only.",
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
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "enabled",
			"description": "The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available.",
			"options": [
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "Tls Only",
			"name": "tlsOnly",
			"type": "boolean",
			"default": true,
			"description": "Enforce TLS for all connections.",
			"routing": {
				"send": {
					"property": "tlsOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
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
						"Apps"
					],
					"operation": [
						"POST Accounts Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /apps/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"DELETE Apps"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The ID of the application to be deleted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"DELETE Apps"
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
						"Apps"
					],
					"operation": [
						"DELETE Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /apps/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"PATCH Apps"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The ID of application to be updated.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"PATCH Apps"
					]
				}
			}
		},
		{
			"displayName": "Apns Certificate",
			"name": "apnsCertificate",
			"type": "string",
			"default": "",
			"description": "The Apple Push Notification service certificate.",
			"routing": {
				"send": {
					"property": "apnsCertificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"PATCH Apps"
					]
				}
			}
		},
		{
			"displayName": "Apns Private Key",
			"name": "apnsPrivateKey",
			"type": "string",
			"default": "",
			"description": "The Apple Push Notification service private key.",
			"routing": {
				"send": {
					"property": "apnsPrivateKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"PATCH Apps"
					]
				}
			}
		},
		{
			"displayName": "Apns Use Sandbox Endpoint",
			"name": "apnsUseSandboxEndpoint",
			"type": "boolean",
			"default": true,
			"description": "The Apple Push Notification service sandbox endpoint.",
			"routing": {
				"send": {
					"property": "apnsUseSandboxEndpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"PATCH Apps"
					]
				}
			}
		},
		{
			"displayName": "Fcm Key",
			"name": "fcmKey",
			"type": "string",
			"default": false,
			"description": "The Firebase Cloud Messaging key.",
			"routing": {
				"send": {
					"property": "fcmKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"PATCH Apps"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My App",
			"description": "The name of the application for your reference only.",
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
						"Apps"
					],
					"operation": [
						"PATCH Apps"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "enabled",
			"description": "The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available.",
			"options": [
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"PATCH Apps"
					]
				}
			}
		},
		{
			"displayName": "Tls Only",
			"name": "tlsOnly",
			"type": "boolean",
			"default": true,
			"description": "Enforce TLS for all connections.",
			"routing": {
				"send": {
					"property": "tlsOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"PATCH Apps"
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
						"Apps"
					],
					"operation": [
						"PATCH Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /apps/{id}/pkcs12",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Apps Pkcs 12"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Apps Pkcs 12"
					]
				}
			}
		},
		{
			"displayName": "POST /apps/{id}/pkcs12<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apps"
					],
					"operation": [
						"POST Apps Pkcs 12"
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
						"Apps"
					],
					"operation": [
						"POST Apps Pkcs 12"
					]
				}
			}
		},
];
