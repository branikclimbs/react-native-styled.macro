// Packages
import { FlexStyle } from 'react-native';

export const topRightBottomLeft = (): Record<string, FlexStyle> => ({
	'inset-0': { top: 0, right: 0, bottom: 0, left: 0 },
	'inset-y-0': { top: 0, bottom: 0 },
	'inset-x-0': { right: 0, left: 0 },
	'top-0': { top: 0 },
	'right-0': { right: 0 },
	'bottom-0': { bottom: 0 },
	'left-0': { left: 0 },
});
