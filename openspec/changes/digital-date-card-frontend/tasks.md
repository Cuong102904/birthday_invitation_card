## 1. Project Foundation

- [x] 1.1 Confirm the frontend entry point and keep the experience as a single-page flow.
- [x] 1.2 Add or verify the UI stack needed for the card experience: Tailwind CSS, shadcn/ui primitives, and Motion for React.
- [x] 1.3 Define the pink / rose theme tokens and base typography for the page.
- [x] 1.4 Scaffold the feature-based folder structure for app shell, flow feature, shared UI, local data, and helpers.

## 2. Flow Structure

- [x] 2.1 Create the top-level step state for invitation, cuisine, restaurant, time, and success screens.
- [x] 2.2 Build the shared page shell that swaps the visible step without route navigation.
- [x] 2.3 Add the opening invitation screen with the `yes` and `no` actions.

## 3. Selection Data

- [x] 3.1 Add local static data for cuisine options, restaurant options, TikTok links, and time slots.
- [x] 3.2 Filter restaurant choices by the selected cuisine and keep the selected values in state.
- [x] 3.3 Ensure the final summary object can be derived from the current selections only.

## 4. Interactive UI

- [x] 4.1 Implement the evasive `no` button behavior for pointer devices.
- [x] 4.2 Build the cuisine, restaurant, and time selection screens with clear visual cards or buttons.
- [x] 4.3 Add step transitions and lightweight motion for entering and leaving each screen.

## 5. Success State

- [x] 5.1 Render the success screen after all selections are completed.
- [x] 5.2 Generate a copyable JSON summary of the user's selections.
- [x] 5.3 Add a clear copy action and feedback state for the JSON output.

## 6. Visual Polish and Validation

- [x] 6.1 Add heart-themed decorative elements and pink-forward background treatment without hurting readability.
- [x] 6.2 Verify responsive behavior on mobile and desktop layouts.
- [x] 6.3 Test the full flow from invitation to success and confirm the `no` path never advances the flow.
