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
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (91,'The Future of AI in Healthcare','Artificial intelligence is revolutionizing healthcare by improving diagnostics and personalized treatments.',53),(92,'AI and Its Impact on Transportation','Self-driving cars and intelligent traffic systems are making transportation safer and more efficient.',54),(93,'The Role of AI in Education','AI is transforming education through personalized learning experiences and intelligent tutoring systems.',55),(94,'AI in Financial Services','Financial institutions are using AI for fraud detection, risk management, and personalized customer services.',56),(95,'AI-Powered Chatbots','Chatbots driven by AI are enhancing customer service by providing instant and accurate responses.',57),(96,'Machine Learning and Big Data','Machine learning algorithms are leveraging big data to uncover hidden patterns and insights.',58),(97,'AI in Manufacturing','Automation and AI are streamlining manufacturing processes, leading to increased efficiency and reduced costs.',59),(98,'The Ethics of AI','As AI advances, ethical considerations around bias, privacy, and decision-making become increasingly important.',60),(99,'Natural Language Processing','NLP enables computers to understand and generate human language, facilitating better human-computer interactions.',61),(100,'AI in Entertainment','From content recommendation systems to virtual reality, AI is transforming the entertainment industry.',62),(101,'AI for Environmental Sustainability','AI is being used to monitor and mitigate environmental impacts, promoting sustainability.',63),(102,'AI in Retail','Retailers are using AI to enhance customer experiences through personalized recommendations and inventory management.',64),(103,'AI and Cybersecurity','AI is helping to detect and respond to cyber threats more quickly and accurately.',65),(104,'The Evolution of AI','From simple algorithms to complex neural networks, AI has undergone significant evolution over the years.',66),(105,'AI and Robotics','Combining AI with robotics is leading to advancements in automation and intelligent machines.',67),(106,'AI in Agriculture','Farmers are using AI to optimize crop yields and manage resources more effectively.',68),(107,'AI in Space Exploration','AI is assisting in the analysis of space data and the operation of autonomous spacecraft.',69),(108,'AI in the Legal Industry','Legal professionals are leveraging AI for document review, legal research, and case prediction.',70),(109,'AI in Human Resources','AI is improving recruitment processes by identifying the best candidates through data analysis.',71),(110,'AI and Autonomous Systems','Autonomous systems, powered by AI, are capable of performing tasks without human intervention.',72),(111,'AI for Personalized Marketing','Marketers are using AI to deliver personalized content and advertisements to consumers.',73),(112,'AI in Smart Cities','AI is enabling the development of smart cities with efficient resource management and improved quality of life.',74),(113,'AI and the Internet of Things','The integration of AI and IoT is creating intelligent systems that can interact and make decisions autonomously.',75),(114,'AI in Healthcare Diagnostics','AI is enhancing diagnostic accuracy and speed, leading to better patient outcomes.',76),(115,'AI in Supply Chain Management','Supply chains are becoming more efficient and resilient through AI-driven optimization and forecasting.',77),(116,'AI in Gaming','AI is creating more realistic and engaging gaming experiences through advanced algorithms and machine learning.',53),(117,'AI and Predictive Analytics','Predictive analytics powered by AI is helping businesses make informed decisions based on data insights.',54),(118,'AI for Disaster Response','AI is aiding in disaster response by analyzing data to predict and respond to natural disasters.',55),(119,'The Future of AI Research','Ongoing AI research is focused on creating more advanced, ethical, and human-like artificial intelligence.',56),(120,'AI in Content Creation','AI is being used to generate content, from articles to music and art, with impressive creativity.',57);
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
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (53,'user1@example.com','password1'),(54,'user2@example.com','password2'),(55,'user3@example.com','password3'),(56,'user4@example.com','password4'),(57,'user5@example.com','password5'),(58,'user6@example.com','password6'),(59,'user7@example.com','password7'),(60,'user8@example.com','password8'),(61,'user9@example.com','password9'),(62,'user10@example.com','password10'),(63,'user11@example.com','password11'),(64,'user12@example.com','password12'),(65,'user13@example.com','password13'),(66,'user14@example.com','password14'),(67,'user15@example.com','password15'),(68,'user16@example.com','password16'),(69,'user17@example.com','password17'),(70,'user18@example.com','password18'),(71,'user19@example.com','password19'),(72,'user20@example.com','password20'),(73,'user21@example.com','password21'),(74,'user22@example.com','password22'),(75,'user23@example.com','password23'),(76,'user24@example.com','password24'),(77,'user25@example.com','password25');
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

-- Dump completed on 2024-07-11 10:17:10
