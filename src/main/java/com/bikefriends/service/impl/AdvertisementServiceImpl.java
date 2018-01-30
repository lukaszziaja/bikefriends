package com.bikefriends.service.impl;

import com.bikefriends.service.AdvertisementService;
import com.bikefriends.domain.Advertisement;
import com.bikefriends.repository.AdvertisementRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing Advertisement.
 */
@Service
@Transactional
public class AdvertisementServiceImpl implements AdvertisementService{

    private final Logger log = LoggerFactory.getLogger(AdvertisementServiceImpl.class);

    private final AdvertisementRepository advertisementRepository;

    public AdvertisementServiceImpl(AdvertisementRepository advertisementRepository) {
        this.advertisementRepository = advertisementRepository;
    }

    /**
     * Save a advertisement.
     *
     * @param advertisement the entity to save
     * @return the persisted entity
     */
    @Override
    public Advertisement save(Advertisement advertisement) {
        log.debug("Request to save Advertisement : {}", advertisement);
        return advertisementRepository.save(advertisement);
    }

    /**
     * Get all the advertisements.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Advertisement> findAll(Pageable pageable) {
        log.debug("Request to get all Advertisements");
        return advertisementRepository.findAll(pageable);
    }

    /**
     * Get one advertisement by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Advertisement findOne(Long id) {
        log.debug("Request to get Advertisement : {}", id);
        return advertisementRepository.findOne(id);
    }

    /**
     * Delete the advertisement by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Advertisement : {}", id);
        advertisementRepository.delete(id);
    }
}
