<!-- omit in toc -->
# `@meetgram/utils`

An internal library of utility functions and React hooks that are used across Meetgram's web application

<!-- omit in toc -->
## Table of Contents

- [Functions](#functions)
  - [`cn`](#cn)
  - [`dateFormatting`](#dateformatting)
  - [`flattenTranslations`](#flattentranslations)
  - [`getTimeAgo`](#gettimeago)
  - [`getTruncatedMessage`](#gettruncatedmessage)
  - [`range`](#range)
  - [`readFile`](#readfile)
  - [`sleep`](#sleep)
  - [`validateFileExtension`](#validatefileextension)
- [Hooks](#hooks)
  - [`useInfiniteScroll`](#useinfinitescroll)
  - [`useScreenHeightTracker`](#usescreenheighttracker)
  - [`useChangeZodErrorLang`](#usechangezoderrorlang)

## Functions

### `cn`

**Description:**
Merges class names using `clsx` and `tailwind-merge` for efficient handling of conditional and conflicting Tailwind classes.

### `dateFormatting`

**Description:**
Formats a JavaScript Date object into a user-friendly string, with optional configurations for time and date formats.

### `flattenTranslations`

**Description:**
Flattens a nested translation object into a single-level object with dot-notated keys.

### `getTimeAgo`

**Description:**
Returns a relative time string, such as "2 hours ago," for a given date.

### `getTruncatedMessage`

**Description:**
Truncates a string to a specified length, appending ellipsis if necessary.

### `range`

**Description:**
Generates an array of numbers between a specified start and end value.

### `readFile`

**Description:**
Asynchronously reads a file and returns its content.

### `sleep`

**Description:**
Pauses the execution for a specified duration (milliseconds).

### `validateFileExtension`

**Description:**
Checks if a file has a valid extension based on allowed types.

## Hooks

### `useInfiniteScroll`

**Description:**
This hook implements infinite scroll functionality. It triggers an action to load more items when the user scrolls to the bottom of a container or the page.

### `useScreenHeightTracker`

**Description:**
This hook tracks and returns the height of the screen in real-time. It updates when the window is resized.

### `useChangeZodErrorLang`

**Description:**
This custom hook allows you to modify the language used for error messages returned by Zod validation schemas.
