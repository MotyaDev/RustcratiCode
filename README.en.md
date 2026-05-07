# SocratiCode

Language: **English** | [Русский](./README.ru.md) | [Main](./README.md)

SocratiCode is an MCP server for codebase intelligence.
It indexes your repository locally and gives AI assistants fast code search, dependency graph queries, and impact analysis.

## Why use it

- Works locally by default (Docker-managed Qdrant + Ollama)
- Hybrid search (semantic + keyword/BM25)
- File-level and symbol-level dependency analysis
- Incremental indexing and file watching
- Context artifact search (schemas, API specs, infra docs)

## Prerequisites

- Docker Desktop (or Docker Engine) running
- MCP-compatible host (Claude Code, Claude Desktop, Cursor, VS Code, etc.)
- For local development only: Node.js **18+**

## Install and quick start

1. Add SocratiCode to your MCP config:

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

2. Restart your MCP host.
3. In your AI assistant, run indexing for the current project (`codebase_index`).
4. Poll progress with `codebase_status` until indexing is complete.
5. Start searching and graph exploration.

On first run, SocratiCode pulls required Docker images and embedding model. This can take a few minutes.

## Core MCP tools

| Tool | Purpose |
| --- | --- |
| `codebase_index` | Start background indexing for a project |
| `codebase_status` | Check indexing progress and watcher status |
| `codebase_search` | Hybrid semantic + keyword code search |
| `codebase_graph_build` | Build dependency graph |
| `codebase_graph_query` | Show imports and dependents for a file |
| `codebase_impact` | Blast-radius analysis before refactors |
| `codebase_flow` | Trace forward call flow from an entry point |
| `codebase_context_search` | Search indexed non-code artifacts |
| `codebase_health` | Check Docker/Qdrant/Ollama health |

## Development commands

Commands below are taken from `package.json`.

```bash
npm install
npm run build
npm run dev
npm run test
npm run lint
```

Additional test commands:

```bash
npm run test:unit
npm run test:integration
npm run test:e2e
npm run test:coverage
```

## Minimal troubleshooting

- **Indexing is slow or stuck at start**: make sure Docker is running and can pull images.
- **Search quality is poor**: verify indexing reached 100% with `codebase_status`.
- **Host still uses old version**: clear npx cache and restart host:

```bash
rm -rf ~/.npm/_npx
```

- **Local dev build fails**: check Node.js version (`node -v`), required: 18+.

## Project links

- Contributing: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Security: [SECURITY.md](./SECURITY.md)
- Support: [SUPPORT.md](./SUPPORT.md)
- License (AGPL-3.0): [LICENSE](./LICENSE)
- Commercial license: [LICENSE-COMMERCIAL](./LICENSE-COMMERCIAL)
