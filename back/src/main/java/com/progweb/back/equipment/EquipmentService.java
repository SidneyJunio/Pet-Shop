package com.progweb.back.equipment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentService {

    @Autowired
    EquipmentRepository equipmentRepository;

    public Equipment save(Equipment equipment){
        return equipmentRepository.save(equipment);
    }

    public Equipment update(Equipment equipment){ return null;}

    public boolean delete(long id){ return true;}

    public List<Equipment> findAll(){ return equipmentRepository.findAll(); }

    public Equipment findById(long id){ return null;}

    public List<Equipment> findByName(String name){ return null;}

}
