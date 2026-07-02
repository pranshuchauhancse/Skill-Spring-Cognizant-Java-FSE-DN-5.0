package Upskilling.Module3Java;

public class VirtualThreadExample {

    public static void main(String[] args) {

        long startTime = System.currentTimeMillis();

        // Create 100000 virtual threads
        for (int i = 1; i <= 100000; i++) {

            int threadNumber = i;

            Thread.startVirtualThread(() -> {
                System.out.println("Virtual Thread " + threadNumber + " is running.");
            });

        }

        long endTime = System.currentTimeMillis();

        System.out.println("Time Taken: " + (endTime - startTime) + " ms");

    }

}