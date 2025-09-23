import type { CompletionSource } from "@codemirror/autocomplete"
import type { Extension } from "@codemirror/state"
import { surrealqlLanguage } from "@surrealdb/codemirror"

// const TABLE_SOURCE: CompletionSource = (context) => {
//   const [snapshot] = useDatabaseStore()
// 	const match = context.matchBefore(/(from|update|create|delete|into) \w*/i);
// 	const tables = useDatabaseStore().getState().connectionSchema.database.tables;
// 	const names = tables.map((table: any) => table.schema.name);
//
// 	if (!context.explicit && !match) {
// 		return null;
// 	}
//
// 	return {
// 		from: match ? match.from + match.text.indexOf(" ") + 1 : context.pos,
// 		validFor: /\w+$/,
// 		options: names.map((table: any) => ({
// 			label: table,
// 			type: "class",
// 		})),
// 	};
// };

const createTableSource =
  (snapshot: any): CompletionSource =>
  (context) => {
    const match = context.matchBefore(/(from|update|create|delete|into) \w*/i)
    const tables = snapshot?.context.connectionSchema.database.tables ?? []
    const names = tables.map((table: any) => table.schema.name)


    console.log('---tables-----', { tables, context})

    if (!context.explicit && !match) {
      return null
    }

    return {
      from: match ? match.from + match.text.indexOf(" ") + 1 : context.pos,
      validFor: /\w+$/,
      options: names.map((table: any) => ({
        label: table,
        type: "class",
      })),
    }
  }

/**
 * An extension used to autocomplete table names
 */
export const surqlTableCompletion = (snapshot?: any): Extension => {
  return surrealqlLanguage.data.of({
    autocomplete: createTableSource(snapshot), //TABLE_SOURCE,
  })
}
