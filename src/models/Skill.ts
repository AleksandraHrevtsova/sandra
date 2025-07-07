import mongoose, { Schema, Document } from "mongoose";

export interface ISkill extends Document {
  category: string;        // например: Frontend, Backend, DevOps, Tools
  items: string[];         // массив скиллов
}

const SkillSchema = new Schema<ISkill>({
  category: { type: String, required: true },
  items: { type: [String], required: true },
});

export const Skill = mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);
