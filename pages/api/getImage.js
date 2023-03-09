const imageFileNames = [
  "vid_4_600.jpg",
  "vid_4_980.jpg",
  "vid_4_1000.jpg",
  "vid_4_1020.jpg",
  "vid_4_2540.jpg",
  "vid_4_3140.jpg",
  "vid_4_4540.jpg",
  "vid_4_4560.jpg",
  "vid_4_8580.jpg",
  "vid_4_14480.jpg",
  "vid_4_28840.jpg",
];

export default async function getObjectAfterDelay() {
  const randInt = Math.floor(Math.random() * 12);
  const imageName = imageFileNames[randInt];
  return new Promise((resolve) => {
    setTimeout(() => {
      const myObject = {
        id: imageName,
        fileName: imageName,
        target: "car",
      };
      resolve(myObject);
    }, 300);
  });
}
