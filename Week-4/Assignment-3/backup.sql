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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'a@gmail.com','abc123'),(2,'b@gmail.com','abc123'),(4,'c@gmail.com','abc123'),(11,'a@q','qq'),(12,'a@a','aaa'),(13,'eqeq@qeqe','qeq'),(14,'q@q','qeqe'),(15,'a@qadad','qq'),(16,'eq@qq','qq'),(17,'ada@ad','qeqe'),(18,'eqeq@eqeqqqq','qq'),(19,'qeqe@qeq','eqeq'),(20,'eq@eqe','eq'),(21,'eqe@qeq','qeq'),(22,'testnew@1','123'),(23,'a@aliyun.com','adadad'),(24,'131@3131kkk','1313'),(25,'eqe@qeqqqq','qq'),(26,'eqe@eqeqeeqeeq','qeq'),(27,'eqeq@eqe','qeqe'),(28,'adad@dad','qeqe'),(29,'qeeq@qeqe','eqeq'),(30,'eqe@qe','eq'),(31,'78@454','11'),(32,'dda@ad','dad'),(33,'313@qq','33131'),(34,'31@313','313'),(35,'da@adad','qeqe'),(36,'a@b','qe'),(37,'a@aaaaaaaa','a'),(38,'a@ab','aa'),(39,'a@aaaa','1234qeqe'),(40,'q@qqeqe','qeq'),(41,'qeqe@qeqeqeqeqeq','q'),(42,'adadadad@dada','dad'),(43,'test@1','test'),(44,'1@1','1');
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

-- Dump completed on 2024-07-10 15:46:43
