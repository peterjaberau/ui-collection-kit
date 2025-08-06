import { Grid, IGridOptions } from "@formily/grid"
import { Grid as ChakraGrid, GridItem as ChakraGridItem, chakra } from "@chakra-ui/react"

import { observer } from "@formily/react"
import { markRaw } from "@formily/reactive"
import React, { useContext, useLayoutEffect, useMemo, useRef } from "react"
import { useFormLayout } from "../form-layout"
import { pickDataProps } from "../__builtins__"

const FormGridContext = React.createContext<any>(null as any)

export interface IFormGridProps extends IGridOptions {
  grid?: Grid<HTMLElement>
  style?: React.CSSProperties
  [key: string]: any
}

export interface IGridColumnProps {
  gridSpan?: number
  style?: React.CSSProperties
  [key: string]: any
}

export const createFormGrid = (props: IFormGridProps) => {
  return markRaw(new Grid(props))
}

export const useFormGrid = () => useContext(FormGridContext)

const InternalFormGrid = observer(
  ({ children, className, style, ...props }: React.PropsWithChildren<IFormGridProps>) => {
    const layout = useFormLayout()
    const options = {
      columnGap: layout?.gridColumnGap ?? 8,
      rowGap: layout?.gridRowGap ?? 4,
      ...props,
    }
    const grid = useMemo(() => markRaw(options?.grid ? options.grid : new Grid(options)), [Grid.id(options)])
    const ref = useRef<HTMLDivElement>(null)

    const dataProps = pickDataProps(props)
    useLayoutEffect(() => {
      if (ref.current) {
        return grid.connect(ref.current)
      }
    }, [grid])
    return (
      <FormGridContext.Provider value={grid}>
        <ChakraGrid
          {...dataProps}
          templateColumns={grid.templateColumns}
          gap={grid.gap}
          css={{
            ...style,
          }}
          ref={ref}
        >
          {children}
        </ChakraGrid>
      </FormGridContext.Provider>
    )
  },
  {
    forwardRef: true,
  },
)

export const GridColumn: React.FC<React.PropsWithChildren<IGridColumnProps>> = observer(
  ({ gridSpan = 1, children, ...props }) => {
    return (
      <ChakraGridItem {...props} css={props.style} data-grid-span={gridSpan}>
        {children}
      </ChakraGridItem>
    )
  },
)

export const FormGrid = Object.assign(InternalFormGrid, {
  createFormGrid,
  useFormGrid,
  GridColumn,
})

export default FormGrid
