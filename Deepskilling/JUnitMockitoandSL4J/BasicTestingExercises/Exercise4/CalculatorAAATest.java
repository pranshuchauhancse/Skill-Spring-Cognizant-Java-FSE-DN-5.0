package Deepskilling.JUnitMockitoandSL4J.BasicTestingExercises.Exercise4;

import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorAAATest {

    Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup completed.");
    }

    @After
    public void tearDown() {
        System.out.println("Test completed.");
    }

    @Test
    public void testAdd() {

        // Arrange
        int a = 20;
        int b = 30;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(50, result);
    }
}