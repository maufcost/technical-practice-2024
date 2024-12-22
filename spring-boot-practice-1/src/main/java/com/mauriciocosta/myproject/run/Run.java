package com.mauriciocosta.myproject.run;

import java.time.LocalDateTime;

public record Run (
    Integer id,
    String title,
    LocalDateTime startedOn,
    LocalDateTime completedOn,
    Integer miles,
    Location location
) {
    // Validating data
    public Run {
        if (!completedOn.isAfter(startedOn)) {
            throw new IllegalArgumentException("Completed On must be after Started On");
        }
    }
}
