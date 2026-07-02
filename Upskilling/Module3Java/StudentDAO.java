package Upskilling.Module3Java;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class StudentDAO {

    // Database details
    String url = "jdbc:mysql://localhost:3306/studentdb";
    String username = "root";
    String password = "";

    // Insert a new student
    public void insertStudent(int id, String name, int age) {

        try {

            Connection con = DriverManager.getConnection(url, username, password);

            String query = "INSERT INTO students (id, name, age) VALUES (?, ?, ?)";

            PreparedStatement ps = con.prepareStatement(query);

            ps.setInt(1, id);
            ps.setString(2, name);
            ps.setInt(3, age);

            int rows = ps.executeUpdate();

            System.out.println(rows + " record inserted successfully.");

            ps.close();
            con.close();

        } catch (Exception e) {

            System.out.println(e);

        }

    }

    // Update student details
    public void updateStudent(int id, String name, int age) {

        try {

            Connection con = DriverManager.getConnection(url, username, password);

            String query = "UPDATE students SET name = ?, age = ? WHERE id = ?";

            PreparedStatement ps = con.prepareStatement(query);

            ps.setString(1, name);
            ps.setInt(2, age);
            ps.setInt(3, id);

            int rows = ps.executeUpdate();

            System.out.println(rows + " record updated successfully.");

            ps.close();
            con.close();

        } catch (Exception e) {

            System.out.println(e);

        }

    }

    public static void main(String[] args) {

        StudentDAO dao = new StudentDAO();

        // Insert record
        dao.insertStudent(4, "David", 23);

        // Update record
        dao.updateStudent(4, "David Kumar", 24);

    }

}