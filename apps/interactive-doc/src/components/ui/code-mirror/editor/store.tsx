import type { Extension, StateEffectType } from "@codemirror/state";
import { ViewPlugin } from "@codemirror/view";
import { watchStore } from "../store/utils";

/**
 * An editor extension which listens to a store update and dispatches
 * a state effect
 * @param options
 * @returns
 */
export function storeWatcher(options: any): Extension {
	return ViewPlugin.define((view) => ({
		destroy: watchStore({
			initial: options.initial,
			store: options.store,
			select: options.select,
			then: (value) => {
				return view.dispatch({ effects: options.effect.of(value) });
			},
		}),
	}));
}
