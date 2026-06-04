# AGENTS.md

Guidance for AI agents working in this repository.

## Project overview

**Puzzle** (`DetailsTechLearning`) is currently a placeholder repository. The only tracked source file is `README.md`. There is no application code, package manifest, Docker setup, or CI configuration yet.

## Cursor Cloud specific instructions

### Services

There are **no runnable services** in this repository. Do not expect frontend, API, or database processes until implementation is added.

### Dependencies

No language runtime or package manager is pinned by the repo. Future agents should install dependencies only after manifests appear (for example `package.json`, `pyproject.toml`, `go.mod`, or `docker-compose.yml`).

### Lint / test / build / run

No scripts are defined. When code lands, add the standard commands to this section and to the project README.

### Git

The repo uses a single branch workflow (`main`). Create feature branches with the `cursor/<name>-a328` naming pattern when making changes as a Cloud Agent.

### VM update script

The startup update script is intentionally minimal (`true`) because there are no project dependencies to refresh on each session.
