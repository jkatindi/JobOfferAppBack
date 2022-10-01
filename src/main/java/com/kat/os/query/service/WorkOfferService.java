package com.kat.os.query.service;

import com.kat.os.commonDTO.DegreeDTO;
import com.kat.os.commonDTO.TechnologyDTO;
import com.kat.os.commonDTO.WorkOfferTDO;

import java.util.List;

public interface WorkOfferService {
    List<WorkOfferTDO> getAllWorkOffers();
    WorkOfferTDO getOneWorkOffer(String id);
    WorkOfferTDO addOfferWork(WorkOfferTDO offerTDO);
    void updateOneOfferWork(WorkOfferTDO workOffer);
    DegreeDTO addOneDegree(DegreeDTO degree);
    List<DegreeDTO> getAllDegrees();
    DegreeDTO getOneDegree(Long id);
    TechnologyDTO addOneTechnology(TechnologyDTO tech);
    List<TechnologyDTO> getTechnologies();
    TechnologyDTO getOneTechnology(Long id);

}

