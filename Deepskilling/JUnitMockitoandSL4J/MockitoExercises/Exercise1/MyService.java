package Deepskilling.JUnitMockitoandSL4J.MockitoExercises.Exercise1;

public class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}