export default async function postObjectAfterDelay(object) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(object);
      const response = { status: 200 };
      resolve(response);
    }, 300);
  });
}
