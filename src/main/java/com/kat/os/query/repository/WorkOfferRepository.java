package com.kat.os.query.repository;

import com.kat.os.query.entity.WorkOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface WorkOfferRepository extends JpaRepository<WorkOffer,String> {
}
