export const getAbbreviatedName = (name: {
  firstName: string;
  secondName: string;
}) => {
  if (!name.secondName) {
    return name.firstName;
  }

  return `${name.firstName} ${name.secondName.slice(0, 1)}.`;
};

export const getFullName = (name: {
  firstName: string;
  secondName: string;
}) => {
  if (!!name.firstName && !!name.secondName) {
    return `${name.firstName} ${name.secondName}`;
  }

  return name.firstName;
};
