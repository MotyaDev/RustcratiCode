# SocratiCode

[English](./README.en.md) | [Русский](./README.ru.md)

SocratiCode is an MCP server for local codebase intelligence.
It helps AI assistants understand your repository through indexing, hybrid search, dependency graphs, and impact analysis.

For full localized docs, use:
- **English:** [README.en.md](./README.en.md)
- **Русский:** [README.ru.md](./README.ru.md)

## Quick start

### 1) Prerequisites

- Docker is installed and running
- Any MCP-compatible host (Claude Code, Claude Desktop, Cursor, VS Code, etc.)

### 2) Add MCP server config

```json
{
  "mcpServers": {
    "socraticode": {
      "command": "npx",
      "args": ["-y", "socraticode"]
    }
  }
}
```
Just npx:

```bash
npx -y github:MotyaDev/RustcratiCode
```

### 3) Restart host and index project

In your AI assistant:
1. Run `codebase_index`
2. Poll `codebase_status` until complete
3. Use search and graph tools

## Key features

- Hybrid code search (semantic + keyword)
- Dependency graph queries by file
- Symbol-level impact and flow analysis
- Incremental indexing with automatic updates
- Context artifact search (schemas/specs/configs)

## Main MCP tools

- `codebase_index` — start indexing
- `codebase_status` — indexing/watcher status
- `codebase_search` — hybrid code search
- `codebase_graph_build` / `codebase_graph_query` — dependency graph
- `codebase_impact` / `codebase_flow` — symbol-level impact and call flow
- `codebase_context_search` — search schemas/specs/config artifacts
- `codebase_health` — infrastructure health check

## Development commands

From `package.json`:

```bash
npm install
npm run build
npm run dev
npm run test
npm run lint
```

## Minimal troubleshooting

- Ensure Docker is running on first launch (images/models are pulled automatically).
- Wait for indexing to finish before search (`codebase_status`).
- If cached old `npx` version is used, clear cache and restart host:

```bash
rm -rf ~/.npm/_npx
```

## Project links

- Contributing: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Security: [SECURITY.md](./SECURITY.md)
- Support: [SUPPORT.md](./SUPPORT.md)
- License: [LICENSE](./LICENSE)
- Commercial license: [LICENSE-COMMERCIAL](./LICENSE-COMMERCIAL)
