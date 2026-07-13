using System;

// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

class Program
{
    static void Main(string[] args)
    {
        // args[0], args[1], ... contain the command-line arguments
        foreach (var arg in args)
        {
            Console.WriteLine(arg);
        }
    }
}
