import moment from "moment";
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const appdateTodbase = (date) => {
  const altered_date = {};

  altered_date.year = parseInt(moment(date).format("YYYY"));
  altered_date.month = parseInt(moment(date).format("MM") - 1);
  altered_date.day = parseInt(moment(date).format("DD"));
  altered_date.hour = parseInt(moment(date).format("HH"));
  altered_date.minute = parseInt(moment(date).format("mm"));

  // const { year, month, day, hour, minute } = altered_date;

  return altered_date;
};

export const dbasedateToapp = (date) => {
  const { year, month, day, hour, minute } = date;
  return new Date(year, month, day, hour, minute);
};

export const calculateTime = (ydate, xdate) => {};
