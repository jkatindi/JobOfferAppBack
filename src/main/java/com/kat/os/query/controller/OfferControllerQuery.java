package com.kat.os.query.controller;

import com.kat.os.commonDTO.DegreeDTO;
import com.kat.os.commonDTO.TechnologyDTO;
import com.kat.os.commonDTO.WorkOfferTDO;
import com.kat.os.query.service.WorkOfferService;
import com.kat.os.query.tdo.*;
import org.axonframework.messaging.responsetypes.ResponseTypes;
import org.axonframework.queryhandling.QueryGateway;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/query")
public class OfferControllerQuery {
    private final QueryGateway gateway;


    public OfferControllerQuery(QueryGateway gateway, WorkOfferService offerService) {
        this.gateway = gateway;
    }

    @GetMapping("/offers/all")
    public List<WorkOfferTDO> getAllOfferWork(){
        return  this.gateway.query(new GetAllQueryOfferDTO(),
                ResponseTypes.multipleInstancesOf(WorkOfferTDO.class)).join();
    }

    @GetMapping("/offers/all/{id}")
    public WorkOfferTDO getOneOfferID(@PathVariable String id){
        return this.gateway.query(
                new GetQueryIdOfferDTO(id),ResponseTypes.instanceOf(WorkOfferTDO.class)).join();
    }
    @GetMapping("/technologies/all")
    public List<TechnologyDTO> getAllTechSkills(){
        return this.gateway.query(new GetAllQueryTechDTO(),
                        ResponseTypes.multipleInstancesOf(TechnologyDTO.class)).join();
    }

    @GetMapping("/technologies/{id}")
    public TechnologyDTO getOneTechnology(@PathVariable Long id){
        return  this.gateway.query(new GetQueryIdTechDTO(id),
                ResponseTypes.instanceOf(TechnologyDTO.class)).join();
    }

    @GetMapping("/degrees/all")
    public List<DegreeDTO> getAllDegrees(){
        return  this.gateway.query(new GetAllQueryDegreeDTO(),
                ResponseTypes.multipleInstancesOf(DegreeDTO.class)).join();
    }

    @GetMapping("/degrees/{id}")
    public DegreeDTO getOneDegree(@PathVariable Long id){
        return  this.gateway.query(new GetQueryIdDegreeDTO(id),
                        ResponseTypes.instanceOf(DegreeDTO.class)).join();
    }




}
