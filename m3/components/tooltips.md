---
title: "Tooltips"
source: https://m3.material.io/components/tooltips
updated: 2026-07-17T07:03:02.412Z
content_version: 2026-11-19_06-20-01
---

# Tooltips

## Overview  (https://m3.material.io/components/tooltips/overview)

- Use tooltips to add additional context to a button or other UI element
- Two variants: plain and rich
- Use plain tooltips to describe elements or actions of icon buttons
- Use rich tooltips to provide more details, like describing the value of a feature
- Rich tooltips can include an optional title, link, and buttons

> [imagen] 2 variants of tooltips. — 1. Plain tooltip; 2. Rich tooltip

### Availability & resources

### Differences from M2

- **Color**: New color mappings and compatibility with dynamic color
- **Shape**: Rich tooltips have more rounded corners

> [imagen] GM2 rich tooltip. — M2: Rich tooltips have slightly rounded corners

> [imagen] GM3 rich tooltip. — M3: Rich tooltips have more rounded corners and support dynamic color

## Specs  (https://m3.material.io/components/tooltips/specs)

### Tokens & specs

Select a component variant below to see its attributes, tokens, and values.

### Plain tooltip

> [imagen] 2 elements of a plain tooltip. — 1. Supporting text; 2. Container

#### Plain tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

> [imagen] 2 color roles of a plain tooltip. — Plain tooltip color roles used for light and dark themes:; 1. Inverse on surface; 2. Inverse surface

#### Plain tooltip measurements

> [imagen] Measurements of a plain tooltip. — Plain tooltip padding and size measurements

| Attribute | Value |
| --- | --- |
| Container height | 24dp |
| Padding | 8dp |

### Rich tooltip

> [imagen] 4 elements of a rich tooltip. — 1. Subhead; 2. Container; 3. Supporting text; 4. Text button

#### Rich tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

> [imagen] 4 color roles of a rich tooltip. — Rich tooltip color roles used for light and dark themes:; 1. On surface variant; 2. Surface container; 3. On surface variant; 4. Primary

#### Rich tooltip measurements

> [imagen] Measurements of a rich tooltip. — Rich tooltip padding and size measurements

| Attribute | Value |
| --- | --- |
| Top padding | 12dp |
| Bottom padding | 8dp |
| Left and right padding | 16dp |

#### Rich tooltip configurations

Rich tooltips can have a headline, body, and up to two buttons. The headline and number of buttons can be configured.

> [imagen] 5 common configurations of a rich tooltip. — 1. Subhead, supporting text, and two buttons; 2. Subhead, supporting text, and one button; 3. Subhead and supporting text; 4. Supporting text and one button; 5. Supporting text and two buttons

## Guidelines  (https://m3.material.io/components/tooltips/guidelines)

> [imagen] A plain tooltip labeling a button, and a rich tooltip announcing new settings available. — Plain and rich tooltips serve different purposes

### Usage

A tooltip provides additional context for a UI element.

**Plain tooltips** Plain tooltips briefly describe a UI element. They're best used for labelling UI elements with no text, like icon-only buttons and fields.

**Rich tooltips** Rich tooltips provide additional context about a UI element. They can optionally contain a subhead, buttons, and hyperlinks.

Rich tooltips are best used for longer text like definitions or explanations.

> [imagen] 2 variants of tooltips. — 1. Plain tooltip; 2. Rich tooltip

> [imagen] Plain tooltip labeling an icon-only button in Google Meet as "Present now". — **DO** Use plain tooltips to label icon-only buttons

> [imagen] Button with an icon and label text saying "Edit". It has a plain tooltip on hover that also says "Edit". — **DON'T** Plain tooltips aren't needed when the UI element already has label text

> [imagen] Rich tooltip describing a new button for adding people. It has a subhead, description, and a button to learn more. — **DO** Use rich tooltips to provide extra information and actions about a UI element or new feature

> [imagen] Rich tooltip explaining that an action is destructive and permanently deletes files. — **DON'T** Don't hide critical information within tooltips as it’s easy to miss. Use an interruptive dialog instead.

### Anatomy

#### Plain tooltip

> [imagen] 2 elements of a plain tooltip. — 1. Container; 2. Supporting text

#### Supporting text

> [imagen] Plain tooltip for an icon-only button shaped like a gear. The tooltip text is "Settings". — **DO** Briefly describe a UI element

> [imagen] Plain tooltip for the account switcher. The supporting text includes the user's name and email address on new lines. — **CAUTION** Avoid wrapping text to multiple lines or including many pieces of information

#### Rich tooltip

> [imagen] 4 elements of a rich tooltip. — 1. Subhead (optional); 2. Container; 3. Supporting text; 4. Text button (optional)

#### Subhead (optional)

Keep subheads brief, ideally to one line. They should summarize or describe the message of the rich tooltip.

Subheads are important to include when the rich tooltip appears automatically, like when the page loads.

> [imagen] Rich tooltip with a brief subhead, supporting text, and a text button. — **DO** Summarize the message in a few words

> [imagen] Rich tooltip with a subhead wrapping to multiple lines. — **DON'T** Avoid wrapping to more than one line

#### Text buttons (optional)

Rich tooltips can have up to two text buttons. These should be brief and relevant to the message in the supporting text.

Keep buttons short so they can be side by side. Avoid stacking them when possible.

> [imagen] Rich tooltip with 2 buttons stacked on each other. — **CAUTION** Avoid stacking buttons

### Placement

#### Plain tooltips

By default, plain tooltips are positioned directly above the parent element.

- If there's a visual boundary, like a button, the distance is 4dp
- If there's no visual boundary, like with text baselines, the distance is 8dp

If the element is in an app bar, the plain tooltip appears below the element at the same distance.

> [imagen] Plain tooltip appearing 4dp below a button with a clear visual boundary. — Plain tooltip with a 4dp distance between the target and tooltip

#### Rich tooltips

By default, rich tooltips are positioned to the bottom right of the parent element. They adjust position to avoid going off screen.  Tooltips shouldn't cover the parent element.

**Dynamic positioning** The position of the tooltip adjusts in increments of 8dp to avoid going off-screen.

**Desktop placement** On desktop, tooltips may appear centered below the parent element and remain visible while moving within the target region.

> [imagen] A rich tooltip in 4 different corners. It   changes position to remain fully on screen. — Four different rich tooltip locations based on dynamic positioning

### Behavior

To show a tooltip, hover on the parent element on desktop, or tap and hold the element on mobile. Persistent rich tooltips only appear when clicked or tapped.

#### Transient by default

Both plain and rich tooltips disappear 1.5 seconds after navigating away from the target region.

Triggering a new tooltip immediately closes any other open tooltip.

> [vídeo] Hovering and moving from a button with a plain tooltip. — Tooltips disappear after a 1.5 second delay when no other element is hovered

> [imagen] 2 buttons both showing plain tooltips at once. — **DON'T** Only display one tooltip at a time

#### Persistent rich tooltips

Persistent rich tooltips appear when either:

- The parent element is clicked
- The page loads and a new feature is being explained

Persistent rich tooltips remain active even when leaving the target region. They only disappear once a person interacts with another UI element. Hovering doesn't trigger the tooltip.

When appearing on page load, the tooltip can introduce and explain new features on various parent elements.

Avoid using persistent rich tooltips on icon buttons.

> [imagen] Persistent rich tooltip about a new sharing feature in the Photos app. The button says  "Learn more.” — **DON'T** Don’t use a persistent rich tooltip on icon buttons

## Accessibility  (https://m3.material.io/components/tooltips/accessibility)

### Use cases

People should be able to do the following using assistive technology:

- Receive a tooltip message
- Activate a tooltip with a keyboard or switch input

### Interaction & style

Plain and rich tooltips without required actions should remain on screen long enough for people to receive the information without disrupting their existing flow or task.

> [vídeo] A cursor hovers over an icon that identifies it as a star, which remains after moving away. — **DO** Plain tooltips should remain on the screen temporarily after the cursor moves away

Tooltips can appear when an actionable element, like a button or navigation rail, is hovered or focused. However, this tooltip shouldn’t hide crucial information.

Rich tooltips can also appear by selecting an element instead of hovering or focusing on it.

> [imagen] A cursor hovers over a favorite button producing text about finding this item later in favorites. — Tooltips can appear on hover or focus to explain actions

> [imagen] An information button in a selected state produces text about finding this item later in favorites. — Rich tooltips can appear when an element is selected

### Focus order

Tooltip containers should not block important information or prevent a person from completing an action.

Focus order within the rich tooltip moves top to bottom between interactive elements.

Avoid trapping screen reader and keyboard focus on rich tooltips.

People should be able to move linearly through the rest of the page.

> [imagen] Different elements of a rich tooltip are given a focus order, moving from parent element to inline link to text button. — 1. Parent element; 2. Inline link; 3. Text button

### Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** | Focus lands on button, if available |
| **Space** or **Enter** | Activates the focused element |

### Labeling elements

Tooltips should have the **Tooltip** role, or similar.

Label all elements in the tooltip according to their own accessibility guidance.

> [imagen] A rich and plain tooltip with all elements matched to accessibility labels. — The tooltip container should have the **Tooltip** role
