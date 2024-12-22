package com.mauriciocosta.myproject.run;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import jakarta.annotation.PostConstruct;

@Repository
public class RunRepository {
    List<Run> runs = new ArrayList<>();

    List<Run> findAll() {
        return runs;
    }

    // Run findById(Integer id) {
    Optional<Run> findById(Integer id) {
        return runs.stream()
                .filter(run -> run.id() == id)
                .findFirst();
                // .get();  // This will throw NoSuchElementException if the value is not present
    }

    void create(Run run) {
        runs.add(run);
    }

    void update(Run run, Integer id) {
        Optional<Run> existingRun = findById(id);

        if (existingRun.isPresent()) {
            Integer index = runs.indexOf(existingRun.get());
            runs.set(index, run);
        }
    }

    void delete(Integer id) {
        runs.removeIf(run -> run.id() == id);
    }

    @PostConstruct
    private void init() {
        runs.add(
            new Run(
                1,
                "Monday Morning Run",
                LocalDateTime.now(), // Current time
                LocalDateTime.now().plus(30, ChronoUnit.MINUTES), // 30 minutes later
                3, // Distance in km or miles
                Location.INDOOR // Assuming this is an enum value
            )
        );
    }
}
