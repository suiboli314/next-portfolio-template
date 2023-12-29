import image1 from "@/assets/images/bookratings.png";
import image2 from "@/assets/images/avatar.jpg";

export const images: string[] = [image1.src, image2.src];

export const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
