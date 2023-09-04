import image1 from "@/images/bookratings.png";
import image2 from "@/images/avatar.jpg";

export const images: string[] = [image1.src, image2.src];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
