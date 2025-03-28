import { describe, expect, it } from "vitest";

import { removeDependencies } from "./removeDependencies.js";
import { PackageDataLike } from "./types.js";

describe("removeDependencies", () => {
	it("returns the same shape when no dependency properties exist", () => {
		const packageData = {
			version: "0.0.0",
		} as PackageDataLike;

		const removed = removeDependencies(packageData, ["first", "second"]);

		expect(removed).toEqual(packageData);
	});

	it("returns the same shape when the dependencies aren't found", () => {
		const packageData = {
			dependencies: { other: "1.2.3" },
			devDependencies: { other: "1.2.3" },
			version: "0.0.0",
		};

		const removed = removeDependencies(packageData, ["first", "second"]);

		expect(removed).toEqual(packageData);
	});

	it("removes the dependencies when found", () => {
		const packageData = {
			dependencies: { first: "1.2.3", other: "1.2.3" },
			devDependencies: { other: "1.2.3", second: "1.2.3" },
			version: "0.0.0",
		};

		const removed = removeDependencies(packageData, ["first", "second"]);

		expect(removed).toEqual({
			dependencies: { other: "1.2.3" },
			devDependencies: { other: "1.2.3" },
			version: "0.0.0",
		});
	});

	it("does not delete properties when deletion leaves them empty", () => {
		const packageData = {
			dependencies: { first: "1.2.3" },
			devDependencies: { first: "1.2.3", other: "1.2.3" },
			version: "0.0.0",
		};

		const removed = removeDependencies(packageData, ["first", "second"]);

		expect(removed).toEqual({
			dependencies: {},
			devDependencies: { other: "1.2.3" },
			version: "0.0.0",
		});
	});
});
