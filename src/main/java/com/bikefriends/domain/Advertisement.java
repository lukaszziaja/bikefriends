package com.bikefriends.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Advertisement.
 */
@Entity
@Table(name = "advertisement")
public class Advertisement implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Lob
    @Column(name = "body_of_advert")
    private String bodyOfAdvert;

    @Column(name = "post_date")
    private LocalDate postDate;

    @ManyToOne
    private User user;

    public Advertisement() {
    }

    public Advertisement(String title, String bodyOfAdvert, LocalDate postDate) {
        this.title = title;
        this.bodyOfAdvert = bodyOfAdvert;
        this.postDate = postDate;
    }

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Advertisement title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBodyOfAdvert() {
        return bodyOfAdvert;
    }

    public Advertisement bodyOfAdvert(String bodyOfAdvert) {
        this.bodyOfAdvert = bodyOfAdvert;
        return this;
    }

    public void setBodyOfAdvert(String bodyOfAdvert) {
        this.bodyOfAdvert = bodyOfAdvert;
    }

    public LocalDate getPostDate() {
        return postDate;
    }

    public Advertisement postDate(LocalDate postDate) {
        this.postDate = postDate;
        return this;
    }

    public void setPostDate(LocalDate postDate) {
        this.postDate = postDate;
    }

    public User getUser() {
        return user;
    }

    public Advertisement user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Advertisement advertisement = (Advertisement) o;
        if (advertisement.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), advertisement.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Advertisement{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", bodyOfAdvert='" + getBodyOfAdvert() + "'" +
            ", postDate='" + getPostDate() + "'" +
            "}";
    }
}
