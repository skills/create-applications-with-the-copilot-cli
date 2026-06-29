#!/usr/bin/env bash
set -euo pipefail

echo "Configuring terminal to open in the editor area..."

# Keep terminal launch as the final startup action.
code --command workbench.action.createTerminalEditor >/dev/null 2>&1 || true
