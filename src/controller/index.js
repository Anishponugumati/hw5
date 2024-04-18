import { activitySerializer } from "../model";

export const getActivity = async () => {
  const res = await fetch('https://.boredapi.com/api/activity/');
  const data = await res.json()

  return activitySerializer(data);
}