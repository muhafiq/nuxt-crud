export default defineEventHandler((event) => {
  console.log(event.context.user);
  return { data: "hello products" };
});
