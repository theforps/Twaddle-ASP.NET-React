namespace Twaddle.Domain.DTO;

public class UserUpdateDTO
{
    public string? Login { get; set; }
    public string Sex { get; set; }
    public string Name { get; set; }
    public string Goal { get; set; }
    public int Age { get; set; }
    public string Country { get; set; }
    public string Education { get; set; }
    public string Description { get; set; }
    public List<IFormFile>? Images { get; set; }
}