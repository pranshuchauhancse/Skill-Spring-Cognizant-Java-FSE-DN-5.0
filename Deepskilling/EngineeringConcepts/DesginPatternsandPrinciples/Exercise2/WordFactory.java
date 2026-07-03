package Deepskilling.EngineeringConcepts.DesginPatternsandPrinciples.Exercise2;

public class WordFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}