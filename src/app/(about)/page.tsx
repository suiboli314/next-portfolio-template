import Intro from "@/components/Introduction";
import Card from "@/components/Cards/Cards";
import ImageMedia from "@/components/ImageContainer/ImageMedia";
import imageByIndex from "@/components/ImageContainer/imageByIndex";

export default function Home() {
  return (
    <>
      <Intro />
      <Card title="Book Rating \n share your reviews" bgcolor="#6393c9" flexBasis="50%">
        <ImageMedia src={imageByIndex(1)} alt="abc" />
      </Card>
      <Card title="Book Rating \n share your reviews" bgcolor="Red" flexBasis="50%"></Card>
    </>
  );
}
