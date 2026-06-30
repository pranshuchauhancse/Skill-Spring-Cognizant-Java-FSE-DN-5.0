package Deepskilling.Engineering Concepts.Algorithms_Data Structures;


import java.util.HashMap;

public class Inventory Manager System{

    HashMap<Integer, Product> inventory = new HashMap<>();

    // Add Product
    public void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
        System.out.println("Product added successfully.");
    }

    // Update Product
    public void updateProduct(int id, String name, int quantity, double price) {

        Product product = inventory.get(id);

        if (product != null) {
            product.setProductName(name);
            product.setQuantity(quantity);
            product.setPrice(price);
            System.out.println("Product updated successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }

    // Delete Product
    public void deleteProduct(int id) {

        if (inventory.remove(id) != null) {
            System.out.println("Product deleted successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }

    // Display Products
    public void displayProducts() {

        for (Product product : inventory.values()) {
            System.out.println(product);
        }
    }
}