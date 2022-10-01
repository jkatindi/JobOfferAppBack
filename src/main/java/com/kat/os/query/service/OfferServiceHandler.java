package com.kat.os.query.service;

import com.kat.os.commonDTO.DegreeDTO;
import com.kat.os.commonDTO.TechnologyDTO;
import com.kat.os.commonDTO.WorkOfferTDO;
import com.kat.os.event.BaseEvent;
import com.kat.os.event.OfferCreatedEvent;
import com.kat.os.event.OfferUpdatedEvent;
import com.kat.os.mappers.OfferMapper;
import com.kat.os.query.repository.WorkOfferRepository;
import com.kat.os.query.tdo.*;
import org.axonframework.eventhandling.EventHandler;
import org.axonframework.queryhandling.QueryHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferServiceHandler {

  private WorkOfferRepository workOfferRepository;
    private final  OfferMapper offerMapper;
    private  final WorkOfferService  offerService;

    @Autowired
    KafkaTemplate<String,WorkOfferTDO> kafkaTemplate;

    public OfferServiceHandler(WorkOfferRepository workOfferRepository, OfferMapper offerMapper, WorkOfferService offerService) {
        this.workOfferRepository = workOfferRepository;
        this.offerMapper = offerMapper;
        this.offerService = offerService;


    }


    @EventHandler
    public void on(OfferCreatedEvent event){
        WorkOfferTDO offerTDO=new WorkOfferTDO();
        offerTDO.setId(event.getId());
        offerTDO.setTitle(event.getTitle());
        offerTDO.setGeneralInfo(event.getGeneralInfo());
        offerTDO.setPositionHeld(event.getPositionHeld());
        offerTDO.setAvailablePlace(event.getAvailablePlace());
        offerTDO.setRequiredDegrees(event.getRequiredDegrees());
        offerTDO.setRequiredTechs(event.getRequiredTechs());
        offerTDO.setGeneralProfile(event.getGeneralProfile());
        offerTDO.setExperMin(event.getExperMin());
        this.offerService.addOfferWork(offerTDO);
        //kafkaTemplate.send("topic-offer",offerTDO);
    }

    @EventHandler
    public void on(OfferUpdatedEvent event){
        WorkOfferTDO offer=this.offerService.getOneWorkOffer(event.getId());
        System.out.println("back ENd  Test "+offer.getId());
        offer.setTitle(event.getTitle());
        offer.setGeneralInfo(event.getGeneralInfo());
        offer.setPositionHeld(event.getPositionHeld());
        offer.setAvailablePlace(event.getAvailablePlace());
        offer.setRequiredTechs(event.getRequiredTechs());
        offer.setRequiredDegrees(event.getRequiredDegrees());
        offer.setGeneralProfile(event.getGeneralProfile());
        offer.setExperMin(event.getExperMin());
        this.offerService.updateOneOfferWork(offer);
    }

    @QueryHandler
    public List<WorkOfferTDO>  on(GetAllQueryOfferDTO getAllQueryOfferDTO){
        return  offerService.getAllWorkOffers();
    }

    @QueryHandler
    public WorkOfferTDO on(GetQueryIdOfferDTO getQueryIdOfferDTO)
    {
        return  offerService.getOneWorkOffer(getQueryIdOfferDTO.getId());
    }

    @QueryHandler
    public List<TechnologyDTO> on(GetAllQueryTechDTO getAllQueryDT){
        return  this.offerService.getTechnologies();
    }
    @QueryHandler
    public TechnologyDTO on(GetQueryIdTechDTO getQueryIdTechDTO){
        return  this.offerService.getOneTechnology(getQueryIdTechDTO.getId());
    }

    @QueryHandler
    public List<DegreeDTO> on(GetAllQueryDegreeDTO getAllQueryDegreeDTO){
        return this.offerService.getAllDegrees();
    }
    @QueryHandler
    public DegreeDTO on(GetQueryIdDegreeDTO getQueryIdDegreeDTO){
        return  this.offerService.getOneDegree(getQueryIdDegreeDTO.getId());
    }

}
