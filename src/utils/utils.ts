/**
 *
 * @param val 0~1
 * @param min 0~1
 * @param max 0~1
 * @returns value scaled in range of min to max
 */
export const scaleRange = (val: number, min: number, max: number) => {
	return Math.min(Math.max(val - min, 0), max) * (1 / (max - min));
};
