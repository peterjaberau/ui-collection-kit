import { ShouldExpandNodeInitiallyProps } from '../contexts/JsonTreeContext';

export const isTwoFirstDepths = ({ depth }: ShouldExpandNodeInitiallyProps) =>
  depth <= 1;
