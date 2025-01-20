// Library Imports
import { v } from "convex/values";

// Custom Imports
import { mutation, query } from "./_generated/server";

export const createFile = mutation({
  args: {
    fileName: v.string(),
    teamId: v.string(),
    createdBy: v.string(),
    archive: v.boolean(),
    document: v.string(),
    whiteboard: v.string(),
  },
  handler: async (ctx, args) => {
    const response = await ctx.db.insert("files", args);
    return response;
  },
});

export const getFiles = query({
  args: {
    teamId: v.string(),
  },
  handler: async (ctx, args) => {
    const response = await ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("teamId"), args.teamId))
      .order("desc")
      .collect();
    return response;
  },
});

export const getFileData = query({
  args: {
    _id: v.id("files"),
  },
  handler: async (ctx, args) => {
    const response = await ctx.db.get(args._id);
    return response;
  },
});

export const updateDocData = mutation({
  args: {
    _id: v.id("files"),
    document: v.string(),
  },
  handler: async (ctx, args) => {
    const response = await ctx.db.patch(args._id, { document: args.document });
    return response;
  },
});

export const updateCanvasData = mutation({
  args: {
    _id: v.id("files"),
    canvas: v.string(),
  },
  handler: async (ctx, args) => {
    const response = await ctx.db.patch(args._id, { whiteboard: args.canvas });
    return response;
  },
});
