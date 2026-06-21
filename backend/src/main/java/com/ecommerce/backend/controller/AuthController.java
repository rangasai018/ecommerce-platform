package com.ecommerce.backend.controller;

import com.ecommerce.backend.model.User;
import com.ecommerce.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

   @PostMapping("/register")
   public Object register(@RequestBody User user) {
    Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
    if (existingUser.isPresent()) {
        return "Email already registered";
    }
    return userRepository.save(user);
}

   @PostMapping("/login")
   public Object login(@RequestBody User loginUser) {
    Optional<User> user = userRepository.findByEmail(loginUser.getEmail());
    if (user.isPresent() && user.get().getPassword().equals(loginUser.getPassword())) {
        return user.get();
    }
    return "Invalid Email or Password";
}

}