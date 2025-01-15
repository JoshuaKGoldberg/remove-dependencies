import { describe, expect, it, vi } from "vitest";

import { cli } from "./cli.js";

const mockReadFile = vi.fn();
const mockWriteFile = vi.fn();

vi.mock("node:fs/promises", () => ({
	get readFile() {
		return mockReadFile;
	},
	get writeFile() {
		return mockWriteFile;
	},
}));

describe("cli", () => {
	it("writes removed dependencies back", async () => {
		mockReadFile.mockResolvedValueOnce(
			JSON.stringify(
				{ dependencies: { removed: "1.2.3" }, version: "0.0.0" },
				null,
				4,
			),
		);

		await cli(["removed"]);

		expect(mockWriteFile.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "package.json",
			    "{
				"dependencies": {},
				"version": "0.0.0"
			}",
			  ],
			]
		`);
	});
});
