import moment from "moment-timezone";

export const dateTimeFormatter = (input, format) => {
  if (format === "dateOnly") {
    return moment(input).tz("Asia/Kuala_Lumpur").format("DD MMM YYYY");
  }

  return moment(input).tz("Asia/Kuala_Lumpur").format("DD MMM YYYY hh:mm A");
};
