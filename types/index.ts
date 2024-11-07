export type Gif = {
  type: 'gif'
  id: string
  url: string
  slug: string
  bitly_gif_url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  title: string
  rating: string
  content_url: string
  source_tld: string
  source_post_url: string
  is_sticker: number
  import_datetime: string
  trending_datetime: string
  images: {
    original: ImageVariant
    downsized: ImageSize
    downsized_large: ImageSize
    downsized_medium: ImageSize
    downsized_small: {
      height: string
      width: string
      mp4_size: string
      mp4: string
    }
    downsized_still: ImageSize
    fixed_height: ImageVariant
    fixed_height_downsampled: ImageWithWebp
    fixed_height_small: ImageVariant
    fixed_height_small_still: ImageSize
    fixed_height_still: ImageSize
    fixed_width: ImageVariant
    fixed_width_downsampled: ImageWithWebp
    fixed_width_small: ImageVariant
    fixed_width_small_still: ImageSize
    fixed_width_still: ImageSize
    looping: {
      mp4_size: string
      mp4: string
    }
    original_still: ImageSize
    original_mp4: {
      height: string
      width: string
      mp4_size: string
      mp4: string
    }
    preview: {
      height: string
      width: string
      mp4_size: string
      mp4: string
    }
    preview_gif: ImageSize
    preview_webp: ImageSize
    hd: {
      height: string
      width: string
      mp4_size: string
      mp4: string
    }
    '480w_still': ImageSize
  }
  user: {
    avatar_url: string
    banner_image: string
    banner_url: string
    profile_url: string
    username: string
    display_name: string
    description: string
    instagram_url: string
    website_url: string
    is_verified: boolean
  }
  analytics_response_payload: string
  analytics: {
    onload: { url: string }
    onclick: { url: string }
    onsent: { url: string }
  }
  alt_text: string
}

type ImageSize = {
  height: string
  width: string
  size: string
  url: string
}

type ImageVariant = ImageSize & {
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

type ImageWithWebp = {
  height: string
  width: string
  size: string
  url: string
  webp_size: string
  webp: string
}
