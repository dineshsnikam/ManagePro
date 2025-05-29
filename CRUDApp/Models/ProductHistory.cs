public class ProductHistory
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public string ProductName { get; set; } = string.Empty;
    public string ActionType { get; set; } = string.Empty;
    public string UpdatedField { get; set; } = string.Empty;
    public string OldValue { get; set; } = string.Empty;
    public string NewValue { get; set; } = string.Empty;
    public string PerformedBy { get; set; } = string.Empty;
    public DateTime ActionDate { get; set; } = DateTime.Now;
}
