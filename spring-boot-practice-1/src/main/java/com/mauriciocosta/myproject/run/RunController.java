package com.mauriciocosta.myproject.run;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/runs")
public class RunController { // Take a request and respond. Nothing else.
    
    private final RunRepository runRepository;

    public RunController(RunRepository runRepository) {
        this.runRepository = runRepository;
    }

    // @GetMapping("/api/runs")
    @GetMapping()
    List<Run> findAll() {
        return runRepository.findAll();
    }

    @GetMapping("/{id}")
    Run findById(@PathVariable Integer id) {
        // return runRepository.findById(id);

        Optional<Run> run =  runRepository.findById(id);

        if (run.isEmpty()) {
            // throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            throw new RunNotFoundException();
        }

        return run.get();
    }

    // post
    @ResponseStatus(HttpStatus.CREATED) // 201 - something was created (instead of a regular 200)
    @PostMapping("")
    void create(@RequestBody Run run) {
        runRepository.create(run);
    }

    // put
    @PutMapping("/{id}")
    void update(@RequestBody Run run, @PathVariable Integer id) {
        runRepository.update(run, id);
    }

    // delete
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        runRepository.delete(id);
    }

    // @GetMapping("/hello")
    // String home() {
    //     return "Hello!";
    // }
}
