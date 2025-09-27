import { CompletionSource, CompletionContext, Completion, autocompletion } from "@codemirror/autocomplete"
import type { Extension } from "@codemirror/state"

export function autoCompleteDataSource(snapshot?: any): string[] {
  // defensively traverse possible shapes for `snapshot`
  const tables =
    snapshot?.context?.connectionSchema?.database?.tables ?? snapshot?.connectionSchema?.database?.tables ?? []
  // Guard if table items don't match shape
  return tables
    .map((t: any) => t?.schema?.name)
    .filter((n: any): n is string => typeof n === "string")
}

function autoCompleteEnricher(names: string[]): Completion[] {
  return names.map((table) => ({
    label: table,
    type: "variable", //variable, function, class
    // info: 'info ' + table,
    // detail: 'details' + table
    // you can add `info`, `apply`, `detail` etc. if you want richer completions
  }))
}


export function autoCompleteMatcher(snapshot?: any): CompletionSource {
  return (context: CompletionContext) => {
    // matchBefore returns a match object or null
    const match = context.matchBefore(/(from|update|create|delete|into) \w*/i)

    const names = autoCompleteDataSource(snapshot)

    // only trigger automatically when we matched or explicitly requested
    if (!context.explicit && !match) {
      return null
    }

    // compute the `from` (start replacement) safely
    let fromPos = context.pos
    if (match) {
      const spaceIndex = match.text.indexOf(" ")
      fromPos = spaceIndex >= 0 ? match.from + spaceIndex + 1 : match.from
    }

    return {
      from: fromPos,
      validFor: /\w+$/,
      options: autoCompleteEnricher(names),
    }
  }
}

export function autoCompleteExtension(snapshot?: any): Extension {
  // return {
  //   autocomplete: autoCompleteMatcher(snapshot),
  // }
  return autocompletion({
    override: [autoCompleteMatcher(snapshot)],
  })

}


/*

export interface Completion {
  label: string
  displayLabel?: string
  detail?: string
  info?: string | ((completion: Completion) => (CompletionInfo | Promise<CompletionInfo>))
  apply?: string | ((view: EditorView, completion: Completion, from: number, to: number) => void)
  type?: string
  commitCharacters?: readonly string[]
  boost?: number
  section?: string | CompletionSection
}

 */
