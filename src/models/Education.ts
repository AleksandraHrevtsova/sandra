import mongoose, { Schema, Document } from "mongoose";

export interface IEducation extends Document {
  degree: string;
  institution: string;
  location: string;
  from: string;
  to: string;
}

const EducationSchema = new Schema<IEducation>({
  degree: String,
  institution: String,
  location: String,
  from: String,
  to: String,
});

export const Education = mongoose.models.Education || mongoose.model<IEducation>("Education", EducationSchema);
