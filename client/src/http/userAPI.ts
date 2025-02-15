import { $authHost } from "./index.ts";

export const fetchLogin = async () => {
  const { data } = await $authHost.get('/user');
  return data;
}

export const check = async () => {
  const { data } = await $authHost.get('/check');
  return data;
}
