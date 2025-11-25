// app/api/inngest/route.js
import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest";
import {
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "@/lib/inngestfunctions";

export const { GET, POST } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});