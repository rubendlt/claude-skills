---
title: "Time pickers"
source: https://m3.material.io/components/time-pickers
updated: 2026-11-17T08:40:23.355Z
content_version: 2026-11-19_06-20-01
---

# Time pickers

## Overview  (https://m3.material.io/components/time-pickers/overview)

- Time pickers can be placed on a page, embedded directly within lists and sheets, or presented as modals
- Use **scroll pickers** inline, **dial pickers** in a modal, and have an option to swap these to **input pickers** for text input
- Can adapt to 12-hour and 24-hour time, horizontal or vertical orientations
- Only use for selecting hours and minutes
- Make sure time can easily be selected on a mobile device

> [imagen] A scroll time picker, with the ability to select day of the week, next to a 12-hour dial time picker. — Time selection can be paired with day of the week and accessed through multiple inputs

### Availability & resources

### M3 Expressive update

The expressive update added the scroll time picker variant, updated shapes, and updated color styling to all variants. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

starNote:In Jetpack Compose, the Expressive styling is called "vibrant"

**Oct 2026**

Variants and naming

- Added **scroll time picker**
- Updated **input time picker** and **dial time picker** with expressive styles

Expressive styles

- Higher contrast on hour and minute fields, and dial selector
- Expressive button shape, color, and behavior for AM and PM buttons
- Removed **select time** label

> [imagen] Expressive variants for time picker: scroll, input, and dial. — The expressive update added **scroll time pickers**, and updated **input** and **dial time pickers**

### Differences from M2 to M3 baseline

- Color: New color mappings and compatibility with dynamic color

> [imagen] Time picker’s old color mappings. The selected hour of 7 and AM text is purple, on a purple background. — M2: Time pickers had different color mappings

> [imagen] Time picker's new color mappings. The selected hour of 7 and AM text is black, with different background colors. — M3: Time pickers have new color mappings compatible with dynamic color

## Specs  (https://m3.material.io/components/time-pickers/specs)

### Expressive variants

Scroll time picker was added in the expressive update. Input and dial time pickers have updated visuals.

> [imagen] Three expressive variants: scroll, input, and dial time pickers. — 1. Scroll time picker; 2. Input time picker; 3. Dial time picker

### Baseline variants

Baseline variants for input time picker and dial time picker are no longer recommended. [Jump to baseline time picker specs](https://m3.material.io/m3/pages/time-pickers/specs#298a79d2-01ae-42ac-bbf0-ec89cecd7d6e)

> [imagen] Baseline versions of input and dial time picker. — Baseline time pickers are no longer recommended: 1. Input time picker 2. Dial time picker

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Scroll time picker | -- | Available |
| Input time picker | Available | Available |
| Dial time picker | Available | Available |

### Configurations

#### Behavior: Inline or modal

Expressive scroll and input time pickers can be placed inline with page content. Baseline input time pickers are only available as modal.

##### Scroll time picker

> [imagen] Inline and modal scroll time pickers. Modal has text buttons for OK and Cancel. — 1. Inline; 2. Modal

##### Input time picker

> [imagen] Inline and modal input time pickers. Modal has text buttons for OK and Cancel. — 1. Inline; 2. Modal

##### Dial orientation: horizontal or vertical

> [imagen] Comparing vertical and horizontal dial time pickers. — 1. Vertical layout (default on mobile); 2. Horizontal layout

##### Time length: 12-hour or 24-hour

24-hour time pickers don’t have the AM or PM buttons, so are have a smaller width when modal. Dial time pickers have an outer dial for 0 to 11, and an inner dial for 12 to 23.

###### Scroll time picker

> [imagen] 2 24-hour scroll time pickers with vertical and horizontal layouts. — 1. Inline; 2. Modal

###### Dial time picker

> [imagen] 2 24-hour dial time pickers with vertical and horizontal layouts. — 1. 24h dial in vertical layout (default on mobile); 2. 24h dial in horizontal layout

###### Input time picker

> [imagen] 12-hour and 24-hour input time pickers. — 1. Inline; 2. Modal

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Behavior | Inline | Available (input only) | Available (input & scroll only) |
|  | Modal | Available | Available |
| Time length | 12-hour, 24-hour | Available | Available |
| Dial orientation | Horizontal, vertical | Available | Available |

### Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens)

### Anatomy

#### Scroll time picker

> [imagen] Diagram identifying the 4 elements of a scroll time picker. — 1. Scroll field; 2. Separator; 3. Period selector; 4. Input mode toggle

#### Input & dial time picker

> [imagen] Diagram identifying the 13 elements of a dial and input time picker. — 1. Scroll field; 2. Selected active value; 3. Separator; 4. Container; 5. Toggle label button; 6. Period selector label text; 7. Clock dial selector center; 8. Clock dial selector track; 9. Text buttons; 10. Icon button; 11. Clock dial selector container; 12. Clock dial label text; 13. Clock dial container

### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

#### Scroll time picker color

> [imagen] Side-by-side light and dark diagrams identifying the 9 different color elements of a scroll time picker. — Scroll time picker color roles used for light and dark themes:; 1. Surface container lowest; 2. On surface; 3. On surface; 4. Outline; 5. Primary container; 6. On primary container; 7. Surface container lowest; 8. On surface variant; 9. On surface variant

#### Dial & input time picker color

> [imagen] Side-by-side light and dark themed diagrams identifying the 13 different color elements of a dial and input time picker. — Dial and input time picker color roles used for light and dark themes:; 1. Primary; 2. Primary; 3. On surface; 4. Surface container lowest; 5. Primary container; 6. On primary container; 7. Surface container lowest; 8. On surface variant; 9. Surface container lowest; 10. On surface; 11. Primary; 12. On surface variant; 13. Primary

### States

> [imagen] Digram showing the 4 interactive states of a time picker, in both light theme and dark theme. — States for scroll (default), text input, and AM/PM buttons:; 1. Enabled; 2. Hovered; 3. Focused; 4. Pressed; 5. Disabled; 6. Error

> [imagen] Digram showing the 3 interactive states of a time picker’s clock dials, in both light and dark theme. — States for clock dials:; 1. Enabled; 2. Hovered; 3. Focused

### Measurements

#### Inline time picker (input & scroll)

> [imagen] Diagram of scroll time picker measurements. — Scroll time picker padding and size measurements

#### Modal time picker (input & scroll)

> [imagen] Diagram of input time picker measurements. — Input time picker padding and size measurements

#### Dial time picker (vertical)

> [imagen] Diagram of vertical dial time picker measurements. — Vertical dial time picker padding and size measurements

#### Dial time picker (horizontal)

> [imagen] Diagram of horizontal dial time picker measurements. — Horizontal dial time picker padding and size measurements

### Baseline

#### Tokens & specs

Select a token set to view in the table's menu. Baseline time picker token sets are organized into dial and input sets. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens)

### Configurations

Vertical and horizontal orientation for dial time picker is the same for expressive and baseline.

##### 24-hour dial time picker

> [imagen] 2 24-hour baseline time picker dials with vertical and horizontal layouts. — 1. 24h dial in vertical layout (default on mobile); 2. 24h dial in horizontal layout

##### 12-hour and 24-hour input time pickers

> [imagen] Compare 12-hour and 24-hour baseline time picker inputs. — 1. 12h input; 2. 24h input

#### Anatomy

##### Input time picker

> [imagen] Diagram identifying the 10 elements of a baseline input time picker. — 1. Headline; 2. Time input field separator; 3. Container; 4. Period selector container; 5. Period selector label text; 6. Text buttons; 7. Icon button; 8. Time input field supporting text; 9. Time input field label text; 10. Time input field container

##### Dial time picker

> [imagen] Diagram identifying the 14 elements of a baseline dial time picker. — 1. Headline; 2. Time selector separator; 3. Container; 4. Period selector container; 5. Period selector label text; 6. Clock dial selector center; 7. Clock dial selector track; 8. Text buttons; 9. Icon button; 10. Clock dial selector container; 11. Clock dial label text; 12. Clock dial container; 13. Time selector label text; 14. Time selector container

#### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

##### Input time picker color

> [imagen] Side-by-side light and dark diagrams indicating the 13 different color elements of a time picker input. — Input time picker color roles used for light and dark themes:; 1. On surface variant; 2. On surface; 3. Surface container highest; 4. On surface; 5. Tertiary container; 6. On tertiary container; 7. Surface container high; 8. Outline; 9. On surface; 10. Primary; 11. On surface variant; 12. On primary container; 13. Primary container

##### Dial time picker color

> [imagen] Side-by-side light and dark diagrams identifying the 17 different color elements of a baseline dial time picker. — Dial time picker color roles used for light and dark themes:; 1. On surface variant; 2. On surface; 3. Surface container highest; 4. On surface; 5. Tertiary container; 6. On tertiary container; 7. Surface container high; 8. Outline; 9. On surface; 10. Primary; 11. On primary; 12. Primary; 13. On surface variant; 14. On surface; 15. Surface container highest; 16. On primary container; 17. Primary container

#### States

> [imagen] Digram showing the 4 interactive states of a time picker, in both light theme and dark theme. — 1. Enabled; 2. Hover; 3. Focus; 4. Pressed

[States specs can be found in the token module above](https://m3.material.io/m3/pages/time-pickers/specs#2ccd9809-9246-4667-85fa-7747f4ac7349)

#### Measurements

##### Input time picker

> [imagen] Diagram of time picker input measurements. — Time picker input padding and size measurements

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Dynamic |
| Height | Dynamic |  |
| Headline alignment | Left |  |
| Top/bottom padding | 24dp |  |
| Left/right padding | 24dp |  |
| Time input field container | Width | 96dp |
| Height | 72dp |  |
| Period selector container | Width | 52dp |
| Height | 72dp |  |

##### Dial time picker (vertical)

> [imagen] Diagram of baseline vertical dial time picker measurements. — Vertical dial time picker padding and size measurements

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Dynamic |
| Height | Dynamic |  |
| Headline alignment | Left |  |
| Top/bottom padding | 24dp |  |
| Left/right padding | 24dp |  |
| Time selector container | Width | 96dp |
| Width (24h vertical) | 114dp |  |
| Height | 80dp |  |
| Period selector container | Width (vertical layout) | 52dp |
| Height (vertical layout) | 80dp |  |
| Width (horizontal layout) | 216dp |  |
| Height (horizontal layout) | 38dp |  |
| Clock dial container | Size | 256dp |
| Clock dial selector handle | Size | 48dp |
| Clock dial selector center | Size | 8dp |
| Clock dial selector track | Width | 2dp |

##### Dial time picker (horizontal)

> [imagen] Diagram of baseline horizontal dial time picker measurements. — Horizontal dial time picker padding and size measurements

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Dynamic |
| Height | Dynamic |  |
| Headline alignment | Left |  |
| Top/bottom padding | 24dp |  |
| Left/right padding | 24dp |  |
| Time selector container | Width | 96dp |
| Width (24h vertical) | 114dp |  |
| Height | 80dp |  |
| Period selector container | Width (vertical layout) | 52dp |
| Height (vertical layout) | 80dp |  |
| Width (horizontal layout) | 216dp |  |
| Height (horizontal layout) | 38dp |  |
| Clock dial container | Size | 256dp |
| Clock dial selector handle | Size | 48dp |
| Clock dial selector center | Size | 8dp |
| Clock dial selector track | Width | 2dp |

## Guidelines  (https://m3.material.io/components/time-pickers/guidelines)

> [imagen] Full-scale presentation of three time picker variants: scroll, input, and dial. — Use the time picker that best complements the available space and existing interaction patterns:; 1. Scroll time picker; 2. Input time picker; 3. Dial input picker

### Usage

Time pickers are used to enter a specific time value, usually hours and minutes. They can be placed inline with other content, on surfaces like bottom sheets, side sheets, menus, or in modal dialogs. Whenever possible, place time pickers inline so surrounding content remains visible.

Time pickers can be used for a wide range of use cases, like:

- Setting an alarm
- Scheduling a meeting
- Choosing a time range

There are three time pickers: **scroll**, **input**, and **dial**.

> [imagen] Scroll time picker setting an alert with an option for recurring alert and additional fields for day of week and AM or PM. — A scroll time picker can be used inline to set an alert

#### Scroll time picker

The scroll time picker is a compact way to select time. It’s best placed inline with other content, but can also be used on surfaces like a sheet, menu, or modal dialog.

Use **scroll** time pickers instead of **dial** pickers when you want people to see surrounding content.

**Scroll** time pickers can toggle to **input** time pickers.

> [imagen] Scroll time picker for a 12-hour clock, with AM/PM selector visible. — A scroll time picker for a 12-hour clock, with AM/PM selector visible

#### Input time picker

The input time picker uses keyboard entry to input time. Similar to scroll time picker, it can be used inline or modal, on any kind of surface.

Both the **dial** and **scroll** time pickers are built to toggle to **input** time pickers to ensure accessible time entry.

> [imagen] Input time picker for a 12-hour clock with the hour field active and highlighted and AM/PM selector visible. — Input selector for a 12-hour clock, with AM/PM selector

#### Dial time picker

Dial time pickers are the most engaging way to select time, but they take up the most space, and are only available in modal dialogs, not inline.

Avoid using dial time pickers for granular time selection, such as milliseconds for a stopwatch application.

**Dial** time pickers can toggle to **input** time pickers.

> [imagen] Dial time picker for a 12-hour clock with hour 7 selected. — When using a 12-hour clock for dial select, numbers only appear in the outer ring

#### Toggling to input selector

The input selector can be toggled from either the dial or scroll selector using the keyboard icon button.

Toggle back to dial picker with a clock icon. Toggle back to scroll picker with a swipe icon.

> [vídeo] Dial time picker with keyboard icon button for toggling to input. — Selecting the keyboard icon switches to direct input. Selecting the dial icon switches back to dial input.

#### 24-hour time selection

The time picker should auto-adjust to 24-hour time settings, removing the AM and PM buttons, and adding the inner dial. For dial picker, time moves from 0-11 on the outer dial, switches to 12-23 on the inner dial, and returns to 00 on the outer dial for the 24th hour.

> [imagen] Time picker with scroll input, with the hour field set to 18 and the minute field set to 30. — 24-hour scroll and input time pickers have no AM and PM buttons

> [imagen] Time picker with dial input selecting hour 20. Hours 0–11 use an outer dial, while hours 13–24 use an inner dial. — 24-hour dial time picker has no AM and PM buttons, and has an inner dial

#### Alternate time selection components

Only use time pickers when any time can be chosen, down to the minute. If people only need to choose from preset times or intervals, consider using a simpler, smaller component like a button group, menu, or combo box.

> [imagen] Button groups listing multiple reservation times, with some missing. — **DO** Use button groups when certain time options are unavailable

> [imagen] A calendar app showing multiple times for a meeting, in 15-minute increments. — **DO** Use menus or combo boxes when time options are limited and part of a range

### Customization

#### Text & containers

Typography can be customized for more expressive time selection experiences, such as stretching, narrowing, and rounding the text.

When using narrower and larger typography, use taller scroll field heights so the surrounding options are at least half-visible.

> [imagen] Scroll time picker with large, bold, and narrow numerals. — Adjust scroll field container height when increasing size of typography

#### Color

When customizing color, make sure both active and inactive values maintain the required contrast ratio with the scroll field background.

> [imagen] Scroll time picker with custom colors applied. — When customizing color, maintain proper contrast between the numerals and scroll field

#### Container (modal)

When in a modal dialog, the time picker container should always be visible, appearing above other screen elements in front of a scrim.

The container usually isn’t needed when inline with other content.

> [imagen] 2 input time pickers, with and without containers. — 1. Input time picker modal (with a container); 2. Input time picker inline (without a container)

#### Input toggle button

An icon button must be present to toggle from a dial or scroll time picker to an input time picker.

If not using the built-in toggle, make sure a toggle is placed nearby.

> [imagen] Cropped portion of dial selector without keyboard icon, removing path to input selector. — **DON'T** Don’t remove the built-in toggle button from dial or scroll time pickers without providing another way to toggle

### Placement

#### Inline

Whenever possible, place time pickers inline with content, rather than as a modal dialog. This makes it much easier for people to reference other content on the page when making their decision.

> [vídeo] A UI displaying a scroll time picker for the specific time of an event, surrounded by fields for date and setting time zone. — Inline time pickers can be shown and hidden to preserve space when not in use

#### Menus

On touch devices, when time pickers can't be placed inline, consider using a scroll time picker in a menu.

> [vídeo] Scroll time picker displayed in a menu. — If inline layout is not possible, use a menu to fully display the time picker

#### Modals

Time pickers can be in modal dialogs above a scrim. However, modals should be used rarely, when the UI is too cluttered for more components.

Dial time pickers are only available in modals.

> [imagen] A modal showing input time picker above a UI filled with fields for event details. — Modals block all other actions when active, though can save space in a busy UI

### Adaptive design

Scroll and input time pickers can resize to fit the container they’re placed in. Each field should resize evenly.

> [vídeo] A calendar app using inline scroll time picker that expands when moving from compact to larger breakpoints. — Scroll fields should expand in larger panes to allow for larger tap targets

Dial time pickers should swap orientation or variant depending on the breakpoint and available vertical space. Avoid adding scrolling to dial time pickers.

For example:

- At larger breakpoints with more space, swap from the vertical to horizontal dial time picker
- When vertical space is reduced, like rotating a phone, swap to the landscape dial picker to avoid scrolling or cutting off the dial
- When vertical space is very limited, or the interface is zoomed in, swap from dial to a scroll or input time picker

> [imagen] A dial time picker in vertical configuration, which is too tall for mobile in landscape mode. — **DON'T** Don’t cut off the dial time picker. Instead, swap to horizontal orientation, or to another time picker.

### Behavior

#### Scroll time pickers

Swipe the scroll fields to select a time value. Values snap into place when released.

Tap the inactive value above or below to navigate to it.

The keyboard icon swaps the component to an input time picker.

> [vídeo] Scroll time picker with options to swipe and tap, or select the keyboard icon for direct input. — The scroll time picker supports both scrolling and direct input

#### Dial time pickers

When the dial time picker is opened, the hour field is selected by default. Once hour is selected by dial, the minutes field will activate to then select minutes by dial.

Selecting either field will reactivate the corresponding dial to select another option.

The keyboard icon swaps the component to an input time picker.

> [vídeo] Dial time picker with hour field selected, and keyboard icon to access direct input. — The dial time picker supports both direct and dial input

#### Input time picker

Select a text field to activate the keyboard entry and input a time value.

Errors should appear below the time picker, and highlight the invalid field with an error color scheme.

> [imagen] Input time picker with swiping icon to access scroll selector. — The swipe icon allows the input selector to switch to scroll selector

#### Modals & motion

When appearing in a modal, time pickers use [appearing and disappearing transitions](https://m3.material.io/m3/pages/dialogs/guidelines#71058dbd-d228-4cd5-95e6-eb39761f4c29) similar to dialogs.

The **OK** button confirms the selection and closes the modal. The **Cancel** button, and interacting on the scrim, dismisses the changes and closes the modal.

> [vídeo] Time picker enter and exit transitions based on dialogs. — **OK** or **Cancel** closes the modal

## Accessibility  (https://m3.material.io/components/time-pickers/accessibility)

### Use cases

People should be able to use assistive technology to:

- Select or enter hours, minutes, seconds, or milliseconds
- Choose between 12-hour or 24-hour clock format
- Enter time selection directly using input fields

### Interaction & style

Material requires time pickers to allow direct time entry through text input in addition to the scroll and dial selector. This toggle is built into the component by default.

Allowing text input makes it easier for those using keyboard inputs rather than touch screens.

> [imagen] Time picker with active manual text input for hours. — Text input is available for both dial and scroll time pickers

#### Targets

Targets for a scroll field’s inactive values need to be at least 48dp high.

The tap targets for the AM/PM button and input toggle need to be at least 48x48dp.

> [imagen] Diagram showing scroll fields' target sizes. — Scroll fields, whether active or inactive, must be at least 48dp high

Targets for each dial item need to be at least 48x48dp.

> [imagen] Dial time picker selector specs, selecting hour 7. — Dial targets should be a minimum of 48x48dp

### Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** | Focus lands on (non-disabled) time slot, and moves to the next element |
| **Shift** + **Tab** | Focus moves to the previous element |
| **Arrow keys** | Focus moves between hours or minutes, once hour or minute field is selected. When AM/PM radio group is focused, selection moves between AM and PM.Up / down moves to previous / next option in scroll field. |
| **Space** or **Enter** | Activates the (non-disabled) time slot or button.Allows direct entry of numbers in input.Confirms hour and minute for dial, input, and scroll. |

### Labeling elements

The hour and minute fields have different roles depending on the type of time picker.

> [imagen] Accessibility tag on a dial time picker's hour field lists “Toggle” for the element. — On dial time pickers, the fields are toggles, not directly editable text fields

> [imagen] Accessibility tag on an input time picker's hour field lists “Text input” for role. — On input time pickers, the fields are text inputs

> [imagen] Accessibility tag on a scroll time picker's hour  field lists “Rotor” for element. — On scroll time pickers, the fields are rotors

The AM/PM buttons use a **radio group** role, as only one can be selected at a time.

> [imagen] Accessibility tag on the AM button lists “Label: AM, Role: Button.” — The AM/PM buttons are **radio group**. Selecting one unselects the other.

Each hour on the dial input is listed out of 12 for a 12-hour dial. Minutes are listed out of 60. Examples:

- “Hour 7 of 12”
- “Hour 23”
- “Minute 24 of 60”

> [imagen] Accessibility tag on the time picker's dial selector lists "Hour 7 of 12.” — The label on a dial time picker shows the hour out of 12, on a 12-hour dial

| **Element** | **Accessibility label** | **Role (Wiz and Jetpack Compose)** | **Role (Android Views)** |
| --- | --- | --- | --- |
| Hour input | Hour | Text input | Text input |
| Hour scroll | Hour | Rotor (element) | Rotor (element) |
| Hour dial | Hour | Toggle (element) | Toggle (element) |
| Minute input | Minute | Text input | Text input |
| Minute dial | Minute | Rotor (element) | Rotor (element) |
| Minute toggle | Minute | Toggle (element) | Toggle (element) |
| AM/PM selection | AM PM | Radio group | Radio group |
| Picker toggle button | Toggle input pickerToggle dial pickerToggle scroll picker | Button | Button |
| Cancel button | Cancel | Button | Button |
| OK button | OK | Button | Button |
| Clock dial time selection | 12-hour: Hour {Value} of 1224-hour: Hour {Value}Minutes: Minute {Value} of 60 | Button | Button |

### Navigation

#### Initial focus

Initial focus lands on the hour field.

> [imagen] Dial time picker with hour in focus. — The hour field is focused first

#### Dial navigation

**Tab** to move through the hour, minute, and AM/PM options. Use arrow keys to toggle between AM and PM, and **Enter** to select.

**Enter** on the hour or minute field will allow selection of specific numbers. Once focus moves to the dial, it begins on minute 0 or hour 12. **Right** or **Down** will move through hours or minutes clockwise. **Left** or **Up** will move counter-clockwise.

Selecting **Enter** will confirm hour or minute.

> [vídeo] A dial time picker with Tab and Left key moving the dial selector clockwise. — **Right** or **Down** moves the dial clockwise. **Left** or **Up** moves the dial counter-clockwise.
