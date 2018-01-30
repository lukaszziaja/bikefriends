package com.bikefriends.bootstrap;

import com.bikefriends.domain.Advertisement;
import com.bikefriends.domain.Event;
import com.bikefriends.domain.User;
import com.bikefriends.repository.AdvertisementRepository;
import com.bikefriends.repository.EventRepository;
import com.bikefriends.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public class DataInit implements CommandLineRunner {
    @Override
    public void run(String... strings) throws Exception {
        databaseInit();
    }

    private AdvertisementRepository advertisementRepository;

    private EventRepository eventRepository;

    private UserRepository userRepository;


    public DataInit(AdvertisementRepository advertisementRepository, EventRepository eventRepository, UserRepository userRepository) {
        this.advertisementRepository = advertisementRepository;
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
    }

    private void databaseInit() {

        User adminUser;
        List<User> all = userRepository.findAll();
        adminUser = all.get(2);
        System.out.println(adminUser.toString());

        Event event = new Event("Wyjazd na Jasną Górę", LocalDate.now().minusDays(1), "Weźcie kaski i odblaski, zbiróka o 10 rano");
        Event event1 = new Event("Wyjazd na Kopę Biskupią", LocalDate.now().minusDays(3), "Weźcie kaski i odblaski, zbiróka o 10 rano");
        Event event2 = new Event("Wyjazd na Jasną Górę", LocalDate.now().plusDays(12), "Weźcie kaski i odblaski, zbiróka o 10 rano");
        Event event3 = new Event("Wyjazd na Jasną Górę", LocalDate.now().plusDays(20), "Weźcie kaski i odblaski, zbiróka o 10 rano");

        event.setUser(adminUser);
        event1.setUser(adminUser);
        event2.setUser(adminUser);
        event3.setUser(adminUser);

        eventRepository.save(event);
        eventRepository.save(event1);
        eventRepository.save(event2);
        eventRepository.save(event3);

        Advertisement advertisement = new Advertisement("Ogłoszenie w związku z wyjazdme 16 stycznia", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros justo, ullamcorper et erat a, egestas posuere metus. Ut eget rhoncus sem. Vestibulum vitae pulvinar ex. Vivamus mollis consectetur dolor, vitae vulputate tellus laoreet in. Phasellus commodo ligula laoreet nisl hendrerit aliquam. Suspendisse sed orci faucibus, faucibus lectus sit amet, posuere tortor. Phasellus sit amet cursus purus. Duis in dolor at mauris mattis feugiat. Curabitur faucibus, est eget lobortis dignissim, nisl nulla posuere nulla, id efficitur mi ante blandit enim.", LocalDate.now());
        Advertisement advertisement1 = new Advertisement("Ogłoszenie w związku z wyjazdme 16 stycznia", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros justo, ullamcorper et erat a, egestas posuere metus. Ut eget rhoncus sem. Vestibulum vitae pulvinar ex. Vivamus mollis consectetur dolor, vitae vulputate tellus laoreet in. Phasellus commodo ligula laoreet nisl hendrerit aliquam. Suspendisse sed orci faucibus, faucibus lectus sit amet, posuere tortor. Phasellus sit amet cursus purus. Duis in dolor at mauris mattis feugiat. Curabitur faucibus, est eget lobortis dignissim, nisl nulla posuere nulla, id efficitur mi ante blandit enim.", LocalDate.now());
        Advertisement advertisement2 = new Advertisement("Ogłoszenie w związku z wyjazdme 16 stycznia", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros justo, ullamcorper et erat a, egestas posuere metus. Ut eget rhoncus sem. Vestibulum vitae pulvinar ex. Vivamus mollis consectetur dolor, vitae vulputate tellus laoreet in. Phasellus commodo ligula laoreet nisl hendrerit aliquam. Suspendisse sed orci faucibus, faucibus lectus sit amet, posuere tortor. Phasellus sit amet cursus purus. Duis in dolor at mauris mattis feugiat. Curabitur faucibus, est eget lobortis dignissim, nisl nulla posuere nulla, id efficitur mi ante blandit enim.", LocalDate.now());
        Advertisement advertisement3 = new Advertisement("Ogłoszenie w związku z wyjazdme 16 stycznia", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros justo, ullamcorper et erat a, egestas posuere metus. Ut eget rhoncus sem. Vestibulum vitae pulvinar ex. Vivamus mollis consectetur dolor, vitae vulputate tellus laoreet in. Phasellus commodo ligula laoreet nisl hendrerit aliquam. Suspendisse sed orci faucibus, faucibus lectus sit amet, posuere tortor. Phasellus sit amet cursus purus. Duis in dolor at mauris mattis feugiat. Curabitur faucibus, est eget lobortis dignissim, nisl nulla posuere nulla, id efficitur mi ante blandit enim.", LocalDate.now());

        advertisement.setUser(adminUser);
        advertisement1.setUser(adminUser);
        advertisement2.setUser(adminUser);
        advertisement3.setUser(adminUser);

        advertisementRepository.save(advertisement);
        advertisementRepository.save(advertisement1);
        advertisementRepository.save(advertisement2);
        advertisementRepository.save(advertisement3);

    }
}
