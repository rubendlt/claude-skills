---
title: "Date pickers"
source: https://m3.material.io/components/date-pickers
updated: 2026-10-22T09:43:17.605Z
content_version: 2026-11-19_06-20-01
---

# Date pickers

## Overview  (https://m3.material.io/components/date-pickers/overview)

- Date pickers can display past, present, or future dates
- Three variants: docked, modal, modal input
- Clearly indicate important dates, such as current and selected days
- Follow common patterns, like a calendar view

> [imagen] 3 variants of date pickers side-by-side. The docked date picker has an outlined text field above a calendar view. The modal date picker allows people to select a date from a calendar view. The modal date input lets someone type in a date. — 1. Docked date picker; 2. Modal date picker; 3. Modal date input

### Availability & resources

### Differences from M2

- Typography and spacing: Titles and labels are larger and have increased spacing to accommodate 48dp target size
- Color: New color mappings and compatibility with dynamic color
- Variants: The three variants of date pickers have been renamed to not be device-dependent. The former desktop date picker is now known as the docked date picker. The former mobile date picker and date input are now known as modal date picker and modal date input to reinforce that the user must take an action.

> [imagen] Old version of a date picker with a white background and shadows. — M2: Date pickers had a drop shadow and different color mappings

> [imagen] New version of date picker with a colorful background, rounded corners, and no shadows. — M3: Date pickers have larger typography, no shadow, and new color mappings compatible with dynamic color

## Specs  (https://m3.material.io/components/date-pickers/specs)

### Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

### Docked date picker

> [imagen] Diagram indicating the 11 elements of a docked date picker. — 1. Outlined text field; 2. Menu button: Month selection; 3. Menu button: Year selection; 4. Icon button; 5. Weekdays label text; 6. Unselected date; 7. Today’s date; 8. Outside month date; 9. Text buttons; 10. Selected date; 11. Container

> [imagen] Diagram indicating 8 elements of a docked date picker with an open dropdown menu showing the months May to November. — 1. Outlined text field; 2. Menu button: Month selection (pressed); 3. Menu button: Year selection (disabled); 4. Header; 5. Menu; 6. Selected list item; 7. Unselected menu list item; 8. Container

#### Docked date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

> [imagen] 11 color roles of a docked date picker in light and dark themes. — Docked date picker color roles used for light and dark themes:; 1. Primary; 2. On surface variant; 3. On surface variant; 4. On surface; 5. On surface; 6. Primary; 7. On surface variant; 8. Primary; 9. Surface container high; 10. Primary; 11. On primary

> [imagen] 7 color roles of a docked date picker menu in light and dark themes. — Docked date picker menu color roles used for light and dark themes:; 1. Primary; 2. On surface variant; 3. On surface; 4. Outline variant; 5. Surface container high; 6. Surface variant; 7. On surface

#### Docked date picker measurements

> [imagen] Diagram of padding, size, and layout measurements. — Docked date picker padding and size measurements

> [imagen] Diagram of padding, size, and layout measurements. — Docked date picker month menu padding and size measurements

#### Docked date picker configurations

> [imagen] 3 configurations of docked date picker. — 1. Day selection; 2. Month selection; 3. Year selection

### Modal date picker

> [imagen] Diagram indicating the 13 elements of a modal date picker in the day selection view. — 1. Headline; 2. Supporting text; 3. Header; 4. Container; 5. Icon button; 6. Icon buttons; 7. Weekdays; 8. Today’s date; 9. Unselected date; 10. Text buttons; 11. Selected date; 12. Menu button; 13. Divider

> [imagen] 10 elements of a modal date picker menu. — 1. Headline; 2. Supporting text; 3. Header; 4. Container; 5. Icon button; 6. Unselected year; 7. Selected year; 8. Text buttons; 9. Divider; 10. Menu button

> [imagen] Diagram indicating the 15 elements of a modal date picker when selecting a range of dates. — 1. Headline; 2. Supporting text; 3. Icon button; 4. Header; 5. Text button; 6. Icon button; 7. Weekdays label text; 8. Container; 9. Today’s date; 10. Unselected date; 11. In-range active indicator; 12. In-range date; 13. Month subhead; 14. Selected date; 15. Divider

#### Modal date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

> [imagen] 12 color roles of a modal date picker day selection view. — Modal date picker color roles used for light and dark themes in a day selection menu:; 1. On surface; 2. On surface variant; 3. Surface container high; 4. On surface variant; 5. On surface variant; 6. On surface; 7. Primary; 8. On surface; 9. Primary; 10. Primary; 11. On surface variant; 12. Outline variant

> [imagen] Diagram of 9 color roles of a modal date picker year selection view. — Modal date picker color roles used for light and dark themes in a year selection menu:; 1. On surface; 2. On surface variant; 3. Surface container high; 4. On surface variant; 5. On surface variant; 6. Primary; 7. Primary; 8. Outline variant; 9. On surface variant

> [imagen] Diagram of 14 color roles of a modal date picker when selecting a range of dates. — Modal date picker range selector color roles used for light and dark themes:; 1. On surface; 2. On surface variant; 3. On surface variant; 4. Surface container high; 5. Primary; 6. On surface variant; 7. On surface; 8. Primary; 9. On surface; 10. Secondary container; 11. On secondary container; 12. Outline variant; 13. On surface variant; 14. Primary

#### Modal date picker measurements

> [imagen] Diagram of size and padding measurements in day selection view. — Modal date picker padding and size measurements

> [imagen] Diagram of size and padding measurements in year selection view. — Modal date picker year selector padding and size measurements

> [imagen] Diagram of size and padding measurements when selecting a range of dates. — Modal date picker date range selector padding and size measurements

#### Modal date picker configurations

> [imagen] 3 configurations of a modal date picker shown in dark mode. — 1. Single date selection; 2. Date range selection; 3. Year selection

### Modal date input

> [imagen] Diagram indicating the 8 elements of a modal date input. — 1. Headline; 2. Supporting text; 3. Header; 4. Container; 5. Icon button; 6. Outlined text field; 7. Text buttons; 8. Divider

#### Modal date input color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

> [imagen] Diagram indicating the 7 color roles of a modal date input. — Modal date input color roles used for light and dark themes:; 1. On surface; 2. On surface variant; 3. Surface container high; 4. On surface variant; 5. Primary; 6. Primary; 7. Outline variant

#### Modal date input measurements

> [imagen] Diagram of the padding and size measurements of a modal date input. — Modal date input padding and size measurements

#### Modal date input configurations

> [imagen] 2 configurations of modal date input. — 1. Single date input; 2. Date range input

### Element states

> [imagen] Diagram of 5 various states for date and year elements within date pickers. — States for date and year selection:; 1. Default (enabled); 2. Disabled; 3. Hovered; 4. Focused; 5. Pressed (ripple)

## Guidelines  (https://m3.material.io/components/date-pickers/guidelines)

> [imagen] A date picker opens in a form UI. — Docked date picker on desktop

### Usage

Date pickers let people select a date or range of dates. They should be suitable for the context in which they appear.

Date pickers can be embedded into:

1. Dialogs on compact [breakpoints](https://m3.material.io/m3/pages/breakpoints) like mobile
2. Text field drop-downs on medium and expanded breakpoints like tablet and desktop

> [imagen] 2 date picker variations: a dialog on mobile and a dropdown within a text field on desktop. — 1. Date picker dialog on mobile; 2. Date picker text field dropdown on desktop

There are three variants of date pickers:

1. Docked date picker
2. Modal date picker
3. Modal date input

> [imagen] A docked date picker component. — 1. Docked date picker

> [imagen] A modal date picker component. — 2. Modal date picker

> [imagen] A modal date input component. — 3. Modal date input

### Anatomy

#### Docked date picker

> [imagen] 7 elements of a docked date picker. — 1. Text field; 2. Menu button; 3. Icon button; 4. Label text; 5. Menu; 6. Text buttons; 7. Container

> [imagen] 3 elements of a docked date picker. — 1. Text field  2. Menu button  3. Menu

#### Modal date picker

> [imagen] 12 elements of a modal date picker. — 1. Headline; 2. Supporting text; 3. Container; 4. Icon button; 5. Previous/next month buttons; 6. Day of week labels; 7. Today’s date; 8. Unselected date; 9. Text buttons; 10. Selected date; 11. Menu button; 12. Divider

> [imagen] 9 elements of a modal date picker. — 1. Headline; 2. Supporting text; 3. Container; 4. Icon button; 5. Unselected year; 6. Selected year; 7. Text buttons; 8. Divider; 9. Menu button

#### Modal date input

> [imagen] 7 elements of a modal date input. — 1. Headline  2. Supporting text 3. Container 4. Icon button 5. Date input 6. Text buttons 7. Divider

#### Full-screen date picker

> [imagen] 14 elements of a full-screen date picker. — 1. Headline 2. Supporting text 3. Icon button 4. Container 5. Text button 6. Icon button 7. Divider 8. Day of week labels 9. Today’s date  10. Selected date range  11. Unselected date  12. Text buttons 13. Selected date range start date  14. Month label

### Docked date picker

#### Usage

Docked date pickers allow the selection of a specific date and year. The docked date picker displays a date input field by default, and a dropdown calendar appears when the user taps on the input field. Either form of date entry can be interacted with. Docked date pickers are ideal for navigating dates in both the near future or past and the distant future or past, as they provide multiple ways to select dates.

> [imagen] Docked date picker on a desktop screen. — Docked date picker on desktop

#### Behavior

Dates can be added by using a keyboard or by navigating the calendar UI; both options are immediately available when the docked date picker is accessed.

> [imagen] Docked date picker with a text field and the UI picker showing the selected date. — Docked date picker

> [vídeo] Animation of a docked date picker adjusting its size to the selected month. — Docked date pickers adjust size dynamically

> [vídeo] Animation of a docked date picker changing from calendar view to year selection menu view. — The year selection menu replaces the calendar view

#### Month selection

Month selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

> [imagen] Docked date picker with a list of months May through September. August is selected. — Docked date picker month selection

#### Year selection

Year selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

> [imagen] Docked date picker with a list of years 2025 to 2029. 2025 is selected. — Docked date picker year selection

### Modal date picker

#### Behavior

Modal date pickers navigate across dates in several ways:

- To navigate across months, swipe horizontally
- To navigate across years, scroll vertically
- To access the year picker, tap the year

Don’t use a modal date picker to prompt for dates in the distant past or future, such as a date of birth. In these cases, use a modal input picker or a docked date picker instead.

> [vídeo] Animation of a docked date picker being swiped horizontally to navigate across months. — To navigate across months, swipe horizontally

> [vídeo] Animation of a year picker in a docked date picker being tapped and scrolled vertically to navigate across years. — To navigate across years, tap the year picker and scroll vertically

#### Date range selection

Date range selection provides a start and end date. Common use cases include:

- Booking a flight
- Reserving a hotel

Modal date pickers navigate across date ranges in several ways:

- To select a range of dates, tap the start and end dates on the calendar
- To navigate across months, scroll vertically

> [vídeo] Animation of a date range being selected on a modal date range picker. — Modal date range picker

> [vídeo] Animation of a modal date range picker being scrolled vertically to navigate across months. — Modal date range picker with vertical scroll

### Modal date input

#### Usage

Modal date inputs allow the manual entry of dates using the numbers on a keyboard. People can input a date or a range of dates in a dialog.

> [imagen] A modal date input component. — Modal date with manual input

> [imagen] A modal date input component showing a day in 1979, which would be difficult to choose using UI. — **DO** For dates that don’t require a calendar view, the modal date input can be the default view

> [imagen] A modal date input with hint text for entering the date. — **DO** Alternatively, a text field with appropriate hint text can prompt for dates, such as in a form

#### Behavior

You can swap between the modal date picker and modal date input using the edit or calendar icon.

> [vídeo] Animation of a modal date picker switching to a modal date input when the range selection icon is tapped. — Switching from a modal date picker to a mobile date input for selecting ranges

> [vídeo] Animation of a modal date picker switching to a modal date input when the edit icon is tapped. — Switching from a modal date picker to a modal date input for selecting a single date

#### Compact breakpoint

On compact [breakpoints](https://m3.material.io/m3/pages/breakpoints/overview), such as mobile, a full-screen modal date picker is recommended to increase readability and touch target size. It can cover the entire screen.

> [imagen] A full-screen view of modal date picker on a mobile device. — A full-screen modal date picker on mobile

#### Medium and expanded breakpoints

The docked date picker works best for medium and expanded breakpoints. It displays a date input field by default, and a dropdown calendar appears when a person taps on the input field. A person can interact with either form of date entry. Docked date pickers are ideal for navigating dates in both the near future or past, and in the distant future or past, as they provide multiple ways to select dates.

> [imagen] A docked date picker displaying a full calendar view on a large screen device. — A docked date picker with a full calendar view is best used on larger devices

#### Selection

Selection is indicated through color, drawing visual attention. In date ranges, start and end dates are selected, while dates in-between appear connected with a subtle highlight.

> [vídeo] Animation of a modal date range picker showing visual differences between selecting a date range and today's date. — Differences between selected the selected date range (August 17–23) and today's date (August 5) are shown through color and fill

#### Appearing and disappearing

Like other kinds of dialogs, modal date pickers use an enter and exit transition pattern to appear on the screen. To exit a date picker, the input can either be confirmed (**OK**) or dismissed (**Cancel**). Interacting outside of the dialog will also dismiss the time picker. Unless one of these actions is taken, a time picker will continue to retain focus. Mobile full-screen pickers also have an additional close affordance (x) icon button and **Save** confirmation. Docked date pickers appear just below the input field.

> [vídeo] Animation of a modal date picker's enter and exit transition. — Modal date pickers can be dismissed through interacting with content outside the dialog, or with the action buttons in the lower right

> [vídeo] Animation of a docked date picker's calendar icon being clicked making the calendar view appear for date selection. — Interacting with the input for a docked date picker makes the calendar view appear below

#### Responsive layout

The sizing of the docked and modal date picker components don’t scale responsively to different breakpoints.

> [imagen] Docked date picker enlarged on a large screen responsively. — **DON'T** Don’t scale the date picker responsively to a larger size

## Accessibility  (https://m3.material.io/components/date-pickers/accessibility)

### Use cases

People should be able to:

- Enter dates manually by inputting text, without using the picker
- Use multiple input methods, making it accessible to those using assistive technology

On the docked date picker, the text field can be used for input. On the modal date picker, the date input option should be available using the edit icon.

### Interaction & style

The edit icon indicates the ability to switch to the modal date input. Interactive targets for all elements meet Material's 48x48dp minimum touch target requirement. Increasing density would negatively impact accessibility by limiting tappable/clickable targets.

> [imagen] Date picker with the edit icon focused. — The edit icon indicates the ability to switch to the modal date input

> [imagen] Touch target used to select September 17 to 23 on a date picker. — Touch targets are 48x48dp

### Date entry methods

The date entry component offers two ways to enter a date:

- Direct text entry into a text field
- Through the date picker

The calendar icon is the exclusive entry point for the date picker. This improves efficiency for a screen reader and other keyboard users, as it makes interaction with the date picker optional and reduces the amount of key presses required to input a date. Each input is a separate tab stop, which improves discoverability of the control.

> [imagen] Text input field next to a date picker icon provides a choice of how to enter the date. — Entering a date either through direct text entry or the date picker

### Accessible date input

Automatically format the date after the user hits “Enter“ or navigates out of the text field. Don't automatically format the date by adding slashes or other special characters while the user is typing (also known as input masks). This can cause confusion for people using screen readers because it changes what they typed.

To reduce errors, accept a range of formats including dashes, spaces, slashes, dots, and 0 to the left of a single digit month/day. This is especially helpful for assistive technology users who might be more prone to errors when interacting with complex inputs.

> [imagen] Numeric entry 08172323 automatically formatted to 08/17/2023. — The text field's logic can adapt to the user's actual input format, applying the correct formatting after the user has completed their text entry

### Optional **Clear** button

If it's not needed for your use case, remove the **Clear** button from the screen to reduce the number of tab stops for keyboard users.

> [imagen] Optional clear button on lower left corner of a date picker. — Remove non-critical actions to reduce the number of tab stops for keyboard users

### Affordance for keyboard shortcuts

Ensure keyboard shortcuts are readily available for keyboard and screen reader users by providing the shortcut key in the tooltip. It should be included in the hint description to be read out by the screen reader. As shown here, the previous year button is interactive and can therefore be focused via the keyboard. Upon focus, the tooltip explains the behavior of the button and shows the shortcut key.

> [imagen] Shift + Page up is the keyboard shortcut to go to the previous year on a date picker. — Keyboard tooltip example for date picker

### Truncated labels & tooltips

Truncating labels isn't ideal, but tooltips allow the full text to be shown on hover or keyboard focus. Days of the week are not interactive and are therefore not focusable via keyboard, yet the tooltip is available on hover. The date picker relies on the conventionality of these abbreviations for some assistive technology users.

> [imagen] A pointer hover over the “T” day on a date picker produces the tooltip “Tuesday.” — Days of the week are not navigable via keyboard, so the tooltip is shown only on pointer hover

### Color contrast between dates

Dates should have contrast of at least 4.5:1 between the link text colors and the background.

> [imagen] A date picker’s label text passes the color contrast minimum of 4.5:1. — Dates pass the 4.5:1 contrast minimum

### Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| Enter/return | Enter/return |
| Enter/return | Closes the calendar and saves the selected date |
| Page up/down | Move to the same date on next/previous month |
| Home/End | Move to the first day of the month |
| Shift + Page up/down | Moves to the same date in the next/previous year |
| Shift + M | Moves to the month list dropdown |
| Shift + Y | Moves to the year list dropdown |

### Labeling elements

The text field's accessibility label should clearly state the purpose of the input (for example, event date or reservation date) and should match the placeholder text when the field is empty. The helper text (below the text field) should specify the date format (for example, MM/DD/YYYY or YYYY/MM/DD) and act as a description for the text field. The default helper text is "MM/DD/YYYY," but this can be customized.

> [imagen] Text field accessibility labels. — The accessibility label clearly states the kind of input as an event date

| **Element** | **A11y label** | **Role** |
| --- | --- | --- |
| Previous / next month and year | “{label}” | Button |
| Month and year dropdowns | “{label}” | Button |
| Days of the week | Column header |  |
| Month grid | Grid |  |

### Screen reader verbalizations

To support screen reader users, labels are used to enumerate the complete date. This allows screen reader users to hear the full context of "Monday, August 17” instead of just part of the date.

> [imagen] Current date label providing day, month, and year for screen reader accessibility. — Screen readers will state the full day, month, date, and year instead of just the number 17
