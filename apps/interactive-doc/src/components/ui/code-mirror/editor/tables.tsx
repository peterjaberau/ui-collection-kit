import type { CompletionSource } from "@codemirror/autocomplete";
import type { Extension } from "@codemirror/state";
import { surrealqlLanguage } from "@surrealdb/codemirror";
import { useDatabaseStore } from "../store/use";

const TABLE_SOURCE: CompletionSource = (context) => {
	const match = context.matchBefore(/(from|update|create|delete|into) \w*/i);
	const tables = useDatabaseStore().getState().connectionSchema.database.tables;
	const names = tables.map((table: any) => table.schema.name);

	if (!context.explicit && !match) {
		return null;
	}

	return {
		from: match ? match.from + match.text.indexOf(" ") + 1 : context.pos,
		validFor: /\w+$/,
		options: names.map((table: any) => ({
			label: table,
			type: "class",
		})),
	};
};

/**
 * An extension used to autocomplete table names
 */
export const surqlTableCompletion = (): Extension => {
	return surrealqlLanguage.data.of({
		autocomplete: TABLE_SOURCE,
	});
};
