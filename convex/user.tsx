// Library Imports
import { v } from "convex/values";

// Custom Imports
import { mutation, query } from "./_generated/server";

export const getUser = query({
  args: {
    email: v.string(),
  },

  handler: async (ctx, args) => {
    const response = ctx.db
      .query("user")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    return response;
  },
});

export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("user", args);
  },
});
