import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { appsDescription } from './resources/apps';
import { keysDescription } from './resources/keys';
import { namespacesDescription } from './resources/namespaces';
import { queuesDescription } from './resources/queues';
import { rulesDescription } from './resources/rules';
import { tokensDescription } from './resources/tokens';

export class AblyControl implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ably Control',
		name: 'N8nDevAblyControl',
		icon: { light: 'file:./ably-control.svg', dark: 'file:./ably-control.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Use Control API to manage apps, namespaces, keys, queues, and rules.',
		defaults: { name: 'Ably Control' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAblyControlApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Apps",
					"value": "Apps",
					"description": ""
				},
				{
					"name": "Keys",
					"value": "Keys",
					"description": ""
				},
				{
					"name": "Namespaces",
					"value": "Namespaces",
					"description": ""
				},
				{
					"name": "Queues",
					"value": "Queues",
					"description": ""
				},
				{
					"name": "Rules",
					"value": "Rules",
					"description": ""
				},
				{
					"name": "Tokens",
					"value": "Tokens",
					"description": ""
				}
			],
			"default": ""
		},
		...appsDescription,
		...keysDescription,
		...namespacesDescription,
		...queuesDescription,
		...rulesDescription,
		...tokensDescription
		],
	};
}
