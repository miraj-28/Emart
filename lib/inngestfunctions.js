import { inngest } from "./inngest";

export const syncUserCreation = inngest.createFunction(
  {
    name: "syncUserCreation",
    id: "sync-user-creation"   // UNIQUE ID
  },
  { event: "user.created" },
  async ({ event }) => {
    console.log("User Created", event?.data);
    return { ok: true };
  }
);

export const syncUserUpdation = inngest.createFunction(
  {
    name: "syncUserUpdation",
    id: "sync-user-updation"  // UNIQUE ID
  },
  { event: "user.updated" },
  async ({ event }) => {
    console.log("User Updated", event?.data);
    return { ok: true };
  }
);

export const syncUserDeletion = inngest.createFunction(
  {
    name: "syncUserDeletion",
    id: "sync-user-deletion"   // UNIQUE ID
  },
  { event: "user.deleted" },
  async ({ event }) => {
    console.log("User Deleted", event?.data);
    return { ok: true };
  }
);
