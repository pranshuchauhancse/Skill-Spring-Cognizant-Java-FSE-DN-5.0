package Deepskilling.JUnitMockitoandSL4J.MockitoExercises.Exercise1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Create service object
        MyService service = new MyService(mockApi);

        // Call method
        String result = service.fetchData();

        // Verify result
        assertEquals("Mock Data", result);
    }
}