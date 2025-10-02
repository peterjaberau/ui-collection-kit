import { parseAnnotation } from "../utils"

export const addAnnotationOperationImplementation: any = ({context, operation}: any) => {
  const parsedAnnotation = parseAnnotation({
    annotation: {
      _type: operation.annotation.name,
      ...operation.annotation.value,
    },
    context,
    options: {validateFields: true},
  })

}
export const removeAnnotationOperationImplementation: any = ({operation}: any) => {

}
export const blockSetOperationImplementation: any = ({context, operation}: any) => {}
export const blockUnsetOperationImplementation: any = ({context, operation}: any) => {}
export const childSetOperationImplementation: any = ({context, operation}: any) => {}
export const childUnsetOperationImplementation: any = ({context, operation}: any) => {}
export const decoratorAddOperationImplementation: any = ({context, operation}: any) => {}
export const removeDecoratorOperationImplementation: any = ({context, operation}: any) => {}
export const deleteOperationImplementation: any = ({context, operation}: any) => {}
export const historyRedoOperationImplementation: any = ({context, operation}: any) => {}
export const historyUndoOperationImplementation: any = ({context, operation}: any) => {}
export const insertBlockOperationImplementation: any = ({context, operation}: any) => {}
export const insertChildOperationImplementation: any = ({context, operation}: any) => {}
export const insertTextOperationImplementation: any = ({context, operation}: any) => {}
export const moveBackwardOperationImplementation: any = ({context, operation}: any) => {}
export const moveBlockOperationImplementation: any = ({context, operation}: any) => {}
export const moveForwardOperationImplementation: any = ({context, operation}: any) => {}
export const selectOperationImplementation: any = ({context, operation}: any) => {}

export const behaviorOperationImplementations: any = {
  'annotation.add': addAnnotationOperationImplementation,
  'annotation.remove': removeAnnotationOperationImplementation,
  'block.set': blockSetOperationImplementation,
  'block.unset': blockUnsetOperationImplementation,
  'child.set': childSetOperationImplementation,
  'child.unset': childUnsetOperationImplementation,
  'decorator.add': decoratorAddOperationImplementation,
  'decorator.remove': removeDecoratorOperationImplementation,
  'delete': deleteOperationImplementation,
  'history.redo': historyRedoOperationImplementation,
  'history.undo': historyUndoOperationImplementation,
  'insert.block': insertBlockOperationImplementation,
  'insert.child': insertChildOperationImplementation,
  'insert.text': insertTextOperationImplementation,
  'move.backward': moveBackwardOperationImplementation,
  'move.block': moveBlockOperationImplementation,
  'move.forward': moveForwardOperationImplementation,
  'select': selectOperationImplementation,
}

export function performOperation({ context, operation }: any) {

  switch (operation.type) {
    case 'annotation.add': {
      behaviorOperationImplementations['annotation.add']({
        context,
        operation: operation,
      })
      break
    }
    case 'annotation.remove': {
      behaviorOperationImplementations['annotation.remove']({
        context,
        operation: operation,
      })
      break
    }
    case 'block.set': {
      behaviorOperationImplementations['block.set']({
        context,
        operation: operation,
      })
      break
    }
    case 'block.unset': {
      behaviorOperationImplementations['block.unset']({
        context,
        operation: operation,
      })
      break
    }
    case 'child.set': {
      behaviorOperationImplementations['child.set']({
        context,
        operation: operation,
      })
      break
    }
    case 'child.unset': {
      behaviorOperationImplementations['child.unset']({
        context,
        operation: operation,
      })
      break
    }
    case 'decorator.add': {
      behaviorOperationImplementations['decorator.add']({
        context,
        operation: operation,
      })
      break
    }
    case 'decorator.remove': {
      behaviorOperationImplementations['decorator.remove']({
        context,
        operation: operation,
      })
      break
    }
    case 'delete': {
      behaviorOperationImplementations.delete({
        context,
        operation: operation,
      })
      break
    }
    case 'history.redo': {
      behaviorOperationImplementations['history.redo']({
        context,
        operation: operation,
      })
      break
    }
    case 'history.undo': {
      behaviorOperationImplementations['history.undo']({
        context,
        operation: operation,
      })
      break
    }
    case 'insert.block': {
      behaviorOperationImplementations['insert.block']({
        context,
        operation: operation,
      })
      break
    }
    case 'insert.child': {
      behaviorOperationImplementations['insert.child']({
        context,
        operation: operation,
      })
      break
    }
    case 'insert.text': {
      behaviorOperationImplementations['insert.text']({
        context,
        operation: operation,
      })
      break
    }
    case 'move.backward': {
      behaviorOperationImplementations['move.backward']({
        context,
        operation: operation,
      })
      break
    }
    case 'move.block': {
      behaviorOperationImplementations['move.block']({
        context,
        operation: operation,
      })
      break
    }
    case 'move.forward': {
      behaviorOperationImplementations['move.forward']({
        context,
        operation: operation,
      })
      break
    }
    default: {
      behaviorOperationImplementations.select({
        context,
        operation: operation,
      })
      break
    }
  }

}
