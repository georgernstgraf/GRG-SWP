class Bruch
{
    // jetzt kommen die sog. "Attribute" der Klasse oder "Felder"
    private int zaehler;
    private int nenner;

    public Bruch(string bruchtext)
    {
        string[] teile = bruchtext.Split('/');
        this.zaehler = int.Parse(teile[0]);
        this.nenner = int.Parse(teile[1]);
    }
    public Bruch addiere(Bruch b)
    {
        return null;
    }
    public string toString()
    {
        return $"ich bin ein bruch: {this.zaehler}/{this.nenner}";
        // JS: return `ich bin ein bruch: ${this.zaehler}/${this.nenner}`;
    }   
}