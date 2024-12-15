package com.chh.weatherReport.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.math.BigDecimal;

@Entity
@Table(name = "country")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Country {

    @Id
    @Column(name = "Code", length = 3, nullable = false)
    private String code;

    @Column(name = "Name", length = 52, nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "Continent", nullable = false)
    private Continent continent;

    @Column(name = "Region", length = 26, nullable = false)
    private String region;

    @Column(name = "SurfaceArea", precision = 10, scale = 2, nullable = false)
    private BigDecimal surfaceArea;

    @Column(name = "IndepYear")
    private Short indepYear;

    @Column(name = "Population", nullable = false)
    private Integer population;

    @Column(name = "LifeExpectancy", precision = 3, scale = 1)
    private BigDecimal lifeExpectancy;

    @Column(name = "GNP", precision = 10, scale = 2)
    private BigDecimal gnp;

    @Column(name = "GNPOld", precision = 10, scale = 2)
    private BigDecimal gnpOld;

    @Column(name = "LocalName", length = 45, nullable = false)
    private String localName;

    @Column(name = "GovernmentForm", length = 45, nullable = false)
    private String governmentForm;

    @Column(name = "HeadOfState", length = 60)
    private String headOfState;

    @Column(name = "Capital")
    private Integer capital;

    @Column(name = "Code2", length = 2, nullable = false)
    private String code2;
}