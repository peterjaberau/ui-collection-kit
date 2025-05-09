import { WorkflowWebhookTrigger } from '@twenty-modules/workflow/types/Workflow';
import { assertUnreachable } from '@twenty-modules/workflow/utils/assertUnreachable';
import { WebhookHttpMethods } from '@twenty-modules/workflow/workflow-trigger/constants/WebhookTriggerHttpMethodOptions';

export const getWebhookTriggerDefaultSettings = (
  webhookHttpMethods: WebhookHttpMethods,
): WorkflowWebhookTrigger['settings'] => {
  switch (webhookHttpMethods) {
    case 'GET':
      return {
        outputSchema: {},
        httpMethod: webhookHttpMethods,
        authentication: null,
      };
    case 'POST':
      return {
        outputSchema: {
          message: {
            icon: 'IconVariable',
            type: 'string',
            label: 'message',
            value: 'Workflow was started',
            isLeaf: true,
          },
        },
        httpMethod: webhookHttpMethods,
        expectedBody: {
          message: 'Workflow was started',
        },
        authentication: null,
      };
  }
  return assertUnreachable(webhookHttpMethods, 'Invalid webhook http method');
};
