package com.chh.weatherReport.config;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.springframework.context.annotation.Bean;

public class QuerydslConfig {
    @Bean
    public JPAQueryFactory jpaQueryFactory  (EntityManager entityManager){
        return new JPAQueryFactory(entityManager);
    }
}
