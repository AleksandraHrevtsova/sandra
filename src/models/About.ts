import mongoose, { Schema, Document } from 'mongoose';

export interface IAbout extends Document {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  nationality: string;
  drivingLicense: string;
  birthdate?: string;
  photo?: string;
  startWorkingDate: string;
  summary: string;
}

const AboutSchema: Schema<IAbout> = new Schema({
  name: String,
  title: String,
  location: String,
  phone: String,
  email: String,
  linkedin: String,
  nationality: String,
  drivingLicense: String,
  birthdate: String,
  photo: String,
  startWorkingDate: String,
  summary: String,
});

export const About = mongoose.models.About || mongoose.model<IAbout>("About", AboutSchema);