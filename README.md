# React - Vite Federation Demo

## Running

Run `pnpm install`, then `pnpm run build` and `pnpm run serve`. This will build and serve both `host` and `remote`.


## Known issue

- Shared module breaks rollup build. We want to share packages like react and react-dom in order to have the same context across the MFEs. However, this is breaking the build. This is a known issue: https://github.com/originjs/vite-plugin-federation/issues/523
