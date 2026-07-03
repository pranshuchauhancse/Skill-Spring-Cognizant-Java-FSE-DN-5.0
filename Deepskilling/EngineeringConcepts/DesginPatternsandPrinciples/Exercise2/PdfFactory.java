package Deepskilling.EngineeringConcepts.DesginPatternsandPrinciples.Exercise2;

public class PdfFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}