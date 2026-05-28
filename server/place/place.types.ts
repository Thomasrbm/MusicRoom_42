import { string, z } from "zod";

export const CreatePlaceDto = z.object({
  placeName: z
    .string()
    .min(3, { message: "Place name too short" })
    .max(30, { message: "Place name too long" }),
  isPublic: z.boolean(),
});

export const JoinPlaceDto = z.object({
  placeId: z.string(),
});

export const InviteStatus = z.enum(["invite", "cancel"]);

export const InvitePlaceDto = z.object({
  placeId: z.string(),
  targetId: z.string(),
  status: InviteStatus,
});
