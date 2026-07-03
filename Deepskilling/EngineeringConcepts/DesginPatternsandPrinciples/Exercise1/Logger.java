package Deepskilling.EngineeringConcepts.DesginPatternsandPrinciples.Exercise1;

public class Logger {

    // Single object of Logger
    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Method to get the single object
    public static Logger getInstance() {

        if (instance == null) {
            instance = new Logger();
        }

        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}