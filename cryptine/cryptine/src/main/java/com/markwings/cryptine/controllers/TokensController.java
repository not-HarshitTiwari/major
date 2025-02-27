package com.markwings.cryptine.controllers;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.markwings.cryptine.models.Token;
import com.markwings.cryptine.services.TokenServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RequestMapping("/api")
@RestController
@CrossOrigin(origins = "*")
public class TokensController {

    private TokenServices tokenServices;
    @Autowired
    public void setTokenServices(TokenServices tokenServices) {
        this.tokenServices = tokenServices;
    }

    @GetMapping("/")
    public String home(){
        return "Hello World";
    }

    @GetMapping("/tokens")
    public ResponseEntity<List<Token>> getTokens(){
        List<Token> tokens = tokenServices.getTokens();
//        if (tokens.isEmpty()){
//            return ResponseEntity.notFound().build();
//        } else {
//            return new ResponseEntity<>(tokens,HttpStatus.OK);
//        }
        return new ResponseEntity<>(tokens,HttpStatus.OK);
    }

    @GetMapping("/tokens/{tokenId}")
    public ResponseEntity<Token> getToken(@PathVariable int tokenId){
        Token token = tokenServices.getTokenById(tokenId);
        if (token!=null) return ResponseEntity.ok(token);
        else return ResponseEntity.notFound().build();
    }

    @PostMapping(path = "/addToken",consumes = {"multipart/form-data"})
    public ResponseEntity<Token> addToken(@ModelAttribute Token token, @RequestPart MultipartFile image) throws IOException {
//        ObjectMapper objectMapper = new ObjectMapper();
//        Token token = objectMapper.readValue(tokenJSON, Token.class);
        tokenServices.addToken(token,image);
        Token t = tokenServices.getTokenById(token.getId());
        if(t!=null) return new ResponseEntity<>(t,HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }

    @PutMapping("/updateToken")
    public ResponseEntity<Token> updateToken(@RequestPart Token token, @RequestPart MultipartFile image) throws IOException {
        tokenServices.addToken(token,image);
        token = tokenServices.getTokenById(token.getId());
        return new ResponseEntity<>(token,HttpStatus.FOUND);
    }

    @DeleteMapping("/deleteToken/{id}")
    public ResponseEntity<Boolean> deleteToken(@RequestParam int id){
//        boolean deleted = tokenServices.deleteToken(tokenDTO.getId());
        boolean deleted=tokenServices.deleteToken(id);

        if (deleted){
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.EXPECTATION_FAILED);
    }

    // Data Transfer Object for Request Body
    static class TokenDTO{
        private int id;

        public int getId() {
            return id;
        }
    }
}