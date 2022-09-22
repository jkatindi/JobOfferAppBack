package com.kat.os;

import com.kat.os.commonDTO.WorkOfferTDO;
import com.kat.os.mappers.OfferMapper;
import com.kat.os.query.entity.Degree;
import com.kat.os.query.entity.InfoGeneral;
import com.kat.os.query.entity.TechSkill;
import com.kat.os.query.entity.WorkOffer;
import com.kat.os.query.repository.DegreeRepository;
import com.kat.os.query.repository.TechSkillRepository;
import com.kat.os.query.repository.WorkOfferRepository;
import com.kat.os.query.service.WorkOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import java.util.*;
import java.util.stream.Collectors;


@SpringBootApplication
public class OfferServiceApplication  implements CommandLineRunner {
    @Autowired
	private DegreeRepository degreeRepository;
	@Autowired
	private TechSkillRepository techSkillRepository;
	@Autowired
	private WorkOfferRepository repositoryOffer;
	public static void main(String[] args) {
		SpringApplication.run(OfferServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
      /*degreeRepository.save(new Degree("Bachelor"));
	  degreeRepository.save(new Degree("Master"));
	  degreeRepository.save(new Degree("Certified Java"));
	  degreeRepository.save(new Degree("Web Master"));
		String techs[] = new String[] { "Java 8+ ", "PHP5", "CSS", "Angular 8+","Api Rest","Microservises",
		"Apache Kafka","Kafka stream","Docker","Kubernates","Design Patterns","Principe SOLID",
		"MySql","Jpa Hibernate","Spring MVC","Spring Boot","Jsp","Javascript","C#","React", "express", "GraphQL"
		};

		Arrays.asList(techs).forEach(
				tech->{ this.techSkillRepository.save(new TechSkill(tech)); }
		);*/
		/* WorkOffer offer=new WorkOffer();
		InfoGeneral  infoGeneral=new InfoGeneral("Bruxelles"," entreprise de creation appli java",
				"JKLSPRL");
		offer.setTitle("Developpeur Java EE"); offer.setAvailablePlace(4);
		offer.setGeneralInfo(infoGeneral); offer.setGeneralProfile("programmeur  java experimente");
		offer.setPositionHeld("gestion equipe programmeur");  offer.setExperMin(5);
		List<TechSkill> techSkills=new ArrayList<>();
		List<Degree> degrees=new ArrayList<>();
		techSkills.add(techSkillRepository.getById(new Long(1)));
		techSkills.add(techSkillRepository.getById(new Long(2)));
		techSkills.add(techSkillRepository.getById(new Long(3)));
		techSkills.add(techSkillRepository.getById(new Long(4)));
		degrees.add(degreeRepository.getById(new Long(1)));
		degrees.add(degreeRepository.getById(new Long(3)));
		offer.setRequiredTechs(techSkills); offer.setRequiredDegrees(degrees);
		offer.setId(UUID.randomUUID().toString());
		this.repositoryOffer.save(offer);  */









	}
}
