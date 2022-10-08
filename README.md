![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=ToyFileBoard&fontSize=90&animation=fadeIn&fontAlignY=38&desc=파일_게시판_서브_프로젝트&descAlignY=51&descAlign=62)
<div align="center">
	<img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white" />
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" />
    <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=Spring Boot&logoColor=white" />
    <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=flat&logo=Spring Security&logoColor=white" />
    <img src="https://img.shields.io/badge/Maven-1572B6?style=flat&logoColor=white" />
    <img src="https://img.shields.io/badge/Thymeleaf-005F0F?style=flat&logo=Thymeleaf&logoColor=white" />
    <img src="https://img.shields.io/badge/IntelliJ IDEA-000000?style=flat&logo=IntelliJ IDEA&logoColor=white" />
</div>

## ⚙️ Skill & Library
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

---

## 💿 IDE

Intellij

---

## 🗄 DB Tool

Mysql WorkBench

---

## 📁 Table DDL
schema는 file입니다  

- **[Member]**  
>create table member (  
id BIGINT(20) primary key,  
username varchar(200) not null,  
password varchar(200) not null);  
  

- **[storage]**  
>file_id BIGINT(20) primary key,  
org_nm varchar(200),  
saved_nm varchar(200),  
saved_path varchar(200));  

---

## 📒 Note  
1. application.properties의 file.dir은 로컬 환경에 맞게 수정(대신 프로젝트내의 files폴더로 향하게 수정)  
- ex) windows : C:/{기타 등등}
- ex) maxOS : file.dir=/Users/{macbook-id}/torProject/ToyFileBoard/src/main/resources/files/  

2. application.properties의 spring.datasource url, username, password는 로컬 환경에 맞게 변경  
  

3. csrf는 사용하지 않습니다