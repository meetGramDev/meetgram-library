# Meetgram library


## What's inside?

This repo includes the following packages:

- `@meetgram/ui-kit`: A stub React component library
- `@meetgram/utils`: Shared utilities
- `@repo/tailwind-config`: `tailwind` configurations with design system presets

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

## Deploy a new version

1. After making changes in your branch, run `pnpm changeset` locally and add a changelog description (for each feature/refactoring/docs/update/fix). 
   Types of versioning:
    - `patch` - bug fixes, backward compatible (1.0.1 => 1.0.2)
    - `minor` - new features, compatible with current API (1.0.1 => 1.1.0)
    - `major` - major changes, incompatible with current API (1.0.1 => 2.0.0)
2. Run `pnpm version-packages` for versioning. All changesets will be transferred to changelog.md and version in each package.json will be up to the appropriate one
3. When you push your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will run the `release` script defined in the root `package.json` and publish your package

## Useful commands


### Dependency installation

To quickly install dependencies in multiple packages, use the `--recursive` and `--filter` flags, for example:

```bash
pnpm add <package-name> --recursive --filter=ui --filter=@repo/ui
```

To install a dependency for the entire monorepo, use the `-w` workspaces flag:
```bash
pnpm add -w <package-name>
```

### Build

To build all apps and packages locally, run the following command:

```bash
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm dev
```

##

- `pnpm lint` - Lint all packages
- `pnpm format` - Format all packages
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)