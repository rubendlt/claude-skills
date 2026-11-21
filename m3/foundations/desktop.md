---
title: "Desktop"
source: https://m3.material.io/foundations/desktop
updated: 2026-11-16T07:30:09.666Z
content_version: 2026-11-19_06-20-01
---

# Desktop

Create desktop experiences with adaptive layouts and multiple inputs

## Overview  (https://m3.material.io/foundations/desktop/overview)

- People can use any Android app in a desktop environment by opening it on a Chromebook or Googlebook, docking a tablet to a folio, or connecting a phone to an external monitor
- Design apps so they’re easy to use on desktop, rather than feeling like a stretched mobile app
- Take advantage of the expanded space and longer viewing distances, and consider denser layouts that show more information at once
- Use adaptive [components](https://m3.material.io/m3/pages/desktop/components) and [layouts](https://m3.material.io/m3/pages/layout-overview/adaptive-design) so apps scale smoothly across breakpoints
- Support external devices for efficient navigation across every input type, including mice, trackpads, and physical keyboards

### Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) (Figma) | Available |
| [Android design guidelines](https://developer.android.com/design/ui/desktop) | Available |  |
| [Material layout guidelines](https://m3.material.io/m3/pages/layout-overview/overview) | Available |  |
| Implementation | [Android large screen dev docs](https://developer.android.com/guide/topics/large-screens) | Available |
| [Jetpack Compose](https://developer.android.com/jetpack/androidx/releases/compose-material3) | Available |  |
| [Android media query API](https://developer.android.com/develop/adaptive-apps/guides/mediaquery) | Available |  |

### Design principles

#### Adaptive from the start

Adapting an app to the desktop experience shouldn’t be an afterthought. Design an app's layout and information hierarchy in a flexible and modular way, so it can seamlessly adapt from mobile to a larger screen.

[More on adaptive design](https://m3.material.io/m3/pages/layout-overview/adaptive-design)

> [imagen] 4 devices: tablet, mobile, laptop, and desktop. — Design layouts to adapt seamlessly from mobile to expanded windows

#### More screen, more done

Use the expanded window to show more information in a denser layout. Don’t simply scale elements to fill empty space. [More on desktop layouts](https://m3.material.io/m3/pages/desktop/layout)

> [imagen] Desktop document editor showing full-page text beside an open comments side panel in a single expanded window. — On desktop, use dense layouts to take advantage of the large screen

#### Refine the motion

Desktop transitions can be faster with small elements and short distances because the screen is unobstructed. When moving large elements across long distances, slow down or simplify transitions to prevent visual overwhelm.

> [vídeo] In mobile and desktop email views, a navigation rail collapses and expands at different speeds. — Motion duration should adjust based on distance and element size

#### Multitasking at the core

People expect to work on more than one thing at a time on desktop. While the multi-window OS supports working across apps, allow people to multitask within an app too.

> [imagen] Overlapping desktop windows showing a multi-pane email app and a video playing in the left corner. — In-app panels and multi-window views support concurrent workflows

#### Balance efficiency with simplicity

While mobile design focuses on simplicity, people expect to accomplish more in fewer steps on desktop.

Balance shorter task flows with clear layouts to avoid overwhelming people with information.

> [imagen] Desktop photo app with a collapsed navigation rail,  organized multi-column image grid in the primary pane, and item details in a supporting pane. — Desktop workflows should balance density with visual clarity

#### All input types are equally important

People frequently switch between touch, pointer, and physical keyboard inputs while on desktop. Support pointer and keyboard interactions to ensure efficient navigation across every input type. [More on desktop interactions](https://m3.material.io/m3/pages/desktop/interaction)

> [imagen] 3 inputs: hands using touch on a screen, typing on a physical keyboard, and controlling a mouse. — Support all input types, including touch, keyboard, and pointer

## Layout  (https://m3.material.io/foundations/desktop/layout)

### Adaptive desktop layouts

Desktop apps typically open at medium or large breakpoints and can expand to extra-large. The quality bar is higher because of the larger window sizes and people’s expectation for greater information density. Make sure the app makes good use of the expanded space. Use these guidelines to scale a mobile app to a desktop layout.

#### Use adaptive pane layouts

Consider using multi-column or multi-pane layouts for medium, large, and extra-large breakpoints to show more content at once.

If keeping a single pane on desktop, cap and center the content width to avoid looking like a stretched phone UI.

[More on pane layouts](https://m3.material.io/m3/pages/scaffold/panes)

> [imagen] A mobile app shown on desktop is capped and centered on the screen. — Cap and center content in single-pane layouts to avoid stretched views

#### Consider navigation & usability

Start with Material canonical layouts to automatically adapt mobile layouts to fill the available space on desktop. These make app navigation simple and predictable:

- [Feed](https://m3.material.io/m3/pages/canonical-examples/feed): For long scrolling pages of content
- [List-detail](https://m3.material.io/m3/pages/canonical-examples/list-detail): For selecting and opening an item, like chat or email
- [Supporting pane](https://m3.material.io/m3/pages/canonical-examples/supporting-pane): For showing additional tools or supporting information

[More canonical layout examples](https://m3.material.io/m3/pages/canonical-examples/overview)

> [imagen] A desktop app has an expanded navigation rail and a supporting pane with a list of “Lessons in this course.” — Add columns or panes to support faster navigation and richer workflows

#### Adapt components

Material components can adapt their layout across breakpoints to optimize space and support mouse and keyboard inputs.

For example, at medium and larger breakpoints, changing the navigation bar to a navigation rail gives more vertical space to the content.

[More on adapting components for desktop](https://m3.material.io/m3/pages/desktop/components)

> [imagen] A clock timer mobile UI has a navigation bar which switches to a navigation rail on a tablet. — A navigation bar on mobile should adapt to a navigation rail in larger windows

## Components  (https://m3.material.io/foundations/desktop/components)

### Adapt components for desktop experiences

Components like navigation rails, menus, side sheets, dialogs, and carousels are optimized for larger screens and desktop inputs.

#### Don’t overstretch components

While full-width buttons and text fields work well on mobile, they can feel imprecise on large screens. On desktop, maintain default component widths and padding, and don’t stretch these components to fill the pane.

#### Use navigation rails

If a mobile app uses a navigation bar, switch to a navigation rail at medium breakpoints and above.

At extra-large breakpoints, consider expanding the navigation rail by default to improve label readability.

> [vídeo] A collapsed navigation rail in a clock app expands and shows more menu items. — Use navigation rails at medium breakpoints and above, and consider expanding them by default at extra-large breakpoints

#### Replace bottom sheets

On mobile, bottom sheets are easy to reach, and their attachment to the device edge and scrim creates an immersive view.

However, on desktop, bottom sheets often require excessive cursor travel and can obstruct primary content. For an improved desktop experience, consider replacing bottom sheets with:

- Context menus
- Side sheets
- Dialogs

If using a bottom sheet on desktop, it must be detached from the bottom edge of the window.

> [imagen] Mobile map UI with a bottom sheet anchored to the bottom edge with 6 actions. — Bottom sheets provide an easy-to-reach view on mobile devices

##### Context menus

Use right-click context menus when replacing bottom sheets triggered by press-and-hold or overflow actions on mobile.

> [imagen] Satellite map on desktop with a context menu with 5 actions next to a pointer cursor. — Replace press-and-hold bottom sheets with right-click context menus on desktop

##### Side sheets

Use a side sheet with no scrim to show complex tools or configuration panels on desktop without obstructing the main content.

> [imagen] Satellite map on desktop with a side sheet with 6 location options. — On desktop, use side sheets to display tools or configuration panels alongside the main content

##### Dialogs

Use a dialog when replacing modal bottom sheets that require a decision, since attention on desktop is focused higher on the screen.

> [imagen] Satellite map on desktop with a centered dialog displaying pin coordinates and 2 action buttons. — On desktop, use a dialog to keep important decisions in the person's line of sight

#### Ensure carousels work with desktop inputs

For better cursor and keyboard interaction control, carousels can display direct targets for navigation when hovered. Only hero carousels have built-in next and previous actions. If adding these buttons to other carousels, they should appear when the carousel is hovered or focused. Consider adding a **Show all** button near the carousel to give people a persistent way to view all items.

> [vídeo] Photo carousel on desktop that scrolls horizontally. When a pointer hovers on it, previous and next buttons appear at the leading and trailing edges. — When hovered, a multi-browse carousel can show next and previous buttons

Hero and full-screen carousels can also include pagination dots for quicker navigation.

> [imagen] Photo carousel on desktop with a hero-centered item and dot pagination showing 5 total items. — A hero-centered carousel can show dot pagination

##### Scrolling carousels on desktop

People can use a mouse wheel to scroll vertical hero carousels, or hold **Shift** to scroll horizontal carousels. On touchpad, people can scroll using a two-finger swipe. A single-pointer alternative is also required.

## Interaction  (https://m3.material.io/foundations/desktop/interaction)

### Support desktop interactions & inputs

People navigate desktop apps using touch, pointer devices, and physical keyboards. To make sure interactions like drag and drop, zoom, and refresh work across inputs:

- Provide single-click controls
- Support keyboard shortcuts
- Show clear hover and focus states

### Drag & drop

Drag and drop allows people to quickly move or copy files, text, cards, list items, or input chips.

#### Provide clear visual feedback

Use Material states to give clear feedback throughout a drag-and-drop interaction:

- When dragging starts, apply the dragged state and elevation to create depth and focus
- Make the dragged item translucent so drop targets are visible beneath it
- Highlight valid drop targets with a border or insertion point when an item hovers above them

All drag-and-drop actions should include a single-click alternative, like a + icon button that opens a menu to upload an image without dragging.

> [imagen] Laptop with photo and chat apps open. A hand cursor drags a semi-transparent photo tile into the chat attachment field. — Represent dragged items with translucent images to keep drop targets visible

#### Show clear error states

Display a prohibitive cursor symbol when hovering over invalid drop targets.

If an item is dropped where the action can't be completed, it should return to its original location or visually dissolve.

> [imagen] A cursor with a red blocked badge drags a photo tile over a read-only pane in a desktop photo app. — Display a prohibitive cursor symbol over invalid drop targets

#### Make pointer dragging instant

Pointer dragging should be instantaneous, unlike touch interactions that often require a long press.

> [vídeo] On a laptop, a clock app time is dragged and dropped instantly into a new location, compared to a long press on mobile. — Pointer drag interactions should be performed instantly

### Zooming & panning

Support zooming and panning across pointer, keyboard, and touch inputs so people can efficiently navigate large-scale content.

#### Provide multiple ways to zoom

On desktop, people should be able to zoom with keyboard shortcuts, scroll actions, and touch gestures:

- Zoom-first content: Scroll to zoom in and out on a map
- Pan-first content: Hold **Control** or **Cmd** while scrolling a canvas
- Single-pointer control: Include dedicated + and - icon buttons
- Touchpads: Support a two-finger pinch-to-zoom gesture

> [imagen] Satellite map window with a location card, and trailing zoom + and - icon buttons. — Include dedicated **+** and **-** buttons as an accessible single-pointer zoom alternative

#### Adapt panning interactions

For zoom-first content, people should be able to pan by clicking and dragging with a mouse or touchpad once zoomed in.

For pan-first content, people should be able to pan by:

- Scrolling vertically, or holding **Shift** and scrolling horizontally
- Swiping with two fingers on a touchpad

> [vídeo] Satellite map window showing a pointer over alpine terrain. The map is zoomed in then pans. — People should be able to swipe, scroll, or click and drag to pan zoomed-in content

### Secondary actions

To save screen space and reduce visual complexity on desktop, consider hiding secondary actions and revealing them only when necessary.

#### Use context menus

A context menu helps people maintain focus in the main window during element-specific tasks, like copy and paste.

Context menus should open with a secondary click, a long press, or an overflow icon button.

> [imagen] Satellite map window showing a floating menu of 6 actions beside the pointer and a trailing location card. — Context menus open with a secondary click, a long press, or an overflow icon

#### Reveal actions on hover

Secondary actions can also appear when a cursor or stylus hovers over an area.

Don’t use hover as the only way to access these actions.

> [imagen] On a satellite map, a hand cursor hovers over Tremorgio Lake to reveal a location card with a "Save to atlas" button. — Secondary actions can appear on hover

### Making multiple selections

Multi-select helps people complete bulk actions.

On desktop, people can use the following pointer and keyboard interactions to select multiple items:

- Select one-by-one: **Control** + click. or **Cmd** + click (Mac)
- Select a range: **Shift** + click
- Select a group: Click + drag
- Select all: **Control** + A, or **Cmd** + A (Mac)

> [imagen] Desktop journal app with 3 items selected. — People can select multiple items using **Shift** + click

### Refreshing

When designing a refresh action, make sure to consider all input types.

On desktop, people can refresh a page by pressing **Control** + R, or **Cmd** + R on Mac.

Include a dedicated button so people using non-touch pointer devices or assistive technologies can refresh content with a single click.

> [imagen] Browser window showing a course page with a selected reload icon in the search bar. — Include a dedicated button for people to refresh content
