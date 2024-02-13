export class Video {
  resolution(): [number, number] {
    return [1920, 1440]
  }
}

declare module '../lib/registry' {
  export interface DataTypeRegistry {
    video: Video
  }
}
