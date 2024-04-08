export interface OmnipodItunesSearchResponse {
  resultCount: number
  results: Result[]
}

export interface Result {
  supportedDevices: string[]
  isGameCenterEnabled: boolean
  features: any[]
  advisories: string[]
  ipadScreenshotUrls: any[]
  appletvScreenshotUrls: any[]
  artistViewUrl: string
  artworkUrl60: string
  artworkUrl512: string
  artworkUrl100: string
  screenshotUrls: string[]
  kind: string
  currency: string
  currentVersionReleaseDate: string
  artistId: number
  artistName: string
  genres: string[]
  description: string
  price: number
  genreIds: string[]
  bundleId: string
  trackId: number
  trackName: string
  isVppDeviceBasedLicensingEnabled: boolean
  releaseDate: string
  sellerName: string
  releaseNotes: string
  primaryGenreName: string
  primaryGenreId: number
  averageUserRatingForCurrentVersion: number
  averageUserRating: number
  minimumOsVersion: string
  trackCensoredName: string
  languageCodesISO2A: string[]
  fileSizeBytes: string
  formattedPrice: string
  contentAdvisoryRating: string
  userRatingCountForCurrentVersion: number
  trackContentRating: string
  trackViewUrl: string
  version: string
  wrapperType: string
  userRatingCount: number
  sellerUrl?: string
}
