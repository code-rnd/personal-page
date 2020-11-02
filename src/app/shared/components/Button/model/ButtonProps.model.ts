export interface ButtonPropsModel {
  type: BUTTON_TYPE;
  onClick: () => void;
  disable?: boolean;
  visible?: boolean;
  title: string;
  loading?: boolean;
  className?: string;
  style?: any;
  size?: BUTTON_SIZE;
  icon?: any;
}

export enum BUTTON_SIZE {
  LITTLE = "LITTLE",
  NORMAL = "NORMAL",
  BIG = "BIG",
}

export enum BUTTON_TYPE {
  DEFAULT = "DEFAULT",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  NORMAL = "NORMAL",
}
