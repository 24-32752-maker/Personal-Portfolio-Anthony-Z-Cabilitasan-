#!/usr/bin/env bash
# Static server on http://127.0.0.1:8765 (avoids broken macOS stub python3)
cd "$(dirname "$0")"
exec npx --yes serve . -p 8765 --listen tcp://127.0.0.1:8765
