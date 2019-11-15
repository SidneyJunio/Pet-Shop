package com.progweb.back.equipment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/equipments")
public class EquipmentController {

    @Autowired
    EquipmentService equipmentService;

    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody Equipment equipment) {
        return null;
    }

    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody Equipment equipment) {
        return null;
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        return null;
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(equipmentService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        return null;
    }

}