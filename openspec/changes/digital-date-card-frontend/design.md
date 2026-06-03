## Context

This change delivers a static, client-side invitation experience that behaves like a digital card. The user moves through a small set of steps inside one page: invitation, cuisine selection, restaurant selection, time selection, and success summary. The product must feel romantic, playful, and visually polished, but it does not require authentication, persistence, or server APIs.

The main technical constraint is that the interface must feel expressive without introducing unnecessary app complexity. The implementation should therefore prioritize local state, lightweight composable UI primitives, and animation that supports the interaction model rather than overwhelming it.

## Goals / Non-Goals

**Goals:**
- Build the entire flow as a single-page client-side experience.
- Deliver a pink / heart-centric visual identity that feels intentional and shareable.
- Keep all selection data local in the frontend.
- Generate a copyable JSON summary from the final selections.
- Support smooth transitions and playful interactions, including the evasive `no` button.

**Non-Goals:**
- No backend, database, or persistence layer.
- No multi-page routing or URL-based step navigation.
- No authentication, analytics, or user accounts.
- No complex state management library unless the implementation later proves it necessary.

## Decisions

### 1) Use React component state as the flow engine
The interface SHALL be driven by a small state machine represented in React state, with one active step at a time.

Rationale:
- This flow is linear and narrow, so React state is sufficient.
- A router would add overhead without improving the user experience.
- The step model maps cleanly to the UI and to the final JSON summary.

Alternatives considered:
- Router-based pages: rejected because the product is intentionally a single-page card.
- External state machine library: rejected because the interaction graph is simple enough to keep local.

### 2) Use Tailwind CSS for layout and theme control
The design system SHOULD be implemented with Tailwind utility classes and a small theme token set for pink, rose, blush, and accent tones.

Rationale:
- Tailwind allows fast iteration on spacing, typography, gradients, and responsiveness.
- The palette can be tuned precisely for a romantic/cute aesthetic.
- Utility classes keep the one-page layout easy to maintain.

Alternatives considered:
- Plain CSS modules: workable, but slower for rapid visual tuning.
- A heavy theme framework: rejected because the visual style is custom and one-off.

### 3) Use shadcn/ui as the base component layer
The implementation SHOULD use shadcn/ui primitives for common controls such as buttons, cards, radio-style choice controls, tabs or segmented actions, and copy affordances.

Rationale:
- shadcn/ui provides accessible building blocks without locking the project into a monolithic component system.
- The source-code copy model makes it easy to customize the visuals for the pink/heart theme.
- It is a good fit when the UI must be polished but still strongly branded.

Alternatives considered:
- MUI / Ant Design: rejected because the default look trends toward enterprise and is harder to reshape into a romantic card experience.
- Hand-rolled components only: possible, but slower and more likely to miss accessibility or interaction details.

### 4) Use Motion for React for interactive polish
The implementation SHOULD use Motion for hover, layout, and exit transitions, especially for the evasive `no` button and step-to-step animations.

Rationale:
- The `no` button behavior needs direct pointer-aware motion, not just a CSS hover color change.
- Motion gives smooth transitions for cards, hearts, success state reveal, and copy feedback.
- The user experience benefits from subtle movement without making the page feel busy.

Alternatives considered:
- CSS transitions only: acceptable for simple hover states, but weaker for evasive movement and richer transitions.
- GSAP: powerful but heavier than needed for this scope.

### 5) Keep all content data in local static files or modules
Cuisine options, restaurant lists, TikTok links, and time slots SHOULD live in local frontend data structures.

Rationale:
- The content is static and small.
- Local data avoids backend dependencies and simplifies deployment.
- The final JSON summary can be generated entirely from client-side selections.

Alternatives considered:
- Fetching data from an API: unnecessary for this scope.
- Database-backed content: explicitly out of scope.

### 6) Prefer accessible custom interactions over fragile visual tricks
The `no` button SHOULD remain non-blocking and understandable across devices, even if it moves away from the pointer on desktop.

Rationale:
- Cute interaction should not make the page unusable.
- Touch devices do not have a hover pointer, so the behavior must degrade gracefully.
- Accessibility and clarity matter even in a playful experience.

Alternatives considered:
- Purely random button teleportation on every frame: rejected because it can feel broken or nauseating.
- Hard disabling the `no` button: rejected because the joke depends on the evasive interaction.

### 7) Use a feature-scoped folder structure
The codebase SHOULD separate the app shell, step screens, shared UI primitives, local data modules, and utility helpers into distinct folders.

Recommended shape:
- `src/app` or `src/main` for the entry shell
- `src/features/date-card` for the flow state and step screens
- `src/components/ui` for shared primitives and wrappers
- `src/data` for cuisine, restaurant, and time-slot content
- `src/lib` for summary formatting and clipboard helpers

Rationale:
- The flow is small, but a clean module boundary prevents the main screen from turning into a single large component.
- Step-specific UI stays isolated from reusable UI and data.
- The structure makes future changes, like swapping components or adding more restaurants, straightforward.

Alternatives considered:
- Flat `src` layout: simpler at first, but easier to let responsibilities blur together.
- Fully nested route folders: unnecessary because the product is not route-driven.

## Risks / Trade-offs

- [Risk] The playful pink theme may drift into visual clutter → [Mitigation] Keep one primary accent palette, limit decorative hearts to a few consistent motifs, and reserve stronger effects for the hero state.
- [Risk] The evasive `no` button can be frustrating on mobile or accessibility tools → [Mitigation] Keep the button behavior non-essential, preserve layout stability, and make the `yes` path obvious and large.
- [Risk] Too many animations could make the page feel gimmicky → [Mitigation] Use motion only for transitions, hover feedback, and the final success reveal.
- [Risk] Local data may become hard to maintain if the restaurant list grows → [Mitigation] Keep the data model simple and grouped by cuisine, and split into modules if the list expands.

## Migration Plan

No migration is required. This change can be introduced as a new static frontend experience.

If the implementation needs to replace an existing landing page, deploy it behind the current entry point and validate the user flow in staging before switching the default route.

Rollback strategy:
- Restore the previous entry component or page shell.
- Leave the local data modules untouched if they are reusable in future iterations.

## Open Questions

- Should the final JSON summary include only the user’s selections, or should it also include a generated timestamp and a display label for the experience?
- Should restaurant cards emphasize the TikTok link directly, or keep the link secondary to the selection action?
- Should the copy affordance be a button, an icon button, or an auto-select text area for easier sharing?
