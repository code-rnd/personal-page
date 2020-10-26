import { UserInfoModel } from "../../store/history/history.model";

export const prepareGet = (obj: UserInfoModel) => {
  const name = obj.name.secondName
      ? `${obj.name.firstName} ${obj.name.secondName}`
      : obj.name.firstName;

  return {
    ...obj,
    name,
  };
};

export const prepareSet = (obj: any): UserInfoModel => {
  const res = obj?.name?.split(" ");
  return {
    ...obj,
    name: {
      firstName: res?.[0],
      secondName: res?.[1],
    },
  };
};
