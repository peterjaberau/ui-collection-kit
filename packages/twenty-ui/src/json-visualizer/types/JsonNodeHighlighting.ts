import { ThemeColor } from '../../theme';

export type JsonNodeHighlighting =
  | Extract<ThemeColor, 'blue' | 'red'>
  | 'partial-blue';
