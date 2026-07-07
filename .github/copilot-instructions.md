# Copilot Instructions

This repository contains Power Apps Component Framework (PCF) controls in a
workspace-style setup.

## Architecture
- This is a React 16.14 + TypeScript monorepo

## Repository Structure

- `CheckmarkControl/`: Fluent UI v9 virtual PCF control.
- `OptionsetColourControl/`: Fluent UI v9 virtual PCF control with color and icon options.
- `shared/`: Shared React/TypeScript components and utilities consumed by controls.
- `OptionsetsSolution/`: Dataverse solution packaging artifacts.

## Coding Guidance

- Prefer minimal, targeted changes and preserve existing naming/style.
- Reuse shared UI/helpers from `shared/` where practical rather than duplicating logic.
- Keep React compatibility aligned with current versions in the repo (`react@16.14`).
- Use TypeScript strictness implied by existing configs; avoid `any` unless unavoidable.
- Do not introduce broad formatting-only edits in unrelated files.


## Build And Validation

- Install dependencies from the repo root using npm workspaces.
- For control changes, run scripts from the specific control folder:
	- `npm run build`
	- `npm run lint`
	- `npm run refreshTypes` when PCF manifest-bound types need regeneration.
- For shared package changes, run `npm run lint` in `shared/`.

## PCF-Specific Notes

- Treat `ControlManifest.Input.xml` as source-of-truth for control inputs/outputs.
- If manifest properties are changed, ensure related TypeScript usage is updated.
- Keep output behavior deterministic in `index.ts` update cycle methods.
- Preserve Fluent UI v9 component patterns already used in each control.

## Safe Editing Boundaries

- Avoid committing or modifying generated/transient artifacts unless required.
- Avoid touching `node_modules/` content.
- Keep solution packaging edits in `OptionsetsSolution/src/Other/` intentional and minimal.

## Testing Guidance

- Prefer it.each for parameterized tests in vitest.

## Pull Request Expectations

- Summarize which control/package was changed and why.
- Include validation notes (build/lint commands executed).
- Call out manifest or solution-layer changes explicitly.
