import { Grid, IGridOptions } from "@formily/grid"
import { observer } from "@formily/react"
import { markRaw } from "@formily/reactive"
import React, { useContext, useLayoutEffect, useMemo, useRef } from "react"
import { useFormLayout } from "../form-layout"
import { pickDataProps } from "../__builtins__"
import { chakra } from "@chakra-ui/react"

const FormGridContext = React.createContext<Grid<HTMLElement>>(null as any)

export interface IFormGridProps extends IGridOptions {
  grid?: Grid<HTMLElement>
  style?: React.CSSProperties
}

export interface IGridColumnProps {
  gridSpan?: number
  style?: React.CSSProperties
}

export const createFormGrid = (props: IFormGridProps) => {
  return markRaw(new Grid(props))
}

export const useFormGrid = () => useContext(FormGridContext)

const InternalFormGrid = observer(
  ({ children, style, ...props }: React.PropsWithChildren<IFormGridProps>) => {
    const layout = useFormLayout()
    const options = {
      columnGap: layout?.gridColumnGap ?? 8,
      rowGap: layout?.gridRowGap ?? 8,
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
        <chakra.div
          css={{
            display: "grid",
            ...style,
            gridTemplateColumns: grid.templateColumns,
            gap: grid.gap,
          }}
          {...dataProps}
          ref={ref}
        >
          {children}
        </chakra.div>
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
      <chakra.div {...props} css={props.style} data-grid-span={gridSpan}>
        {children}
      </chakra.div>
    )
  },
)

export const FormGrid = Object.assign(InternalFormGrid, {
  createFormGrid,
  useFormGrid,
  GridColumn,
})

export default FormGrid
