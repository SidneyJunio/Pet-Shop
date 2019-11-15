package com.progweb.back.equipment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long> {

    public List<Equipment> findByName(String name);

}
