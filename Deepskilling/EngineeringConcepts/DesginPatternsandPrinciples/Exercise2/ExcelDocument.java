package Deepskilling.EngineeringConcepts.DesginPatternsandPrinciples.Exercise2;

public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Excel Document Opened.");
    }
}