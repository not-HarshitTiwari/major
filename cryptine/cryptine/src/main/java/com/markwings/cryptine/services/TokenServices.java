package com.markwings.cryptine.services;

import com.markwings.cryptine.models.Token;
import com.markwings.cryptine.repositories.TokensRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class TokenServices{

    @Autowired
    private TokensRepo tokens;


    public List<Token> getTokens(){
        return tokens.findAll();
    }

    public Token getTokenById(int id){
        return tokens.findById(id).orElse(new Token());
    }

    public void addToken(Token token, MultipartFile image) throws IOException {
        try {
            token.setTokenImgName(image.getName());
            token.setTokenImgType(image.getContentType());
            token.setTokenImg(image.getBytes());
            tokens.save(token);
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public void updateToken(Token token){
        tokens.save(token);
    }

    public boolean deleteToken(int id){
        tokens.deleteById(id);
        System.out.println(id);
        return true;
//                !tokens.existsById(id);
    }
}