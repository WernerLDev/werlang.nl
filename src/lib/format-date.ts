import { format } from "date-fns";

export const FormatDate = (date: Date) => {
  return format(date, "dd LLLL yyyy");
};
