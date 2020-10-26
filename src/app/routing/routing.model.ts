import { ComponentType } from "react";

export interface RouteModel {
  component: ComponentType<any>;
  path: string;
  exact?: boolean;
}
