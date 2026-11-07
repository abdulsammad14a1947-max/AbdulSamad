export type CreativePost = {
  slug: string;
  title: string;
  file: string;
  type: "image" | "video";
};

const post = (slug: string, title: string, file: string, type: "image" | "video"): CreativePost => ({
  slug,
  title,
  file: `/creative/${file}`,
  type,
});

export const creativePosts: CreativePost[] = [
  post("fashion-campaign-photography", "Fashion campaign photography", "fashion-campaign-photography.jpg", "image"),
  post("faceless-streetwear-portrait-4", "Faceless streetwear portrait 04", "faceless-streetwear-portrait-4.png", "image"),
  post("faceless-techwear-portrait-1", "Faceless techwear portrait 01", "faceless-techwear-portrait-1.png", "image"),
  post("hoodie-commercial-camera-sequence", "Hoodie commercial — camera sequence", "hoodie-commercial-camera-sequence.mp4", "video"),
  post("hoodie-model-in-studio", "Hoodie model — studio", "hoodie-model-in-studio.mp4", "video"),
  post("hoodie-turn-around", "Hoodie model — turn around", "hoodie-turn-around.mp4", "video"),
  post("luxury-clothing-showcase-1", "Luxury clothing showcase 01", "luxury-clothing-showcase-1.mp4", "video"),
  post("luxury-clothing-showcase-2", "Luxury clothing showcase 02", "luxury-clothing-showcase-2.mp4", "video"),
  post("streetwear-model-standing", "Streetwear model — standing pose", "streetwear-model-standing.mp4", "video"),
  post("warriors-hoodie-model", "Warriors hoodie — model shot", "warriors-hoodie-model.mp4", "video"),
  post("sunny-seaside-quotes-1", "Sunny seaside quotes 01", "sunny-seaside-quotes-1.mp4", "video"),
  post("sunny-seaside-quotes-2", "Sunny seaside quotes 02", "sunny-seaside-quotes-2.mp4", "video"),
  post("zip-up-hoodie-fabric-closeup", "Zip-up hoodie — fabric close-up", "zip-up-hoodie-fabric-closeup.mp4", "video"),
  post("moody-offwhite-hoodie-detail-2", "Off-White hoodie — moody detail", "moody-offwhite-hoodie-detail-2.png", "image"),
  post("warriors-hoodie-moody-studio-3", "Warriors hoodie — studio light 03", "warriors-hoodie-moody-studio-3.png", "image"),
  post("warriors-streetwear-detail-5", "Warriors streetwear — detail 05", "warriors-streetwear-detail-5.png", "image"),
  post("male-model-ten-pose-sheet", "Male model — ten-pose reference sheet", "male-model-ten-pose-sheet.png", "image"),
  post("logo-removal-product-image-1", "Logo removal — product image 01", "logo-removal-product-image-1.jpg", "image"),
  post("logo-removal-product-image-2", "Logo removal — product image 02", "logo-removal-product-image-2.jpg", "image"),
  post("logo-removal-product-image-3", "Logo removal — product image 03", "logo-removal-product-image-3.jpg", "image"),
  post("logo-removal-shirt-1", "Logo removal — shirt 01", "logo-removal-shirt-1.jpg", "image"),
  post("logo-removal-shirt-2", "Logo removal — shirt 02", "logo-removal-shirt-2.jpg", "image"),
  post("logo-removal-polo-shirt", "Logo removal — polo shirt", "logo-removal-polo-shirt.jpg", "image"),
  post("outdoor-selfie-1", "Outdoor selfie 01", "outdoor-selfie-1.jpg", "image"),
  post("outdoor-selfie-2", "Outdoor selfie 02", "outdoor-selfie-2.jpg", "image"),
  post("outdoor-selfie-3", "Outdoor selfie 03", "outdoor-selfie-3.jpg", "image"),
  post("zenith-fashion-lookbook", "Zenith man — fashion lookbook", "zenith-fashion-lookbook.mp4", "video"),
  post("zenith-storyboard-sheet", "Zenith man — storyboard contact sheet", "zenith-storyboard-sheet.jpg", "image"),
];
