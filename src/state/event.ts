import { atom } from "jotai";

export const EVENT_ID = {
  none: 0,
  home: 1,
  reload: 2,
  settings: 3,
} as const;
export type EventID = (typeof EVENT_ID)[keyof typeof EVENT_ID];

export type Event = {
  id: EventID;
  param: object;
};

export const event_state = atom({
  id: EVENT_ID.none,
  param: {},
} as Event);
