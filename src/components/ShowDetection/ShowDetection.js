import React from "react";
import nvision from "@nipacloud/nvision/dist/browser/nvision"

export default function ShowDetection() {
  const objectDetectionService = nvision.objectDetection({
    apiKey:
      "cdb29f355cb4059995e054208cd7c06a332acfb83a0a29592e88c58f78a7e4f8a8c0c3cfd71391e67b466dc00b475424ac",
  });

  objectDetectionService
    .predict({
      rawData: "BASE64_ENCODED_IMAGE",
    })
    .then((result) => {
      console.log("objectDetectionService"+result);
    });

//   module.exports = {
//     resolve: {
//       alias: {
//         "@nipacloud/nvision": "@nipacloud/nvision/dist/browser/nvision.js",
//       },
//     },
//   };

  return <div></div>;
}
