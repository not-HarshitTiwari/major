package com.markwings.cryptine.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Table(name = "tokens")
@Entity
@Data
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String tokenName;

    private String description;

    private int upVotes = 0;

    private int downVotes = 0;

    private String link;

    @Lob
    private byte[] tokenImg;

    private String tokenImgName;

    private String tokenImgType;

    @JsonFormat(shape= JsonFormat.Shape.STRING,pattern = "dd-MM-yyyy")
    private Date listedOn;

    public int getId() {
        return id;
    }

    public String getTokenName() {
        return tokenName;
    }

    public String getDescription() {
        return description;
    }

    public int getUpVotes() {
        return upVotes;
    }

    public int getDownVotes() {
        return downVotes;
    }

    public byte[] getTokenImg() {
        return tokenImg;
    }

    public String getTokenImgName() {
        return tokenImgName;
    }

    public String getTokenImgType() {
        return tokenImgType;
    }

    public Date getListedOn() {
        return listedOn;
    }

    public void setTokenImg(byte[] tokenImg) {
        this.tokenImg = tokenImg;
    }

    public void setTokenImgName(String tokenImgName) {
        this.tokenImgName = tokenImgName;
    }

    public void setTokenImgType(String tokenImgType) {
        this.tokenImgType = tokenImgType;
    }
}
