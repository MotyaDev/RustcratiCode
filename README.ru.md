# SocratiCode

Язык: [English](./README.en.md) | **Русский** | [Главная](./README.md)

SocratiCode — это MCP-сервер для интеллектуальной работы с кодовой базой.
Он локально индексирует репозиторий и даёт AI-ассистентам быстрый поиск по коду, запросы к графу зависимостей и impact-анализ.

## Зачем использовать

- По умолчанию работает локально (Qdrant + Ollama в Docker)
- Гибридный поиск (семантический + keyword/BM25)
- Анализ зависимостей на уровне файлов и символов
- Инкрементальная индексация и file watcher
- Поиск по контекстным артефактам (схемы, API-спеки, infra-доки)

## Требования

- Запущенный Docker Desktop (или Docker Engine)
- MCP-совместимый хост (Claude Code, Claude Desktop, Cursor, VS Code и т.д.)
- Только для локальной разработки: Node.js **18+**

## Установка и быстрый старт

1. Добавьте SocratiCode в MCP-конфиг:

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

2. Перезапустите MCP-хост.
3. В AI-ассистенте запустите индексацию текущего проекта (`codebase_index`).
4. Проверяйте прогресс через `codebase_status`, пока индексация не завершится.
5. После этого используйте поиск и инструменты графа.

При первом запуске SocratiCode скачает Docker-образы и модель эмбеддингов. Это может занять несколько минут.

## Основные MCP-инструменты

| Инструмент | Назначение |
| --- | --- |
| `codebase_index` | Запускает фоновую индексацию проекта |
| `codebase_status` | Показывает прогресс индексации и статус watcher |
| `codebase_search` | Гибридный семантический + keyword поиск по коду |
| `codebase_graph_build` | Строит граф зависимостей |
| `codebase_graph_query` | Показывает импорты и зависимые файлы |
| `codebase_impact` | Анализирует blast radius перед рефакторингом |
| `codebase_flow` | Трассирует вызовы от entry point |
| `codebase_context_search` | Ищет по индексированным некодовым артефактам |
| `codebase_health` | Проверяет состояние Docker/Qdrant/Ollama |

## Команды для разработки

Команды ниже соответствуют `package.json`.

```bash
npm install
npm run build
npm run dev
npm run test
npm run lint
```

Дополнительные команды тестов:

```bash
npm run test:unit
npm run test:integration
npm run test:e2e
npm run test:coverage
```

## Минимальный troubleshooting

- **Индексация долго стартует или зависла**: проверьте, что Docker запущен и может скачать образы.
- **Низкое качество поиска**: убедитесь, что `codebase_status` показывает 100% индексации.
- **Хост запускает старую версию**: очистите кэш npx и перезапустите хост:

```bash
rm -rf ~/.npm/_npx
```

- **Локальная сборка не проходит**: проверьте версию Node.js (`node -v`), нужна 18+.

## Полезные ссылки

- Вклад в проект: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Безопасность: [SECURITY.md](./SECURITY.md)
- Поддержка: [SUPPORT.md](./SUPPORT.md)
- Лицензия (AGPL-3.0): [LICENSE](./LICENSE)
- Коммерческая лицензия: [LICENSE-COMMERCIAL](./LICENSE-COMMERCIAL)
