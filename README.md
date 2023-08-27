# my-typescript-template

A minimal project to test tsconfig and other settings for a typescript monorepo with ESM modules.

* TypeScript in `packages/*`
* Native JavaScript only in `scripts/*`
* ESM module output
* Uses `pnpm` for package management

## Template Usage

1. Clone
1. Delete packages that are not required for your use-case
1. search and replace the names

## Development

### Prerequisites

* Node.js v18+ (may work on 16, untested) - https://nodejs.org
* pnpm - https://pnpm.io/

### Building

```sh
pnpm install
pnpm run build
```