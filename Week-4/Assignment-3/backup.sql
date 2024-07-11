-- MySQL dump 10.13  Distrib 9.0.0, for macos14 (arm64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	9.0.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'author1@gmail.com','$2a$10$0Rzj9I3.IeEsjpk1vu3JyeAwthYDtR6vVp/uMAPJw3N5/Fs4Ob3T2'),(2,'author2@gmail.com','$2a$10$pHInFzyg/iI0zBANWtmMAePBGO45e8ivEvnX0wFczzkkGuspnKQuW'),(3,'author3@gmail.com','$2a$10$FyLptzYdswJN11577/CKcOeuJhQvOfbVD8sqvD0BaOPiOfjpo1NG6'),(4,'author4@gmail.com','$2a$10$mI32on/0xtYW2QSxAQtZGe8lymZVjhkCXlD8LQH03vI5WqeetEHqe'),(5,'author5@gmail.com','$2a$10$KWknbPoUAgKuMiEOBSMKyus9FVB5tesRyskx6gRRD3W0uuH4eKMMK'),(6,'author6@gmail.com','$2a$10$OSWvpHWfKzJRadr4icUGletXN.4QUCrNa9SLpP8I.w27Ji9lKdrg.'),(7,'author7@gmail.com','$2a$10$8Kt4XKu0ea8TvO5zJcAzJu4ECm1wTrYMQCo7OSK3Kd83FdKt86B9W'),(8,'author8@gmail.com','$2a$10$LTBvPuzQ1R0Lxm.NA1OU4OrFmBtuW83dD6pGmJfXFsVzS6xnll3qa'),(9,'author9@gmail.com','$2a$10$RBVV5Ys09vrZgK1IrTrFJuLhE9Kn5DVaCYphYabe0yCd2Y6UWsWnm'),(10,'author10@gmail.com','$2a$10$8n1SsvJrXutsIevtnPan6ue.wc6i6HdiaSndc/hZ6VECOFw.J5vxe'),(11,'author11@gmail.com','$2a$10$OfWlysdiwXCpzisr9tST6O3d4YPl7pyjJRG5tsdsnQRx3gLqm8Gs2'),(12,'author12@gmail.com','$2a$10$M.kYIDxwRYM6QZB2N/EcnetwTEHAJyksDWmixCaWX0TS9sfZ/HKym'),(13,'author13@gmail.com','$2a$10$4atm6A005ieekgyduE/XSusDmJhr6yuyCCIxwI59JlzNO.ckrsFX6'),(14,'author14@gmail.com','$2a$10$get2UL3gOFMbsiQfPV9H5OksVsb5JUhuti0Byhp1ZfRMbMdas/5cG');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-11 16:08:05
