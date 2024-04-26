using Newtonsoft.Json;

namespace StillWaitingApi.Models
{
    public class Item
    {
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("released")]
        public bool Released { get; set; }
        [JsonProperty("release_date")]
        public DateTime? ReleaseDate { get; set; }

        public Item(string id)
        {
            Id = id;
        }
    }
}