package Deepskilling.Engineering Concepts.Algorithms_Data Structures;

public class Main Class{

    public static void main(String[] args) {

        InventoryManager manager = new InventoryManager();

        manager.addProduct(new Product(101, "Laptop", 20, 55000));
        manager.addProduct(new Product(102, "Mouse", 100, 500));
        manager.addProduct(new Product(103, "Keyboard", 50, 1200));

        System.out.println("\nInventory:");
        manager.displayProducts();

        manager.updateProduct(102, "Wireless Mouse", 120, 700);

        manager.deleteProduct(103);

        System.out.println("\nUpdated Inventory:");
        manager.displayProducts();
    }
}