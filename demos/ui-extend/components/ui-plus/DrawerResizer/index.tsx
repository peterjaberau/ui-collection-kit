import { useSlotRecipe } from '@chakra-ui/react';
import { drawerResizerRecipe } from './recipe';
import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { clamp } from '@/utils/helpers';

export interface DrawerResizerProps {
  minSize: number;
  maxSize: number;
  onResize: (width: number) => void;
}

export function DrawerResizer({
                                minSize,
                                maxSize,
                                onResize,
                              }: DrawerResizerProps) {
  const [isResizing, setIsResizing] = useState(false);
  const resizer = useRef<HTMLDivElement>(null);

  const recipe = useSlotRecipe({ recipe: drawerResizerRecipe });
  const styles = recipe(recipe);

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      onResize(clamp(window.innerWidth - event.clientX, minSize, maxSize));
    },
    [minSize, maxSize, onResize]
  );

  const onMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    setIsResizing(false);
    document.body.style.cursor = '';
  }, [onMouseMove]);

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      setIsResizing(true);
      document.body.style.cursor = 'ew-resize';
    },
    [onMouseMove, onMouseUp]
  );

  useEffect(() => {
    const node = resizer.current;
    if (node) {
      node.addEventListener('mousedown', onMouseDown);
    }
    return () => {
      if (node) {
        node.removeEventListener('mousedown', onMouseDown);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseDown, onMouseMove, onMouseUp]);

  return (
    <Box ref={resizer} css={styles.root}>
      <Box css={styles.resizer} />
    </Box>
  );
}
