# ToyFileBoard

파일 게시판 서브 프로젝트

## skill & library  
 
JAVA (1.8.0)  
MySQL (8.0.30)  
Spring boot (2.7.4)  
Spring Security (2.6.8)  
Maven  
spring-boot-starter-data-jpa  
spring-boot-starter-web  
spring-boot-devtools  
mysql-connector-java  
lombok (1.18.24)  
thymeleaf (2.7.3)  
thymeleaf-extras-springsecurity5  

## ide

Intellij

## db tool

Mysql WorkBench

## Table DDL
schema는 file입니다  

[Member]  
create table member (  
id BIGINT(20) primary key,  
username varchar(200) not null,  
password varchar(200) not null);  

[storage]  
file_id BIGINT(20) primary key,  
org_nm varchar(200),  
saved_nm varchar(200),  
saved_path varchar(200));  

## Note  
1. application.properties의 file.dir은 로컬 환경에 맞게 수정(대신 프로젝트내의 files폴더로 향하게 수정)  
- ex) windows : C:/{기타 등등}
- ex) maxOS : file.dir=/Users/{macbook-id}/torProject/ToyFileBoard/src/main/resources/files/  

2. application.properties의 spring.datasource url, username, password는 로컬 환경에 맞게 변경  

3. csrf는 사용하지 않습니다