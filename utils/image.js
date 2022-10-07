import client from "./client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

function imageUrl(source) {
    return builder.image(source).width(300).url();
}


export { imageUrl }