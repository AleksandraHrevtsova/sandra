import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  description: string[];
}

const ExperienceSchema = new Schema<IExperience>({
  title: String,
  company: String,
  location: String,
  from: String,
  to: String,
  description: [String],
});

export const Experience = mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema);
