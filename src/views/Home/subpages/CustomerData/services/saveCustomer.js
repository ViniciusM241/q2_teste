import client from "~/boot/client";

export default async (data) => {
  try {
    return await client.put(`/customers/${data.id}`, data);
  } catch (err) {
    console.log('err', err);
    return err;
  }
}
