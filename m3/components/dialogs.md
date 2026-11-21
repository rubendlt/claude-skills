---
title: "Dialogs"
source: https://m3.material.io/components/dialogs
updated: 2026-07-28T07:11:33.307Z
content_version: 2026-11-19_06-20-01
---

# Dialogs

## Overview  (https://m3.material.io/components/dialogs/overview)

- Use dialogs to make sure users act on information
- Two variants: basic and full-screen
- Should be dedicated to completing a single task
- Can also display information relevant to the task
- Commonly used to confirm high-risk actions like deleting progress

> [imagen] Basic and full-screen dialog. — 1. Basic dialog; 2. Full-screen dialog

### Availability & resources

### Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Layout: Greater padding to account for the increased corner-radius and title size
- Position: Option for custom basic dialog positioning
- Shape: Increased corner-radius
- Typography: Larger and darker headline

> [imagen] Basic dialog with rounded corner, larger headline. — New updates to color, layout, position, shape, and typography

## Specs  (https://m3.material.io/components/dialogs/specs)

### Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

### Basic dialogs

> [imagen] Anatomy diagram numbering dialog elements. — 1. Container; 2. Icon (optional); 3. Headline (optional); 4. Supporting text; 5. Divider (optional); 6. Button label text; 7. Scrim

#### Basic dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

> [imagen] Color mapping diagram labeling 6 color roles across the dialog and scrim. — Basic dialog color roles used for light and dark themes:; 1. Surface container high; 2. Secondary; 3. On surface; 4. On surface variant; 5. Primary; 6. Scrim

#### Basic dialog measurements

> [imagen] Annotated diagram showing padding values. — Basic dialog padding and size measurements

| Attribute | Value |
| --- | --- |
| Container shape | 28dp corner radius |
| Container height | Dynamic |
| Container width | Min 280dp; Max 560dp |
| Divider height | 1dp |
| Icon size | 24dp |
| Minimum width | 280dp |
| Maximum width | 560dp |
| Alignment with icon | Center-aligned |
| Alignment without icon | Start-aligned |
| Top/Left/right/bottom padding | 24dp |
| Padding between buttons | 8dp |
| Padding between title and body | 16dp |
| Padding between icon and title | 16dp |
| Padding between body and actions | 24dp |

### Full-screen dialogs

> [imagen] Diagram numbering 6 full-screen dialog elements. — 1. Container; 2. Header; 3. Icon (close affordance); 4. Headline (optional); 5. Text button; 6. Divider (optional)

#### Full-screen dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

> [imagen] Color mapping diagram shows 5 callout markers across the dialog. — Full-screen dialog color roles used for light and dark themes:; 1. Surface container high; 2. On surface; 3. On surface; 4. Primary; 5. On surface variant

#### Full-screen dialog measurements

> [imagen] Diagram noting layout measurements for padding values, title, height, and action regions. — Full-screen dialog padding and size measurements

| Attribute | Value |
| --- | --- |
| Container shape | 0dp corner radius |
| Container height | Dynamic |
| Container width | Container width; Max 560dp |
| Header height | 56dp |
| Header width | Container width |
| Headline text alignment | Start-aligned |
| Divider height | 1dp |
| Icon (close affordance) size | 24dp |
| Bottom action bar height | 56dp |
| Bottom action bar width | Container width |
| Top/left/right padding | 24dp |
| Padding between elements | 8dp |

## Guidelines  (https://m3.material.io/components/dialogs/guidelines)

> [imagen] Basic dialog in isolation — A basic dialog

### Usage

A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly. A less disruptive alternative is to use a dropdown menu, which provides options without interrupting a user’s experience.

> [imagen] Diagram of basic and full-screen dialogs. — There are two variants of dialogs:; 1. Basic dialog; 2. Full-screen dialog

> [imagen] Dialog in front of app content. — **DO** Use dialogs for prompts that block an app’s normal operation, and for critical information that requires a specific user task, decision, or acknowledgement

> [imagen] Low-priority dialog in front of app content. — **DON'T** Don’t use dialogs for low- or medium-priority information. Instead use a snackbar, which can be dismissed or disappear automatically.

#### Similar components

Snackbars are also designed to show important messages.

Choose the right component based on the importance of the message. This component messaging strategy helps avoid overusing dialogs.

> [imagen] Snackbar on a phone saying that new photos were synced to the device. No buttons exist. — Snackbars can disappear automatically

| **Component** | **Importance** | **Action needed** |
| --- | --- | --- |
| Snackbar | Low importance | Optional: Snackbars may not have a button, and can disappear automatically |
| Dialog | High importance | Required: Dialogs block the main content until an action is confirmed |

### Anatomy

#### Basic dialog

> [imagen] Diagram of 7 elements of basic dialog. — 1. Container; 2. Icon (optional); 3. Headline (optional); 4. Supporting text; 5. Divider (optional); 6. Buttons label text; 7. Scrim

#### Full-screen dialog

> [imagen] 6 elements of full-screen dialog. — 1. Container; 2. Header region; 3. Icon (close affordance); 4. Headline (optional); 5. Button label text; 6. Divider (optional)

#### Container and scrim

Dialog containers appear above other screen elements and hold the dialog’s headline, text, buttons, and list items.

To focus attention on the dialog, surfaces behind the container are scrimmed with a temporary overlay to make them less prominent.

> [imagen] Basic dialog shown above a scrim overlay that reduces the prominence of the background elements. — Basic dialogs appear over a background scrim

#### Headline (optional)

A dialog’s purpose should be communicated by its headline and buttons or actionable items.

Headlines should:

- Contain a brief, clear statement or question
- Avoid apologies (“Sorry for the interruption”), alarm (“Warning!”), or ambiguity (“Are you sure?”)

> [imagen] Dialog title asking “Use location service?” — **DO** This dialog title poses a specific question, concisely explains what’s involved in the request, and provides clear actions

> [imagen] Dialog title asking “Are you sure?” — **DON'T** Don’t use dialog titles that pose an ambiguous question

Headlines should always be succinct. They can wrap to a second line if necessary, and be truncated.

In full-screen dialogs, long headlines or headlines of variable lengths (such as translations), can be placed in the content area instead of the app bar.

> [imagen] Example full-screen dialog with truncated long headline. — **CAUTION** Avoid placing long headlines in a full-screen dialog’s app bar (1), as the truncated text may lead to misunderstanding

> [imagen] Example full-screen dialog with short headline, and longer text in content area. — **DO** Find ways to shorten app bar text, and place longer headlines into the content area (1) of a full-screen dialog

#### Buttons

Dialog actions are most often represented as buttons and allow users to confirm, dismiss, or acknowledge something.

Buttons are aligned to the trailing edge of the dialog for easier interaction. The confirmation button is always closest to the edge.

Button alignment responds automatically for right-to-left languages, where the confirmation button is aligned to the left edge.

> [imagen] Dialog with the confirmation button disabled because a required radio selection is missing. — **DO** Disable confirming actions (1) until a choice is made. Dismissive actions are never disabled.

> [imagen] Dialog with the dismissing action "Cancel" on the right of the 2 buttons. — **DON'T** Don’t place dismissive actions (1) to the right of confirming actions. Instead, place them to the left of confirming actions.

> [imagen] Dialog with a single-action button: “OK”. — **DO** A single action may be provided only if it’s an acknowledgement

> [imagen] Dialog with 2 button choices: “Cancel”, “Got it”. — **DON'T** Avoid presenting people with unclear choices. **Cancel** doesn't make sense here because no clear action is proposed.

Dialogs should contain a maximum of two actions.

- If a single action is provided, it must be an acknowledgement action
- If two actions are provided, one must be a confirming action, and the other a dismissing action

> [imagen] Dialog with 2 buttons side-by-side: “Disagree”, “Agree”. — **DO** Display two text buttons next to one another

> [imagen] Dialog with 2 stacked buttons: “Turn on speed boost”, “No thanks”. — **CAUTION** Stacked buttons accommodate longer button text, but take up more room. Confirming actions appear above dismissive actions.

Providing a third action, such as **Learn more**, is not recommended as it navigates the user away from the dialog, leaving the dialog task unfinished.

Rather than adding a third action, an inline expansion can display more information. If more extensive information is needed, provide it prior to entering the dialog.

> [imagen] Dialog with 3 text buttons: Learn more, Disagree, Agree. — **CAUTION** The **Learn more** action (1) navigates away from this dialog, potentially leaving it in an indeterminate state

### Basic dialog

Basic dialogs interrupt users with urgent information, details, or actions. Common use cases for basic dialogs include alerts, quick selection, and confirmation.

> [imagen] Example of basic dialog action request. — Basic dialogs require a person to take action before it will close

> [imagen] Example of basic dialog confirmation. — Basic dialogs can give people the ability to provide confirmation of a choice before committing to it

Basic dialogs most often appear as alerts or lists, but can have a variety of layouts and component combinations, including lists, date pickers, and time pickers.

> [imagen] Date picker dialog. — Date picker dialogs allow people to tap a date, then confirm it by tapping **OK**

> [imagen] Time picker dialog. — Time picker dialogs allow people to move the clock hand and then confirm by tapping **OK**

### Full-screen dialog

Full-screen dialogs fill the entire screen, containing actions that require a series of tasks to complete. One example is creating a calendar entry with the event title, date, location, and time.

Because they take up the entire screen, full-screen dialogs are the only dialogs over which other dialogs can appear.

Use a [container transform](https://m3.material.io/m3/pages/motion-transitions/transition-patterns#b67cba74-6240-4663-a423-d537b6d21187) pattern to transition a FAB into a full-screen dialog.

> [vídeo] A FAB transitioning into a full-screen dialog. — Full-screen dialogs contain actions that require a series of tasks to complete

When a full-screen dialog is closed without being saved, a basic dialog appears in front of it to confirm selections should be discarded without saving changes.

> [vídeo] Closing a full-screen dialog triggers a basic dialog asking to discard the changes. — A basic modal dialog appears when a full-screen dialog is closed without being saved

Full-screen dialogs may be used for content or tasks that meet any of these criteria:

- Dialogs that include components which require keyboard input, such as form fields
- When changes aren’t saved instantly
- When components within the dialog open additional dialogs

Full-screen dialogs are for compact breakpoints only, like mobile devices. For medium and expanded breakpoints, use a basic dialog.

#### Saving selections

To save a selection in a full-screen dialog, use **Save**.  The close icon or dismissive action, such as **Cancel** or **Back**, should close the dialog.

#### Confirmation

The confirmation action should be clear about what happens next, like **Send** or **Create**. Avoid using vague terms like **Done**, **OK**, or **Close**. Only trigger an additional basic dialog if the action fails. Don’t disable the confirmation button.

> [imagen] Full-screen dialog with create button as confirmation action. — **DO** A **Create** button is clear that the event will be created

> [imagen] Full-screen dialog with an additional basic dialog asking if you want to create this event. — **DON'T** Don’t trigger a basic dialog when the confirming action is selected

#### Dismissing

When someone dismisses a full-screen dialog, a basic dialog should appear to confirm that they want to discard the unsaved changes.

> [imagen] A basic dialog with options to either keep editing or discard unsaved changes. — **DO** Use a basic dialog to confirm that the user wants to discard unsaved changes

> [imagen] A full-screen dialog with a Close button as the confirming action. — **DON'T** Don’t use the confirming action to dismiss the full-screen dialog

#### Error messages

Errors about the dialog fields should always appear inline where they occur. Some components like text fields have built-in error messaging, while others like checkboxes and radio buttons need error messages to be added next to the fields. General errors such as network issues preventing saving or submitting should appear in a basic dialog when the confirming action fails. Error messages should clearly but briefly explain the source of the error and how to fix it. Show all errors on the page at once so people can fix everything before trying again.

> [imagen] A full-screen dialog with inline error messages for text fields. — **DO** Error messages related to the fields should be displayed inline

> [imagen] A basic dialog mentioning that entries were not saved due to a connection issue. — **CAUTION** Errors unrelated to the fields can be displayed in a basic dialog

#### Dialog windows

Launching a full-screen dialog temporarily resets the app’s perceived elevation, allowing simple menus or dialogs to appear above the full-screen dialog. They cover the screen and don’t appear as a floating modal window.

#### Navigation

Because full-screen dialogs can only be completed, dismissed, or closed, the close “X” icon button should be the only navigation option in the app bar.

### Adaptive design

Dialogs can swap variants as the breakpoint changes. For example, a full-screen dialog can change into a basic dialog at larger breakpoints.

> [imagen] Example of full-screen dialog on left, simple dialog on right — 1. Full-screen dialog on mobile; 2. Dialog on a tablet

#### Medium breakpoint

Basic dialogs appear in a center position by default. Their position can be overridden to provide a more ergonomic experience.

> [imagen] Basic dialog on tablet photos app. — Dialog custom positioned on the right side of the screen

#### Expanded breakpoint

Dialogs on expanded breakpoints, like desktop, are modal windows above a scrim. This puts the dialog at the forefront of a person's view, calling attention to the action prompted in the dialog.

> [imagen] Example of desktop dialog. — Desktop dialogs call attention to the required action

Basic dialogs can be custom-positioned anywhere on larger screens, respecting margins to prevent edge collision.

> [imagen] Basic dialog position diagram. — Custom placement area for basic dialogs that respects a 56dp margin from the edges of the screen

### Behavior

#### Appearing

Dialogs appear without warning, requiring users to stop their current task. They should be used sparingly, as not every choice or setting warrants interruption.

Dialogs use an [enter and exit](https://m3.material.io/m3/pages/motion-transitions/transition-patterns#e1c2a650-d7a4-4a6d-9025-e6b7845291ed) transition pattern to appear on screen.

> [vídeo] Dialog entering and exiting screen using fade transition. — A dialog appears with an enter and exit transition

#### Position

Dialogs retain focus until dismissed or an action has been taken, such as choosing a setting. They shouldn’t be obscured by other elements or appear partially on screen, with the exception of full-screen dialogs.

> [imagen] A basic dialog covering a full-screen dialog. — Dialogs shouldn’t be obscured by other elements except for full-screen dialogs

#### Scrolling

Most dialog content should avoid scrolling. Even when scrolling is required, the dialog title is pinned at the top, with buttons pinned at the bottom. This ensures selected content remains visible alongside the title and buttons, even upon scroll.

Dialogs don’t scroll with elements outside of the dialog, such as the background.

> [vídeo] Example of fixed dialog title and buttons. — When viewing a scrollable list of options, the dialog title and buttons remain fixed

## Accessibility  (https://m3.material.io/components/dialogs/accessibility)

### Use cases

People should be able to use assistive technology to:

- Open and close a dialog
- Provide and submit other inputs if the dialog is interactive, such as a text field or selectable list
- Scroll the dialog to access all of its contents if that content extends beyond the container of the dialog

### Interaction & style

#### Use sparingly

Dialogs are purposefully interruptive. This means they appear in front of app content and disrupt the flow of content for people who may, for example, be using a screen reader to navigate the page.

As such, dialogs should be used sparingly and only to provide critical information. Less critical information should be presented in a non-blocking way within the flow of app content.

> [imagen] An inline tooltip doesn’t block a photo app’s content on a mobile screen.
A modal dialog blocks the content of a photo app on a mobile screen. — **DO** Present non-critical information using other UI within the flow of app content

> [imagen] A modal dialog blocks the content of a photo app on a mobile screen.
A modal dialog blocks the content of a photo app on a mobile screen. — **DON'T** Avoid putting non-critical information in a dialog

#### 200% text size

Avoid excessive text wrapping or truncation by choosing concise strings.

On Android, headlines should be kept concise enough to fit within **four** lines after the text size is increased to 200%. If a headline exceeds this limit and gets truncated, provide an alternative way to access the full content in a single tap.

> [imagen] A dialog with 200% text wraps multiple times in the header and description. It covers most of the mobile screen. — **CAUTION** Avoid excessive text wrapping or truncation by choosing concise strings

#### Elements within dialogs

Because dialogs can contain various elements within them, refer to the relevant accessibility guidelines for each element.  Some common examples include:

1. Text fields
2. Typography
3. Buttons

> [imagen] 3 elements of a full-screen dialog. — Full-screen dialogs can contain various elements such as (1) text fields, (2) typography, and (3) buttons, which each may have their own accessibility guidelines

### Initial focus

When a dialog appears, focus should automatically land on the first interactive element within the dialog.

> [imagen] A modal dialog titled “Permanently delete?” whose second interactive element is focused by selecting the Tab key. — Initial focus lands on the first interactive element within a dialog. The tab key moves focus through the next interactive elements in a cycle.

> [imagen] A modal dialog titled “Permanently delete?” whose previous interactive element is focused on by selecting both the Shift and Tab keys. — The shift and tab keys together move focus in the opposite direction. The space or enter key triggers or commits the action of the focused element.

### Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Focus lands on the next interactive element contained in the dialog, or the first element if focus is currently on the last element |
| Shift + Tab | Focus lands on the previous interactive element contained in the dialog, or the last element if focus is currently on the first element |
| Space or Enter | Triggers or commits the action of the focused element |
| Escape | Closes the dialog |

### Labeling elements

The accessibility label for a dialog is typically the same as the dialog’s title or headline.

On web, basic dialogs should have the **alert dialog** role.

> [imagen] An alert dialog with a title “Set up traffic updates?”  Its label is “Set up traffic updates?” and its role as “Alert Dialog.” — Basic dialogs are known as alert dialogs on web

Components contained within the dialog, such as buttons, should be labeled according to the guidelines specific to those components.

For common examples, see:

- Buttons
- Text fields

> [imagen] A full-screen dialog titled “New event” containing a “Save” button and a text field, both with their own accessibility labels. — Elements within a dialog should be labeled according to their guidelines
