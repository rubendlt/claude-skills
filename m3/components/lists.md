---
title: "Lists"
source: https://m3.material.io/components/lists
updated: 2026-08-06T17:09:16.197Z
content_version: 2026-11-19_06-20-01
---

# Lists

## Overview  (https://m3.material.io/components/lists/overview)

- Use lists to help people find a specific item and act on it
- Order list items in logical ways, like alphabetical or numerical
- Keep items short and easy to scan
- Show icons, text, and actions in a consistent format
- Choose between standard and segmented styles

> [imagen] 1 list contains 3 items, each with a label text, supporting text, and trailing text. A music app shows list items with leading images. — A list item's label text, supporting text, image, and trailing icon can be customized to create a variety of lists

### Availability & resources

### M3 Expressive update

Lists have a new segmented visual style, improved selection treatment, and support for slots. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

**December 2025**

Variants:

- Added **expressive** list
  - Recommended for new designs
- List (baseline) is still available

New visual styles:

- Standard or segmented
- Highlighted selection states
- Flexible slots

Supported platforms:

- [Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/components/List.md#m3-expressive)
- [Jetpack Compose](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#ListItem%28kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,androidx.compose.material3.ListItemColors,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp%29)

> [imagen] 2 party planning lists with 2 completed list items each. In 1 list, the selected items are highlighted. — Expressive lists feature improved selection states

### Differences from M2 to M3 baseline

- **Color:** New color mappings and compatibility with dynamic color
- **Layout:** Padding and spacing rules are updated to be more consistent
- **Height:** The tallest element within a list item determines the list item’s height - either 56dp, 72dp, or 88dp
- **Alignment:**
  - In most cases, elements in a list item are middle-aligned
  - If a list is 88dp or larger, or contains three or more lines of text, elements are top-aligned

> [imagen] 3 variants of lists in M2. — M2: Non-standard heights and alignments

> [imagen] 3 variants of lists in M3 baseline. — M3 (baseline): Standardized heights and alignments

## Specs  (https://m3.material.io/components/lists/specs)

### Variants

#### Expressive lists

Use the expressive list variant for more flexible styling, highlighted selection states, and customizable slots.

> [imagen] 2 expressive lists: a photos list on a tablet, and a song list on mobile. — An **expressive list** has a segmented style and round corners

#### Baseline lists

Baseline lists are still available to use, but don’t have the latest visual style, selection treatment, and slot functionality. On web, expressive lists are built on top of baseline lists.

[See baseline list specs](https://m3.material.io/m3/pages/lists/specs#94cf7f4d-fe29-4fab-9aae-a99e9b754329)

> [imagen] 3 baseline list items with square corners. — **Baseline list items** have square corners and standard colors

| **Variants** | **M3** | **M3 Expressive** |
| --- | --- | --- |
| Lists (expressive) | -- | Available |
| Lists (baseline) | Available | Not recommended.  Use expressive lists instead. |

### Configurations

#### Styles

The standard and segmented styles are a visual choice, and don’t affect a list’s behavior.

> [imagen] A standard list and segmented list in dark mode. — 1. Standard; 2. Segmented

#### List selection

A list can have only one selection mode at a time. For example, a single-action list can change to a multi-select list, but can’t be both at once.

> [imagen] A single-action list with 4 items and no additional actions. — In a **single-action list**, each item is a single tappable area

> [imagen] A list with 4 items. Each item has 2 trailing icons for additional actions. — **Multi-action list** items include a primary action, and one or more secondary actions

> [imagen] A list with 1 item selected. — A **single-select list**

> [imagen] A list with 2 items selected. — A **multi-select list**

#### List interactions

Lists can:

- [Expand and collapse](https://m3.material.io/m3/pages/lists/guidelines#90a236ee-b587-4361-8911-34006f25a6f1)
- [Swipe to reveal](https://m3.material.io/m3/pages/lists/guidelines#01204f7d-ce32-4739-aece-e95db24858c9)*

[More on list interaction accessibility](https://m3.material.io/m3/pages/lists/accessibility#a6f937f5-3e1f-4db4-ba35-ac6dd9fef140)

> [vídeo] 1 list item expands into a list with 6 items, then collapses. — A list can **expand** to include multiple items

> [imagen] A list item is swiped, and reveals 3 more actions. — A list item can be **swiped** to reveal more actions

| **Category** | **Configuration** | **M3** | **M3 Expressive** |
| --- | --- | --- | --- |
| Styles | Standard | Available | Available |
| Segmented | -- | Available |  |
| Selection modes | Single-action, multi-action,single-select, multi-select | Available | Available |
| Interactions | Expand, swipe* | Available | Available |

* Swipe-to-reveal interactions are only available on Android Views

### Tokens & specs

Use the table's menu to select a token set. The **common** set combines baseline tokens with new expressive shapes and sizes. The **expand** set has tokens for the expand interaction. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Anatomy

> [imagen] Diagram with 10 elements that can be included in lists. — Container and label text are required. All other elements are optional:; 1. Container; 2. Overline; 3. Label text; 4. Trailing text; 5. Supporting text; 6. Trailing icon; 7. Divider; 8. Leading avatar; 9. Leading icon; 10. Leading media - image or video

#### Flexibility & slots

The [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) includes lists with custom slots for designing flexible item layouts. Think of a custom list as a container with three different slots: leading, content, and trailing. Each slot can hold a different element.

##### **Slot accessibility**

Slots are not accessible by default. Consider the following:

- Elements must follow the rules, structure, and interaction patterns for lists
- Use standard list item padding
- Target size must be at least 48x48dp
- Don't add interactive elements that make the list item difficult to navigate, especially for people using screen readers

[More on required accessibility guidelines](https://m3.material.io/m3/pages/lists/accessibility#538f23f7-689c-4516-bfc8-5f6933a43f5e)

> [imagen] A diagram with leading, content, and trailing slots. — **CAUTION** Reserve the use of slots for use cases that maintain the list’s accessibility and functionality; 1. Leading slot; 2. Content slot; 3. Trailing slot

warningCaution:Slots require custom code implementation that you must create and maintain

The **leading** and **trailing** slot positions must be a smaller width than the **content** section.

1. **Leading slots** can contain:

- Visual elements: Avatar, icon, image, or video thumbnail
- Selection controls: Checkbox, radio button, or switch
- Customizations: Badge or larger image

2. **Content slots** must be the largest-width slot and can contain:

- Default content: Label text, supporting text
- Optional add-ons: Badge, icon, in-line label, or more text elements
- Avoid long lines of text to preserve readability

3. **Trailing slots** can contain:

- Action elements or text: Icon, icon button, or trailing text
- Selection controls: Checkbox, radio button, or switch

> [imagen] Slot diagram showing slot placement in the middle of the list. — The content slot must be the largest section, placed in the middle of the list item

##### Selection lists

For selection lists, use only one selection interaction per list item.

> [imagen] A selected list item with a checkmark in the leading slot. — **DO** Use only one selection interaction per list item

> [imagen] A selected list item with both a checkmark in the leading slot and a bookmark in the trailing slot. — **DON'T** Don't use multiple selection interactions in one item

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

> [imagen] 10 list element color roles in light mode and dark mode. — List color roles used for light and dark themes:; 1. Surface; 2. On surface variant; 3. On surface; 4. On surface variant; 5. On surface variant; 6. On surface variant; 7. Outline variant; 8. Primary container; 9. On primary container; 10. On surface variant

### States

States are visual representations used to communicate the status of a component or an interactive element. [Learn more about interaction states](https://m3.material.io/google-material-3/pages/interaction-states/overview)[More on list focus](https://m3.material.io/m3/pages/lists/accessibility#f7e067e1-722f-40c5-a95a-63929869bf3e)

#### Default list items

> [imagen] 6 default list states in light and dark mode. — 1. Enabled; 2. Disabled; 3. Hovered; 4. Focused; 5. Pressed; 6. Dragged

#### Selected list items

> [imagen] 6 selected list states in light and dark mode. — 1. Enabled; 2. Disabled; 3. Hovered; 4. Focused; 5. Pressed; 6. Dragged

### Measurements

> [imagen] Size and padding measurements for list items. — List item alignment, padding, and size measurements. The icon button height is dynamic, and automatically adjusts to fill the list item height.

#### Shape morphing

When a list item is selected, the corner shape changes to highlight the active item:

- Unselected corner radius: 4dp inner, 16dp outer
- Selected corner radius: 16dp

> [imagen] A 3-item list. The middle item is unselected, with a 4dp corner radius. — Unselected list items have a 4dp inner corner radius, and 16dp outer corner radius

> [imagen] A 3-item list. The middle item is selected, with a 16dp corner radius. — Selected list items have a 16dp corner radius all around

### List (baseline)

The baseline list variant is available and continues to work in existing products. However, the [expressive list](https://m3.material.io/m3/pages/lists/specs#ebf87f58-d5bf-4cb5-a856-d2bb104eec4d) variant is recommended for new designs.

#### Tokens & specs

Baseline list tokens are in the **common** token set. Note: This set also includes several expressive tokens.

#### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

> [imagen] 9 baseline list element color roles in light and dark mode. — List color roles used for light and dark themes:; 1. Surface; 2. On surface; 3. On surface variant; 4. On surface variant; 5. On surface variant; 6. Outline variant; 7. Primary container; 8. On primary container; 9. On surface variant

#### States

States are visual representations used to communicate the status of a component or interactive element.

> [imagen] 6 baseline list states in light and dark mode. — 1. Enabled; 2. Disabled; 3. Hovered; 4. Focused; 5. Pressed; 6. Dragged

#### Layout

##### One-line lists

> [imagen] Alignment, padding, and size specifications for baseline list items with 1 line of text. — Baseline one-line list alignment, padding, and size measurements

> [imagen] Measurements for a 3-item list with 1 line each. — Baseline list item measurements and padding

##### Two-line lists

> [imagen] Alignment, padding, and size specifications for baseline list items with 2 lines of text. — Baseline two-line list alignment, padding, and size measurements

> [imagen] Measurements for a 3-item list with 2 lines each. — Baseline list item measurements and padding

##### Three-line lists

> [imagen] Alignment, padding, and size specifications for baseline list items with 3 lines of text. — Baseline three-line list alignment, padding, and size measurements

> [imagen] Measurements for a 3-item list with 3 lines each. — Baseline list item measurements and padding

| Attribute | Value |
| --- | --- |
| Label alignment | Center |
| Label alignment when height is 88dp or taller | Top |
| Label left padding | 16dp |
| Leading element alignment (vertical) | Center |
| Leading element alignment (vertical) when height is 88dp or taller | Top |
| Leading element left padding | 16dp |
| Leading icon alignment (vertical) | Top |
| Leading icon top padding | 8dp |
| Leading icon top padding when height is 88dp or taller | 12dp |
| Trailing element alignment (vertical) | Center |
| Trailing element alignment (vertical) when height is 88dp or taller | Top |
| Trailing element left padding | 16dp |
| Trailing element right padding | 24dp |
| Padding above/below divider | 0dp |
| Targets | 48dp |
| Divider full-width | 100% |
| Divider inset left padding | 16dp |
| Divider inset right padding | 24dp |

#### Configurations

##### Leading avatar

> [imagen] 1, 2, and 3-line list items with and without a leading avatar and trailing checkbox, in dark mode. — 1. With leading avatar; 2. With leading avatar and trailing checkbox

##### Leading image or thumbnail

> [imagen] 1, 2, and 3-line list items with and without a leading image and trailing checkbox, in dark mode. — 1. With leading image; 2. With leading image and trailing checkbox

##### Leading video

> [imagen] 1, 2, and 3-line list items with and without a leading video and trailing checkbox, in dark mode. — 1. With leading video; 2. With leading video and trailing checkbox

##### Leading icon

> [imagen] 1, 2, and 3-line list items with and without a leading icon and trailing checkbox, in dark mode. — 1. With leading icon; 2. With leading icon and trailing checkbox

##### Text-only

> [imagen] 1, 2, and 3-line text only list items with and without a trailing checkbox, in dark mode. — 1. With text only; 2. With text and trailing checkbox

##### Leading checkbox

> [imagen] 1, 2, and 3-line list items with and without a leading checkbox and trailing text, in dark mode. — 1. With leading checkbox; 2. With leading checkbox and trailing text

##### Leading radio button

> [imagen] 1, 2, and 3-line list items with and without a leading radio button and trailing text, in dark mode. — 1. With leading radio button; 2. With leading radio button and trailing text

##### Trailing switch

> [imagen] 1, 2, and 3-line list items with and without a leading icon and trailing switch, in dark mode. — 1. With trailing switch; 2. With leading icon and trailing switch

## Guidelines  (https://m3.material.io/components/lists/guidelines)

> [imagen] 3 list items show different layout options, with varying sizes of elements in the leading slot. — Lists can include a range of layout combinations:; 1. Leading images, videos, icons, or avatars; 2. Trailing text, icons, or icon buttons

### Usage

Lists are vertical groups of text, icons, images, and other elements, optimized for reading comprehension.

List items can contain multiple actions at once, like selection, icon buttons, overflow menus, and more.

> [imagen] 3 list items with avatars using different expressive shapes. — A clear visual hierarchy makes lists easy to scan and read

Use lists for communicating or selecting discrete items, such as choosing from a set of colors.

> [imagen] A list of colors with Periwinkle selected. — Lists are an organized way to add imagery and supporting elements to selection. In this color selection example, the list contains color swatches, color names, and a checkbox action.

A list should be easy to scan. Any element can be used to anchor and align list item content.

Place supporting visuals and primary text in the same position in each list item.

Don’t vary the position of elements within a list.

> [imagen] 4 versions of the same list highlighting avatar and text alignment. — 1. Sample list; 2. Content placement in a row; 3. Supporting visuals are aligned for easy scanning; 4. Primary text is aligned for easy scanning

List items can adapt to different lengths of text:

**Label text only**A list item can contain a single line of label text. If the text doesn’t fit on one line, it can wrap or be truncated.

**Label text with supporting text**A list item can include supporting text below the label text. Both the label and supporting text can wrap or be truncated.

> [imagen] 3 lists show items with label text only, label text with 1-line of supporting text, and label text with 2-lines of supporting text. — Three examples of list item sizes:; 1. Label text only; 2. Label text with supporting text on one line; 3. Label text with supporting text that wraps to two lines

### Anatomy

> [imagen] List diagram with 10 elements. — Container and label text are required. All other elements are optional:; 1. Container; 2. Label text; 3. Supporting text; 4. Trailing text; 5. Trailing icon; 6. Trailing selection control - checkbox, radio button, switch; 7. Leading avatar container; 8. Leading avatar text; 9. Leading icon; 10. Leading media - image or video

#### Container

List containers hold all list items and their elements. List item size is determined by the tallest element within the list item. [See layout measurements](https://m3.material.io/m3/pages/lists/specs#1824b94d-7d17-4a29-889f-d277037a1313)

When a list item features an image, consider customizing the container color to use a content-based color scheme. This should be applied to either the enabled state or for an interaction.

> [vídeo] A song list with a leading images. When selected, a list item’s container matches the image’s color scheme. — A list item can include a leading image and a vibrant color

#### Label & supporting text

Keep label text brief.    To ensure list items are scannable:

- Limit supporting text to one to three lines
- Truncate supporting text, depending on screen size

[See adaptive guidance](https://m3.material.io/m3/pages/lists/guidelines#561cc637-aa43-4055-be1e-0716faeef7af)

> [imagen] A list item with a leading image, concise label text “Art events”, and 2 lines of truncated supporting text. — Limit supporting text to one to three lines

#### Icons

**Leading icon** A leading icon should provide a quick visual cue that relates to the item's label text, helping people scan the list.

**Trailing icon** A trailing icon is often used to communicate status or indicate an action, like **Show more**.

> [imagen] Leading icons should relate to the label text 
A list of items with leading and trailing icons on a mobile device. — 1. Leading icons should relate to the label text; 2. Trailing icons can communicate an action

#### Leading media

List items can contain a leading avatar, image, or video. Anchor visuals to the leading edge of the list to improve scannability.

Leading video thumbnails can open a video player or even play within the list.

> [imagen] A list of plants with images at leading edge. — **DO** Place supporting visuals, like thumbnails, at the leading edge of a row to improve scannability

> [imagen] A list of plants with an image in the middle of the row makes it difficult to align the name and price. — **CAUTION** Avoid placing visuals in the center of a row because it makes the list difficult to scan

##### Avatars

List items can include images in circular or expressive shapes to represent a person or entity.

Use square or rectangular images for other content, such as products or videos.

> [imagen] List of contacts with avatars with a circular, expressive crop to indicate a person. — Use an expressive, circular avatar to represent a person or entity

##### Primary & secondary actions

Use spacing to draw attention to the most important aspect of the list item, usually the primary action area or key content.

> [imagen] A folder icon in the primary action area takes up the full height of the list item. — The primary action takes up more space:; 1. Primary action area; 2. Secondary action area

> [imagen] A list item has an avatar in the more distinguishing content position on the left, and “15 min” trailing text on the right. — Align content by importance:; 1. More distinguishing content; 2. Less distinguishing content

#### Trailing text

Trailing text can provide additional meta-information about a list item, such as a price, count, or other details.

> [imagen] The date “Nov 17” as trailing text in a concert ticket list item. — Use trailing text for supplemental details, like a price, count, or date

#### Selection controls

Selection controls display list item actions. Position controls at the leading or trailing end of a list item:

- Use checkboxes to select multiple items
- Use switches to toggle settings on or off
- Use radio buttons to select a single item

> [imagen] 3 lists with different selection controls. — List items with:; 1. Checkboxes; 2. Switches; 3. Radio buttons

#### Gaps & dividers

Gaps or dividers can separate lists into items and groups:

- Use **gaps** for contained lists. Gaps leverage expressive shape and containment tactics.
- Limit **dividers** to uncontained or complex lists, only when a stronger visual separation is necessary.

> [imagen] Filled list items in an inbox separated by gaps. — **DO** Use **segmented gaps** and filled list items to define a list group

> [imagen] An uncontained list with city names separated by dividers. — **CAUTION** Limit the use of **dividers** to uncontained lists

### Adaptive design

#### Line length

In fluid layouts, avoid excessively long lines of text when expanding containers and text-heavy components. This often means changing margins and typography properties as the container scales.

> [imagen] 4 list items with 2-line supporting text have adjusted margins to preserve readability. — **DO** Adjust margins to create a more comfortable line length for reading

Adapt the width of the list container based on a line’s length, or by switching to a multi-column layout.

> [imagen] List items in a 2-column layout, with each item showing text preview. — **DO** A multi-column layout can help break up content when needed

The ideal line length for text is typically between 40 to 60 characters, but large-screen devices can accommodate up to 120 characters per line. If a line of text is close to 120 characters in length, consider increasing the line height to improve readability .

> [imagen] List items with elongated line length. — **DON'T** Don’t scale components without adjusting other affected areas of the screen, such as text length. This can result in line lengths that make reading difficult.

A list with a compact breakpoint can become part of a two-column layout at an expanded breakpoint, adjusting the amount of information shown in each list item.

> [vídeo] Animation of a list on mobile and the same list adapted into a 2-column layout on desktop. — Reduce the amount of information shown at compact breakpoints

#### Adapt list elements & layout

Lists can change their layout to adapt to different breakpoints. This affects the size and placement of content.

For example, a list at a compact breakpoint can adjust margins, spacing, or density to better fit an expanded window.

> [vídeo] Photo list on mobile expands to allow larger images and longer descriptions on a tablet. — On larger screens, lists can show more content, like supporting text and larger imagery

#### Swap components

Lists are just a compact composition of images, text, and actions. Other components, like cards and carousels, use the same elements but take up more space.

At larger breakpoints, consider swapping a list to a component with a similar purpose to take advantage of available space.

> [vídeo] A mobile photo list changes into cards in a larger window. — Information displayed in list items on mobile can change to cards on tablet and desktop

#### Compact breakpoints

Lists should extend edge-to-edge in compact windows. Selecting a list item should open a page with the details.

> [vídeo] When opened, a mobile photo list item expands to fill the width of the screen. — On small screens, people can navigate between lists and full-screen detailed views

#### Medium & expanded breakpoints

Medium and expanded breakpoints, such as tablet and desktop screens, can display primary and secondary content in the same view.

For example, a list and the detailed information can appear side-by-side.

> [imagen] A larger screen displays list items and a detailed expansion of one item on the same screen. — On larger screens, a list-detail view can be more appropriate

At a larger breakpoint, a list may transform into a carousel.

> [vídeo] A photo list with thumbnails in a compact window expands into a carousel with large images in an expanded window. — Lists can transform into carousels in expanded windows

Lists can also show more or less content as they scale up and down in size.

For example, a list item can reveal more content when the component expands.

> [vídeo] A list expands from a compact to a medium window. The expanded items show supporting text. — List items reveal supporting text at expanded breakpoints

### Behavior

#### List selection modes

The selected state applies to the entire list item. For example, when an item with a checkbox is selected, both the list item and the checkbox show a selected state.

##### Single-select

Lists can feature a single-selection component such as a radio button.

Single-select list items:

- Don’t support multi-actions
- Can’t have secondary nested actions
- Shouldn’t use checkboxes

> [imagen] A 3-item list with radio buttons, with 1 item selected. — Use radio buttons to allow a single selection in a list

##### Multi-select

Multi-select lists allow for multiple list items to be toggled on.

Multi-select list items:

- Pair well with checkboxes and switches
- Can’t have secondary nested actions
- Shouldn’t use radio buttons

> [imagen] A 3-item list with checkboxes and 2 items selected. — Use checkboxes or switches for multi-select lists

##### Single-action

In a single-action list, the entire list item performs one action, such as navigating to a new page.

Single-action list items:

- Can’t have secondary nested actions
- Can’t be toggled into a persistent selected state

> [imagen] A 3-item list where each item is a single tappable area. — Use a single-action list for a primary action, like navigation

##### Multi-action

Multi-action lists can support multiple nested actions within a list item.

The primary action should take up the majority of the space in the leading and content positions.

Place supplementary actions, like a bookmark or menu, in the trailing position.

[More on multi-action accessibility](https://m3.material.io/m3/pages/lists/accessibility#b69b89a9-7ca0-4249-b25b-2d0c85a41dc0)

> [imagen] A 3-item song list where each item has 2 trailing icons: a bookmark and overflow menu. — Place supplementary actions in the trailing position of a list item

##### Non-interactive

Non-interactive lists can organize information in a scannable way. They don’t perform any actions and can’t be selected.

> [imagen] A 3-item non-interactive list showing a historic timeline of space travel. — Use non-interactive lists to make information easy to scan

#### List interactions

##### Expand & collapse

List items containing other list items can expand and collapse in a folder-like manner, to reveal or hide content.

Tapping a list item expands it vertically across the entire screen using a container transform transition pattern.

> [vídeo] On a to do list, an item expands, revealing nested child items. — To expand a list item, display a parent-child transition

##### Swipe

On Android, list items can reveal buttons on swipe. Use a mix of button styles for visual interest and hierarchy.

The primary action must be the final end-aligned option. A full swipe triggers this action, clearing the list item and all other actions off-screen.

Swipeable list items should include alternative ways to access hidden actions, such as a more icon.

[More on swipe accessibility](https://m3.material.io/m3/pages/lists/accessibility#32f5115c-b15e-4af6-8c1a-4807bee2bf7a)

> [imagen] List of recipes with “Fresh baked breads” swiped to reveal a archive icon. — When a list item is swiped, it can be archived or reveal more actions

## Accessibility  (https://m3.material.io/components/lists/accessibility)

### Use cases

People should be able to do the following with assistive technology:

- Navigate to a list item
- Select a list item

### Indicate selection with more than color

To make selected items clear for everyone, don't rely on color as the only visual cue.

Use an additional indicator that an item is selected such as:

- Radio buttons or checkboxes
- Leading or trailing icons
- A visual style not related to color, like underlined text

> [imagen] A selected list item with a colored background, and a check as the leading icon. — Use two visual cues to show a list item is selected, like a leading checkmark and filled color

### Interaction & style

#### Touch

When a person taps on a list item, a touch ripple appears, indicating interaction feedback.

> [vídeo] A 3-item list shows a touch ripple animation as the second item is tapped and selected. — A ripple appears when a person taps on a list item to select it

#### Cursor

When hovered, the hover state provides a visual cue that a list item is interactive.

> [imagen] A list with the second item visually altered while hovered over, with a cursor and darker fill. — Cursor: Hover

> [imagen] Selected list item with cursor, colored fill, and checked box. — Cursor: Selected

#### Keyboard & switch

When a person tabs to a single-action list, a focus indicator appears, providing a visual cue that the first list item is now focused and action can be taken.

When a person interacts with the focused list item via **Space** or **Enter**, the action is performed.

> [vídeo] A focus indicator appears on the first item of a 3-item list, which is then selected. — **Tab** key navigates to the list. **Space** or **Enter** keys activate items.

#### Swipe

List items that can be swiped should include alternative ways to access hidden actions, such as a **more** icon.    Swipe alternatives can be:

- Single tap
- Double tap
- Long press
- Other single-point interactions

> [imagen] A list item has a “more” button selected to reveal additional actions. — List items can reveal more actions from swiping or using an accessible secondary action such as a double tap

### Focus

#### Single-action lists

The first element in a list should always receive focus, unless the list has a selected element. In that case, focus should go to the selected list item instead. After an element is focused, a person should be able to navigate within the list using arrow keys.

> [imagen] The first list item is automatically focused. — **Tab**key focuses on the first item or the selected item

> [imagen] A second list item focused using an arrow key. — **Arrow**keys navigate up and down through list items

All list items must be able to be activated using the **Space** or **Enter** key.   [More on single-action lists](https://m3.material.io/m3/pages/lists/guidelines#3e45f939-457a-44a8-8551-a2354c521d26)

> [imagen] List item with focus indicator and filled checkbox, selected using the Space or Enter key. — **Space** or **Enter** keys activate an element in a list

#### Multi-action lists

Multi-action list items contain a primary action and at least one supplementary action.   The list item as a whole isn't selectable; only the individual actions are.

A person should be able to use a keyboard to:

- **Tab** to the list item, which focuses the first element
- Move between between all focusable elements in the list using the **Up**, **Down**, **Left**, and **Right** arrow keys
- Activate a focused element using **Space** or **Enter**

[More on multi-action lists](https://m3.material.io/m3/pages/lists/guidelines#db85439b-0e67-43b0-a2dc-61395738af64)

> [imagen] The first element in a multi-action list is focused automatically. — **Tab** brings the focus to the first action

> [imagen] The list action, a bookmark, is focused using the Down or Right arrow. — **Down** and **Right** arrow keys move focus to the next action of the list item, or to the first action in the next item

> [imagen] A trailing bookmark icon is focused in the second list item. — **Up** and **Left** arrow keys move focus to the previous action of the list item

> [imagen] Label text and supporting text of the second list item is in focus using the Up or Left arrow. — If the focus is on a list item’s first action, the **Up** and **Left** arrows move focus back to the last action of the previous item

> [imagen] The Space or Enter key activates an overflow menu on a list item. — The **Space** or **Enter** key activates a selected action in a list

### Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** | To move focus to the first list item, last list item, or outside of the list component |
| Down and right arrow keys | Moves to the next element in the list; if the focused element is the last in the list, it wraps back to the top of the list |
| Up and left arrow keys | Moves to the previous element in the list; if the focused element is the first in the list, it wraps back to the bottom of the list |
| **Space** or **Enter** | To select a list item not yet selected |

### Labeling elements

Accessibility labels are used with assistive devices like screen readers.

The accessibility label for a list item is typically the same as the **label text** and **supporting text**.

Some labels, roles, and states are [dependent on platform](https://m3.material.io/m3/pages/lists/accessibility#09e32b7d-78a1-45c1-be12-4c6646cfe1d1).

> [imagen] List item selected to show label of “Bread, sourdough or wheat”. — A list item’s **label text** and **supporting text** is used for its accessibility label

#### Platform-specific labels

##### Single-select lists

| **Trait** | **Web** | **Android Views (MDC-Android)** | **Jetpack Compose** |
| --- | --- | --- | --- |
| Aria label | Container label: Should describe selection typeList item: Should match the visible label text | List item: Should match the visible label text | List item: Should match the visible label text |
| Role | Container: List box  List item: Option | List item: Radio button | List item: Radio button |
| State | Selected or Not-selected | Checked or Not-checked | Checked or Not-checked |

##### Multi-select lists

| **Trait** | **Web** | **Android Views (MDC-Android)** | **Jetpack Compose** |
| --- | --- | --- | --- |
| Aria label | Container label: Should describe selection typeList item: Should match the visible label text | List item: Should match the visible label text | List item: Should match the visible label text |
| Role | Container: List box  List item: Option | List item: Checkbox | List item: Checkbox |
| State | Selected or Not-selected | Checked or Not-checked | Checked or Not-checked |

On web, a list container’s accessibility label describes the type of selection that can be made, and the role is **List box**.

> [imagen] A list container is selected, showing a label of “Select either bread, pita, or rice” and role of “List box.” — On web, a list container’s role is **List box**

On Jetpack Compose, the role applies to the list item as a whole.

If a list isn't selectable, the label text is read out without a role.

> [imagen] A selected list item shows a label of “Bread, sourdough, or wheat” and role of “Checkbox.” — When selectable, the role **Checkbox**applies to the entire list item on Jetpack Compose

On Android Views (MDC-Android), components contained within the list should be labeled according to that component’s specific guidelines:

- [Checkbox](https://m3.material.io/m3/pages/checkbox/accessibility)
- [Radio button](https://m3.material.io/m3/pages/radio-button/accessibility)

> [imagen] Checkbox of a selected list item shows label of “Bread, sourdough or wheat” and role of “Checkbox.” — On Android Views (MDC-Android), the accessibility label and role are applied to the interactive component by default
