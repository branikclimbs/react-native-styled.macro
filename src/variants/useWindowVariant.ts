// Packages
import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

export const BREAKPOINTS: Record<string, number> = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
};

export const useWindowVariant = (
	breakpoints = BREAKPOINTS
): Record<string, boolean> => {
	const { width } = useWindowDimensions();

	return useMemo(() => {
		// Descending order: xl, lg, md, sm
		const sorted = Object.entries(breakpoints).sort(
			(b1, b2) => b2[1] - b1[1]
		);

		const variant = sorted.find((b) => width >= b[1])?.[0];

		return variant ? { [variant]: true } : {};
	}, [width]);
};
