## Why

This change creates a static, single-page “date invitation card” experience with a playful Gen Z visual style. The project does not need a database, backend, or multi-page routing, but it does need a polished interaction flow that feels intentional, cute, and easy to share.

## What Changes

- Introduce a one-page React frontend that progresses through multiple visual states instead of using separate routes.
- Add an opening invitation screen with two choices, where `yes` is the only valid path forward and `no` is intentionally evasive.
- Add a cuisine selection step, followed by restaurant selection, time selection, and a final success state.
- Generate a copyable JSON summary of the chosen options at the end of the flow.
- Establish a pink / heart-centric visual language suitable for a playful, romantic, Gen Z-style presentation.
- Keep all data local and static in the client; no database, API, or persistence layer is required.

## Capabilities

### New Capabilities
- `digital-date-card-flow`: A single-page interactive invitation flow that guides the user through date prompt, cuisine selection, restaurant selection, time selection, and final summary output.

### Modified Capabilities
- None

## Impact

- Frontend only: React component structure, local UI state, styling, and motion behavior.
- Styling stack: Tailwind CSS theme usage and optional UI primitives from shadcn/ui or related component libraries.
- Interaction layer: client-side state transitions, hover behavior for the evasive `no` button, and copy-to-clipboard output for the final JSON summary.
- No database, authentication, server API, or routing infrastructure is required for this scope.
