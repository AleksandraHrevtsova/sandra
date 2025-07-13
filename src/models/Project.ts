import { Schema, Document, models, model } from "mongoose";

export interface IProject extends Document {
  name: string;
  overview?: string;
  keyFeatures?: string[];
  clientApps?: {
    web?: string;
    mobile?: string[];
  };
  backend?: string[];
  dataStorage?: string[];
  security?: string[];
  adminPanel?: {
    legacy?: string;
    modern?: string;
  };
  integrations?: string[];
  metrics?: string;
  link?: string;
  image?: string;
}

const ProjectSchema = new Schema<IProject>({
  name:      { type: String, required: true },
  overview:  String,
  keyFeatures:    [String],
  clientApps: {
    web:    String,
    mobile: [String],
  },
  backend:     [String],
  dataStorage: [String],
  security:    [String],
  adminPanel: {
    legacy: String,
    modern: String,
  },
  integrations: [String],
  metrics:      String,
  link:         String,
  image:        String,
});

export const Project =
  models.Project || model<IProject>("Project", ProjectSchema);
