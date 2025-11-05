using System.Collections.Specialized;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World als Klasse!");
        foreach (string s in args)
        {
            Console.WriteLine(s);
        }
        Bruch b1 = new Bruch(args[0]);
        Bruch b2 = new Bruch(args[1]);
        Bruch b3 = b1.addiere(b2);
        Console.WriteLine("Ergebnis: " + b3.toString());
    }
}