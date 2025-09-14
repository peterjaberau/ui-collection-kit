import { useRef, useState } from "react";

export const useScriptEditorState = (defaultValue?: any) => {
  const [value, setValue] = useState<any>(defaultValue);
  const [errors, setErrors] = useState<any>([]);
  const ref = useRef(null);
  ref.current = value;
  return [value, setValue, ref, errors, setErrors];
};

