namespace StillWaitingApi.Models
{
    public class OmnipodItunesSearchResponse
    {
        public int ResultCount { get; set; }
        public Result[]? Results { get; set; }
    }

    public class Result
    {
        public string[]? SupportedDevices { get; set; }
        public bool IsGameCenterEnabled { get; set; }
        public object[]? Features { get; set; }
        public string[]? Advisories { get; set; }
        public object[]? IpadScreenshotUrls { get; set; }
        public object[]? AppletvScreenshotUrls { get; set; }
        public string? ArtistViewUrl { get; set; }
        public string? ArtworkUrl60 { get; set; }
        public string? ArtworkUrl512 { get; set; }
        public string? ArtworkUrl100 { get; set; }
        public string[]? ScreenshotUrls { get; set; }
        public string? Kind { get; set; }
        public string? Currency { get; set; }
        public string? CurrentVersionReleaseDate { get; set; }
        public int ArtistId { get; set; }
        public string? ArtistName { get; set; }
        public string[]? Genres { get; set; }
        public string? Description { get; set; }
        public double Price { get; set; }
        public string[]? GenreIds { get; set; }
        public string? BundleId { get; set; }
        public long TrackId { get; set; }
        public string? TrackName { get; set; }
        public bool IsVppDeviceBasedLicensingEnabled { get; set; }
        public string? ReleaseDate { get; set; }
        public string? SellerName { get; set; }
        public string? ReleaseNotes { get; set; }
        public string? PrimaryGenreName { get; set; }
        public int PrimaryGenreId { get; set; }
        public double AverageUserRatingForCurrentVersion { get; set; }
        public double AverageUserRating { get; set; }
        public string? MinimumOsVersion { get; set; }
        public string? TrackCensoredName { get; set; }
        public string[]? LanguageCodesISO2A { get; set; }
        public string? FileSizeBytes { get; set; }
        public string? FormattedPrice { get; set; }
        public string? ContentAdvisoryRating { get; set; }
        public int UserRatingCountForCurrentVersion { get; set; }
        public string? TrackContentRating { get; set; }
        public string? TrackViewUrl { get; set; }
        public string? Version { get; set; }
        public string? WrapperType { get; set; }
        public int UserRatingCount { get; set; }
        public string? SellerUrl { get; set; }
    }
}
