// Library Imports
import { v } from "convex/values";

// Custom Imports
import { mutation, query } from "./_generated/server";

export const getTeam = query({
  args: {
    email: v.string(),
  },

  handler: async (ctx, args) => {
    const response = ctx.db
      .query("teams")
      .filter((q) => q.eq(q.field("createdBy"), args.email))
      .collect();

    return response;
  },
});

export const createTeam = mutation({
  args: {
    teamName: v.string(),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    const response = await ctx.db.insert("teams", args);
    return response;
  },
});
