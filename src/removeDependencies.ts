import { PackageDataLike } from "./types.js";

const removalKeys = [
	"dependencies",
	"devDependencies",
] as const satisfies (keyof PackageDataLike)[];

export function removeDependencies(
	packageData: PackageDataLike,
	dependencies: string[],
) {
	const result = { ...packageData };

	for (const key of removalKeys) {
		const modified = key in result && result[key];
		if (!modified) {
			continue;
		}

		for (const dependency of dependencies) {
			delete modified[dependency];
		}
	}

	return result;
}
