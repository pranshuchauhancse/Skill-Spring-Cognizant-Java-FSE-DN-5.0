package Upskilling.Module3Java;

import java.util.Scanner;

public class StringReversal {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input string
        System.out.print("Enter a string: ");
        String text = sc.nextLine();

        // Reverse the string using StringBuilder
        String reversed = new StringBuilder(text).reverse().toString();

        // Display result
        System.out.println("Reversed String: " + reversed);

        sc.close();
    }

}