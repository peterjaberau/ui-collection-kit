"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import { useSelector } from "@xstate/react";
import { createActor } from "xstate";
import { playgroundMachine } from "./playgroundMachine";

const examples = [
  {
    label: "Users names",
    data: JSON.stringify({ users: [{ name: "Alice" }, { name: "Bob" }] }, null, 2),
    formula: "users.name",
  },
  {
    label: "Products total",
    data: JSON.stringify({ products: [{ price: 5 }, { price: 15 }] }, null, 2),
    formula: "$sum(products.price)",
  },
  {
    label: "Filter adults",
    data: JSON.stringify(
      { people: [{ name: "Tom", age: 12 }, { name: "Anna", age: 30 }] },
      null,
      2
    ),
    formula: "people[age >= 18]",
  },
];

function usePlaygroundActor() {
  const actorRef = React.useMemo(() => createActor(playgroundMachine).start(), []);
  React.useEffect(() => {
    return () => {
      try {
        actorRef.stop();
      } catch {
        /* ignore */
      }
    };
  }, [actorRef]);
  return actorRef;
}

export function JsonataPlayground({ id }: { id: number }) {
  const actorRef = usePlaygroundActor();

  const jsonInput = useSelector(actorRef, (s) => s.context.jsonInput);
  const formula = useSelector(actorRef, (s) => s.context.formula);
  const result = useSelector(actorRef, (s) => s.context.result);

  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "#1e1e1e",
      }}
    >
      <h2 style={{ color: "white" }}>Playground #{id}</h2>

      <select
        style={{ marginBottom: "1rem" }}
        defaultValue=""
        onChange={(e) => {
          const ex = examples[Number(e.target.value)];
          if (ex) {
            actorRef.send({ type: "LOAD_EXAMPLE", data: ex.data, formula: ex.formula });
          }
        }}
      >
        <option value="">Select example...</option>
        {examples.map((ex, i) => (
          <option key={i} value={i}>
            {ex.label}
          </option>
        ))}
      </select>

      <div>
        <h3 style={{ color: "white" }}>1. JSON Input</h3>
        <CodeMirror
          value={jsonInput}
          height="200px"
          extensions={[json()]}
          theme={oneDark}
          onChange={(v) => actorRef.send({ type: "UPDATE_JSON", value: v })}
        />
      </div>

      <div>
        <h3 style={{ color: "white" }}>2. Formula</h3>
        <CodeMirror
          value={formula}
          height="80px"
          theme={oneDark}
          onChange={(v) => actorRef.send({ type: "UPDATE_FORMULA", value: v })}
        />
      </div>

      <div>
        <h3 style={{ color: "white" }}>3. Result</h3>
        <CodeMirror value={result} height="200px" theme={oneDark} readOnly />
        <button
          onClick={() => actorRef.send({ type: "RUN" })}
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem 1rem",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
}
