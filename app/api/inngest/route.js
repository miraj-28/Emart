// app/api/inngest/route.js
import { serve } from "inngest/next";
import { inngest } from "../../../lib/inngest";
import {
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "../../../lib/inngestfunctions"; // exact filename: inngestfunctions.js

// include PUT so Inngest's verification probe doesn't 405
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});
