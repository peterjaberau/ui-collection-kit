import { useEffect, useRef } from 'react';

export default function usePreviousValue<TValue>(value: TValue): TValue | undefined {
	const ref = useRef<any>(null);

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
}
