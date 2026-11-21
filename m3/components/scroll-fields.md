---
title: "Scroll fields"
source: https://m3.material.io/components/scroll-fields
updated: 2026-11-17T22:33:51.821Z
content_version: 2026-11-19_06-20-01
---

# Scroll fields

## Overview  (https://m3.material.io/components/scroll-fields/overview)

- Two different modes of input: scroll and input
- Three recommended sizes: small (1-2 digits), medium (3 digits), and large (4 digits)
- Can be finite or an infinitely looping list
- Can be combined to select different measurements and include multiple values

> [imagen] 6 variations of the scroll field at varying widths. — Scroll fields come in three sizes: small, medium, and large

### Availability & resources

### M3 Expressive update

The scroll field was introduced in the expressive update. More on M3 Expressive

## Specs  (https://m3.material.io/components/scroll-fields/specs)

### Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens)

### Anatomy

> [imagen] Diagram identifying the 6 elements of a scroll field. — 1. Scroll field container; 2. Inactive number; 3. Active number; 4. Selected scroll field container; 5. Selected active number; 6. Cursor

### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens)

> [imagen] Side-by-side light and dark diagrams indicating the 6 different color elements of a scroll field. — Scroll field color roles used for light and dark themes:; 1. Surface container lowest; 2. Outline; 3. On surface; 4. Primary; 5. Primary; 6. Primary

### States

> [imagen] Side-by-side light and dark diagram showing the 8 interactive states of scroll fields. — 1. Enabled (inactive); 2. Hovered (inactive); 3. Focused (inactive); 4. Disabled (inactive); 5. Enabled (active); 6. Hovered (active); 7. Focused (active); 8. Disabled (active)

### Measurements

Scroll fields hug the contents by default, down to a minimum width and height per size. In larger windows, the fields can fill the container instead, or have a custom fixed size.

> [imagen] Diagram of width and height measurements for scroll fields, by number of digits. — 1. Small (1-2 digits); 2. Medium (3 digits); 3. Large (4 digits)

### High contrast

High contrast mode is an accessibility feature that aims to maximize legibility by using a limited color palette, like black and white. [Learn more about high contrast](https://m3.material.io/m3/pages/color/how-the-system-works#0207ef40-7f0d-4da8-9280-f062aa6b3e04)

> [imagen] Two fields, one with scroll and one with direct input, using high-contrast mode. — Scroll field in high-contrast mode

## Guidelines  (https://m3.material.io/components/scroll-fields/guidelines)

> [vídeo] Close-up of a scroll field component selecting height. — Scroll fields provide a flexible, focused way for people to input or adjust specific measurements and numeric values

### Usage

Scroll fields are an expressive way to select from a list of options. They're best used for numbers, but can be customized to many different use cases.

> [imagen] Fitness app with scroll fields used to set desired heart rate. — Scroll fields are best used for choosing from a list of numbers

Scroll fields can be used for time selection, as well as other units of measurement like distance, weight, or temperature.

> [imagen] UI displaying scroll fields setting temperature. — Temperature can be set through paired scroll fields

Use scroll fields alongside other controls, like button groups, to set more specific filters or add greater choice.

If using scroll fields to choose time, use a time picker instead.

> [imagen] Bottom sheet with an alarm using scroll fields for time, along with button group options for date of week. — Scroll fields can be used along with options for day to add precision

Multiple scroll fields can be placed side by side. If each scroll field is tracking a different value, clearly label each field.

> [imagen] A timer with three scroll fields aligned to hours, minutes, and seconds. — Add labels to scroll fields affecting different values

#### Support keyboard input

For accessibility, scroll fields should have an option to swap to text input for keyboard users. Place this button near the scroll field.

In scroll time pickers, this button is built-in.

> [imagen] Fitness app displaying a field for calories through scroll, with a keyboard icon to switch to text input. — When scroll fields are present, the keyboard icon allows switching to text input

### Anatomy

The scroll field has different parts that can be customized.

> [imagen] Diagram of scroll field listing container, inactive value, and active value. — 1. Scroll field container; 2. Inactive value; 3. Active value

> [imagen] Diagram of scroll field elements with an active value and a container using a highlight and cursor. — 1. Selected scroll field container with highlight; 2. Selected active value; 3. Cursor

### Behavior

#### Scrolling

To scroll between values in a field, swipe the field, or tap the inactive value above or below to navigate to it.

> [vídeo] ISO values are listed on a camera app, with inactive values scrollable by swiping or selecting the values themselves. — Scroll through values by swiping or tapping the inactive values

#### Motion

Scrolled items snap to always be vertically centered. The active value is darker with an increased font size.

> [vídeo] Month and day in separate scroll fields being used for date selection. — The item in the center of the container snaps into place

#### Input behavior

When text input is selected, the numeric or standard keyboard can be used to select values.

For strings, the selection should auto-complete based on the initial character entered.

Any errors should appear below the scroll fields, and should highlight the incorrect value.

> [vídeo] UI for logging water shows numeric values added by keyboard after first selecting keyboard icon. — Choosing text input swaps the focused scroll field to a text field

### Sizing

Material recommends only using up to four digits in scroll fields. However, more digits can still be added as needed. There are three size options with their own minimum widths:

- Small (1-2 digits): 100dp
- Medium (3 digits): 144dp
- Large (4 digits): 186dp

> [imagen] Three different sizes of scroll fields: small with 2 digits, medium with 3 digits, and large with 4 digits. — 1. Small (1-2 digits); 2. Medium (3 digits); 3. Large (4 digits)

Avoid very long lists in scroll fields, such as consecutive numbers with five or more digits. Values should be quick to scroll to.

To avoid excessive scrolling time, add intervals between values, or use a different component for precise entry, like a text field.

> [imagen] A banking app set to transfer money with the dollar amount running to five digits on a scroll field. — **DON'T** Using five or more digits implies a long scroll time, unless values aren’t consecutive

### Placement

#### Inline is preferred

Whenever possible, place scroll fields inline with content. When scroll fields are inline, people can easily see surrounding content.

> [imagen] Camera app showing values for aperture and shutter speed above a scroll field to select ISO value. — Inline scroll fields are ideal for multiple values that should be set together, like ISO, shutter speed, and aperture camera settings

#### Non-modal dialog

When scroll fields can’t be placed inline, use a popup container like a non-modal dialog.

> [imagen] An option to select a “custom amount” produces 2 scroll fields as a non-modal dialog to select total amount in ounces or liters. — When space is limited, scroll fields can be placed in a non-modal dialog

#### Modal dialog

Modal dialogs should be used rarely, when the UI is too cluttered for a non-modal dialog.

> [imagen] A modal listing temperature settings through two scroll fields. — **CAUTION** Scroll fields can be placed in modals if needed

### Adaptive design

On larger screens, consider increasing scroll field height and width to more comfortably fill the containers they’re placed within.

> [vídeo] Scroll fields adapt to smaller or larger device size, filling the space. — A taller and wider scroll field better fits the larger layout

#### Customizations

Scroll fields can be customized to have a fixed size, or to adapt in size depending on the space they’re placed in. To preserve usability:

- Visually crop inactive values to indicate that more values are available by scrolling
- Corner radius shouldn't be less than 16dp

> [imagen] Custom widths for a scroll field. — Scroll fields are customizable to fit panes of any size

## Accessibility  (https://m3.material.io/components/scroll-fields/accessibility)

### Use cases

People should be able to use assistive technology to:

- Select or enter values and units of measurement
- Enter measurement selection manually using input fields

### Interaction & style

#### Include both swipe & text input options

Any scroll field needs a way to also input text with a keyboard, like a toggle button next to the scroll fields, or a separate text field.

Material's scroll time picker has a built-in button that toggles to an input time picker. Consider using a similar pattern.

> [vídeo] The keyboard toggle on a scroll field activates input mode and allows direct entry of liters. — Scroll fields are always paired with an input toggle in time pickers to allow text input

#### Targets

Targets for inactive values need to maintain a minimum height of 48dp, which stretches outside the container by default.

> [imagen] Diagram showing scroll field’s tap targets. — All inactive values present should have a minimum 48dp height

### Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Focus lands on scroll field |
| **Space** or **Enter** | Activates the scroll field |
| **Up** / **Down** | Selects option above or below in scroll field’s list |
