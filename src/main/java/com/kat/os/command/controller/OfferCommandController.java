package com.kat.os.command.controller;

import com.kat.os.command.dto.request.CreateOfferJobTDO;
import com.kat.os.command.dto.request.CreateTechDTO;
import com.kat.os.command.dto.request.UpdateOfferTDO;
import com.kat.os.command.service.OfferCommandService;
import com.kat.os.commonDTO.WorkOfferTDO;

import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.CompletableFuture;

@RestController
@CrossOrigin("*")
@RequestMapping("/command/offers")
public class OfferCommandController {
    private final OfferCommandService commandService;

    public OfferCommandController(OfferCommandService commandService) {
        this.commandService = commandService;
    }

    @PostMapping("/addOffer")
    public CompletableFuture<WorkOfferTDO> addOffer(@RequestBody CreateOfferJobTDO offerJobTDO){
        return this.commandService.createOffer(offerJobTDO);
    }
    @PutMapping("/updateOffer")
    public CompletableFuture<String>  updateOffer(@RequestBody UpdateOfferTDO offerTDO)
    {
        return  this.updateOffer(offerTDO);
    }

    public CompletableFuture<String> addTechnology(@RequestBody CreateTechDTO technologyDTO)
    {
          return null;
    }

    @ExceptionHandler
    public ResponseEntity<String> exceptionHandler(Exception exception){
        return  new ResponseEntity<String>(exception.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR);

    }

}
