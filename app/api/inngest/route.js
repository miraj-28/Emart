// app/api/inngest/route.js
// temporary debug: prints first 12 chars of the signing key so we can compare
console.log("INNGEST_KEY_PREFIX:", String(process.env.INNGEST_SIGNING_KEY || "").slice(0, 12));
import { serve } from "inngest/next";
import { inngest } from "../../../lib/inngest";
import {
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion
} from "../../../lib/inngestfunctions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ]
});