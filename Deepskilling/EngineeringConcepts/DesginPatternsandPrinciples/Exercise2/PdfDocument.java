package Deepskilling.EngineeringConcepts.DesginPatternsandPrinciples.Exercise2;

public class PdfDocument implements Document {

    @Override
    public void open() {
        System.out.println("PDF Document Opened.");
    }
}