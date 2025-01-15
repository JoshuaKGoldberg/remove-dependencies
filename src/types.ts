export interface PackageDataLike {
	dependencies?: PackageDependenciesLike;
	devDependencies?: PackageDependenciesLike;
	peerDependencies?: PackageDependenciesLike;
}

export interface PackageDependenciesLike {
	[i: string]: string | undefined;
}
