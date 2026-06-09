import { type SchemaTypeDefinition } from "sanity";
import announcement from "./schemas/announcement";
import summerClub from "./schemas/summerClub";
import galleryItem from "./schemas/galleryItem";
import faq from "./schemas/faq";
import heroSlide from "./schemas/heroSlide";
import review from "./schemas/review";
import service from "./schemas/service";
import blogPost from "./schemas/blogPost";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [announcement, summerClub, galleryItem, faq, heroSlide, review, service, blogPost],
};

