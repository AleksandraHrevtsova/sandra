import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

const ProjectSchema = new Schema<IProject>({
  name: String,
  description: String,
  technologies: [String],
  link: String,
  image: String,
});

export const Project = mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
