<h1 align="center">Remove Dependencies</h1>

<p align="center">
	Quickly removes dependencies from your <code>package.json</code> file.
	🔪
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 1" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-1-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/remove-dependencies/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/remove-dependencies" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/remove-dependencies?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/remove-dependencies/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/remove-dependencies" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/remove-dependencies?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

You can invoke `remove-dependencies` on the CLI or via its programmatic Node.js API.
It will remove all requested dependencies from `dependencies` and `devDependencies`.

### CLI

```shell
npx remove-dependencies
```

`npx remove-dependencies` takes in any number of package names to remove from your `package.json`.
It will remove all requested dependencies from `dependencies` and `devDependencies`.

For example, to remove the `mocha` and `jest` packages:

```shell
npx remove-dependencies mocha jest
```

That command may change your `package.json` on disk.

### Node.js API

```shell
npm i remove-dependencies
```

`remove-dependencies` exports a `removeDependencies` function that takes in any number of package names to remove from your `package.json`.
It will return an object with all requested dependencies removed from `dependencies` and `devDependencies`.

```ts
import { removeDependencies } from "remove-dependencies";

const packageData = {
	dependencies: {
		// ...
	},
	// ...
};

const removedData = removeDependencies(packageData);

// { dependencies: ... }
console.log(removedData);
```

## Why?

Usually, you can `npm uninstall` / `pnpm uninstall` / `yarn remove` packages away.
But those fully remove dependencies, including changing your `node_modules/`, and will throw an error if the dependency isn't found.

`remove-dependencies` ignores any dependencies not found and only changes your `package.json` file.
It also operates on all three of `dependencies` and `devDependencies` at once.

In other words, use `remove-dependencies` in scripts that should quickly modify a `package.json` file without installing or uninstalling.

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 🔪

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/remove-dependencies/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a> <a href="https://github.com/JoshuaKGoldberg/remove-dependencies/commits?author=JoshuaKGoldberg" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo engine](https://create.bingo).
