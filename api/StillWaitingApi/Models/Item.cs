using Newtonsoft.Json;

namespace StillWaitingApi.Models
{
    public class Item(string id)
    {
        [JsonProperty("id")]
        public string Id { get; set; } = id;
        [JsonProperty("released")]
        public bool Released { get; set; }
        [JsonProperty("release_date")]
        public DateTime? ReleaseDate { get; set; }
    }
}