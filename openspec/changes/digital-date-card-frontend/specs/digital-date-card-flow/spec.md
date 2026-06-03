## ADDED Requirements

### Requirement: Single-page invitation flow
The system SHALL present the date invitation as a single-page experience that progresses through visual steps without requiring route navigation or a backend.

#### Scenario: Advance through steps on one page
- **WHEN** the user completes one step of the flow
- **THEN** the system SHALL reveal the next step within the same page
- **AND** the current state SHALL remain client-side only

#### Scenario: No database required
- **WHEN** the invitation flow is loaded
- **THEN** the system SHALL function without any database, API, or server persistence

### Requirement: Invitation choice behavior
The system SHALL present an opening invitation screen with `yes` and `no` choices, and only `yes` SHALL advance the user to the next step.

#### Scenario: Yes advances the flow
- **WHEN** the user selects `yes`
- **THEN** the system SHALL move to the cuisine selection step

#### Scenario: No does not advance the flow
- **WHEN** the user attempts to select `no`
- **THEN** the system SHALL prevent the flow from advancing

### Requirement: Evasive no button behavior
The system SHALL make the `no` button difficult to click by moving it away from the pointer on hover or equivalent pointer interaction.

#### Scenario: Pointer approaches no button
- **WHEN** the pointer moves toward the `no` button on a supported pointer device
- **THEN** the system SHALL reposition the button so it is not trivially clickable

#### Scenario: Touch devices remain functional
- **WHEN** the flow is used on a touch device
- **THEN** the system SHALL preserve the same rejection behavior without breaking the layout or blocking the user interface

### Requirement: Date selection steps
The system SHALL allow the user to select a cuisine, a restaurant, and a time slot in sequence.

#### Scenario: Cuisine selection
- **WHEN** the user reaches the cuisine step
- **THEN** the system SHALL display the available cuisine choices

#### Scenario: Restaurant selection
- **WHEN** the user selects a cuisine
- **THEN** the system SHALL display restaurants matching the selected cuisine

#### Scenario: Time selection
- **WHEN** the user selects a restaurant
- **THEN** the system SHALL display available time slots

### Requirement: Final summary output
The system SHALL display a success state after the selections are completed and SHALL generate a copyable JSON summary of the chosen options.

#### Scenario: Successful completion
- **WHEN** the user selects a cuisine, a restaurant, and a time slot
- **THEN** the system SHALL show a success state

#### Scenario: Copyable JSON
- **WHEN** the success state is displayed
- **THEN** the system SHALL provide a JSON summary that can be copied by the user

### Requirement: Playful romantic visual style
The system SHALL present the invitation with a playful romantic visual style centered on pink tones, heart motifs, and a Gen Z-friendly aesthetic.

#### Scenario: Visual theme is applied
- **WHEN** the flow is rendered
- **THEN** the system SHALL use a pink-forward visual theme with heart-oriented decorative elements

#### Scenario: Responsive presentation
- **WHEN** the flow is viewed on a small or large screen
- **THEN** the system SHALL remain readable and visually coherent across device sizes

### Requirement: Feature-scoped implementation structure
The implementation SHALL be organized into feature-scoped folders and reusable components so that each step in the flow has a clear ownership boundary.

#### Scenario: Shared UI and step UI are separated
- **WHEN** the codebase is structured
- **THEN** shared UI primitives SHALL be isolated from step-specific screen components

#### Scenario: Data and behavior are separated
- **WHEN** selection data, state logic, and presentation are implemented
- **THEN** local static data SHALL remain separate from flow control logic and presentational components
