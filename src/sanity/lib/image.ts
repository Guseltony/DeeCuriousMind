import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "nvxzbd4e",
  dataset: dataset || "production",
});

export const urlForImage = (source: any) => {
  return imageBuilder.image(source);
};
