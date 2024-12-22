package com.mauriciocosta.myproject.run;

public class OldRun {

    // Attributes
    private int id;
    private String title;
    private String startedOn;
    private String completedOn;
    private double miles;
    private String location;

    // Constructor
    public OldRun(int id, String title, String startedOn, String completedOn, double miles, String location) {
        this.id = id;
        this.title = title;
        this.startedOn = startedOn;
        this.completedOn = completedOn;
        this.miles = miles;
        this.location = location;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStartedOn() {
        return startedOn;
    }

    public void setStartedOn(String startedOn) {
        this.startedOn = startedOn;
    }

    public String getCompletedOn() {
        return completedOn;
    }

    public void setCompletedOn(String completedOn) {
        this.completedOn = completedOn;
    }

    public double getMiles() {
        return miles;
    }

    public void setMiles(double miles) {
        this.miles = miles;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    // toString method
    @Override
    public String toString() {
        return "Run{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", startedOn='" + startedOn + '\'' +
                ", completedOn='" + completedOn + '\'' +
                ", miles=" + miles +
                ", location='" + location + '\'' +
                '}';
    }

    // Main method - the entry point of the program
//     public static void main(String[] args) {
//         // Create a Run object
//         OldRun myRun = new OldRun(1, "Morning Run", "2024-12-14", "2024-12-14", 5.2, "Central Park");

//         // Display run details
//         System.out.println("Run Details:");
//         System.out.println("ID: " + myRun.getId());
//         System.out.println("Title: " + myRun.getTitle());
//         System.out.println("Started On: " + myRun.getStartedOn());
//         System.out.println("Completed On: " + myRun.getCompletedOn());
//         System.out.println("Miles: " + myRun.getMiles());
//         System.out.println("Location: " + myRun.getLocation());
//     }
}

