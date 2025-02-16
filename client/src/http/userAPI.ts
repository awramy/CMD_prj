import { $authHost } from "./index.ts";

export const fetchLogin = async () => {
  const { data } = await $authHost.get('/user');
  return data;
}

export const check = async () => {
  const { data } = await $authHost.get('/check');
  return data;
}

export const fetchSelectPhoto = async (file: File | Blob) => {
  const formData = new FormData();
  formData.append('photo', file); // 'photo' — это ключ, который сервер ожидает для файла
  const { data } = await $authHost.post('/user/selectPhoto', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  } );
  return data;
}