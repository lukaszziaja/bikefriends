package com.bikefriends.service;

import com.bikefriends.domain.Advertisement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing Advertisement.
 */
public interface AdvertisementService {

    /**
     * Save a advertisement.
     *
     * @param advertisement the entity to save
     * @return the persisted entity
     */
    Advertisement save(Advertisement advertisement);

    /**
     * Get all the advertisements.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Advertisement> findAll(Pageable pageable);

    /**
     * Get the "id" advertisement.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Advertisement findOne(Long id);

    /**
     * Delete the "id" advertisement.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
