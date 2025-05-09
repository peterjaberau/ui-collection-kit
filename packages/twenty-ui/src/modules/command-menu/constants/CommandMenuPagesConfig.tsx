import { CommandMenu } from '@twenty-modules/command-menu/components/CommandMenu';
import { CommandMenuCalendarEventPage } from '@twenty-modules/command-menu/pages/calendar-event/components/CommandMenuCalendarEventPage';
import { CommandMenuMessageThreadPage } from '@twenty-modules/command-menu/pages/message-thread/components/CommandMenuMessageThreadPage';
import { CommandMenuRecordPage } from '@twenty-modules/command-menu/pages/record-page/components/CommandMenuRecordPage';
import { CommandMenuEditRichTextPage } from '@twenty-modules/command-menu/pages/rich-text-page/components/CommandMenuEditRichTextPage';
import { CommandMenuSearchRecordsPage } from '@twenty-modules/command-menu/pages/search/components/CommandMenuSearchRecordsPage';
import { CommandMenuWorkflowSelectAction } from '@twenty-modules/command-menu/pages/workflow/action/components/CommandMenuWorkflowSelectAction';
import { CommandMenuWorkflowEditStep } from '@twenty-modules/command-menu/pages/workflow/step/edit/components/CommandMenuWorkflowEditStep';
import { CommandMenuWorkflowRunViewStep } from '@twenty-modules/command-menu/pages/workflow/step/view-run/components/CommandMenuWorkflowRunViewStep';
import { CommandMenuWorkflowViewStep } from '@twenty-modules/command-menu/pages/workflow/step/view/components/CommandMenuWorkflowViewStep';
import { CommandMenuWorkflowSelectTriggerType } from '@twenty-modules/command-menu/pages/workflow/trigger-type/components/CommandMenuWorkflowSelectTriggerType';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';

export const COMMAND_MENU_PAGES_CONFIG = new Map<
  CommandMenuPages,
  React.ReactNode
>([
  [CommandMenuPages.Root, <CommandMenu />],
  [CommandMenuPages.ViewRecord, <CommandMenuRecordPage />],
  [CommandMenuPages.ViewEmailThread, <CommandMenuMessageThreadPage />],
  [CommandMenuPages.ViewCalendarEvent, <CommandMenuCalendarEventPage />],
  [CommandMenuPages.EditRichText, <CommandMenuEditRichTextPage />],
  [
    CommandMenuPages.WorkflowStepSelectTriggerType,
    <CommandMenuWorkflowSelectTriggerType />,
  ],
  [
    CommandMenuPages.WorkflowStepSelectAction,
    <CommandMenuWorkflowSelectAction />,
  ],
  [CommandMenuPages.WorkflowStepEdit, <CommandMenuWorkflowEditStep />],
  [CommandMenuPages.WorkflowStepView, <CommandMenuWorkflowViewStep />],
  [CommandMenuPages.WorkflowRunStepView, <CommandMenuWorkflowRunViewStep />],
  [CommandMenuPages.SearchRecords, <CommandMenuSearchRecordsPage />],
]);
