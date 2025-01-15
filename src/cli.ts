import * as fs from "node:fs/promises";

import { removeDependencies } from "./removeDependencies.js";
import { PackageDependenciesLike } from "./types.js";

export async function cli(args: string[]) {
	const packageData = JSON.parse(
		(await fs.readFile("package.json")).toString(),
	) as PackageDependenciesLike;

	removeDependencies(packageData, args);

	// TODO: Format in-memory:
	// https://github.com/JoshuaKGoldberg/formatly/issues/11
	await fs.writeFile("package.json", JSON.stringify(packageData, null, "\t"));
}
