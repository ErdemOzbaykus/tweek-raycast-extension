/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Tweek Personal API Key / Access Token - Generate your Personal API Key in Tweek → Profile → API Settings. */
  "apiKey": string,
  /** Default Calendar Name or ID - Optional name or ID of your preferred default calendar. Leave empty to use your primary Tweek calendar. */
  "defaultCalendar": string,
  /** Hide Completed Tasks - Whether to hide completed tasks by default in the Dashboard and Search views. */
  "hideCompleted": boolean,
  /** Date Format - Preferred date display format across lists and details. */
  "dateFormat": "dd/MM/yyyy" | "MM/dd/yyyy",
  /** Week Starts On - First day of the week for weekly views and filters. */
  "weekStartsOn": "Monday" | "Sunday",
  /** Default Task Color - Default color badge assigned to newly created tasks. */
  "defaultTaskColor": "blank" | "pink" | "yellowish" | "cornflower" | "mango" | "greenish" | "lilac" | "grey" | "black"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `dashboard` command */
  export type Dashboard = ExtensionPreferences & {}
  /** Preferences accessible in the `ask-tweek` command */
  export type AskTweek = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-add` command */
  export type QuickAdd = ExtensionPreferences & {}
  /** Preferences accessible in the `search-tasks` command */
  export type SearchTasks = ExtensionPreferences & {}
  /** Preferences accessible in the `create-task` command */
  export type CreateTask = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `dashboard` command */
  export type Dashboard = {}
  /** Arguments passed to the `ask-tweek` command */
  export type AskTweek = {
  /** What's on my plate this week? */
  "prompt": string
}
  /** Arguments passed to the `quick-add` command */
  export type QuickAdd = {
  /** Buy milk @today #pink */
  "text": string,
  /** today, tomorrow, or YYYY-MM-DD */
  "date": string,
  /** Optional note or details */
  "note": string
}
  /** Arguments passed to the `search-tasks` command */
  export type SearchTasks = {}
  /** Arguments passed to the `create-task` command */
  export type CreateTask = {}
}

