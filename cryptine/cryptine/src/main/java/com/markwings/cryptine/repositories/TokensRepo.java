package com.markwings.cryptine.repositories;

import com.markwings.cryptine.models.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokensRepo extends JpaRepository<Token,Integer> {

}
