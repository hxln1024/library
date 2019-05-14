﻿# Host: localhost  (Version: 5.5.53)
# Date: 2019-05-14 10:33:37
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "bestdetails"
#

DROP TABLE IF EXISTS `bestdetails`;
CREATE TABLE `bestdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `named` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `press` varchar(255) NOT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `cost` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `purchase` varchar(255) DEFAULT NULL,
  `discount` varchar(255) NOT NULL,
  `sales` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT '1',
  `comments` varchar(255) NOT NULL,
  `descs` varchar(255) DEFAULT NULL,
  `picture` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

#
# Data for table "bestdetails"
#

/*!40000 ALTER TABLE `bestdetails` DISABLE KEYS */;
INSERT INTO `bestdetails` VALUES (1,1,'我们-反乌托邦小说系列·插图珍藏','[俄]叶·伊·扎米亚金 著,顾亚玲 译','江苏文艺出版社','5分','￥29.8','￥8.9','￥8.9','3.0折','1.0','1.0','1条','日记体科幻讽刺小说，综合运用幻想、象征、荒诞、讽刺、现实等手法，描绘了千年之后的一个极权主义社会:大一统王国。','../images/bestdetails-imgs/1.jpg'),(2,2,'外国文学经典·名家名译(全译本) 萨特小说选 (精)','〔法〕萨特 著','江苏文艺出版社','4分','￥46.0','￥22.5','￥8.9','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/2.jpg'),(3,2,'悲剧人偶','东野圭吾','江苏文艺出版社','4分','￥49.5','￥33.0','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/3.jpg'),(4,2,'外国文学经典·名家名译(全译本):茨威格中短篇小说精选集(精)','[奥] 茨威格 著，高中甫，韩耀成 译','江苏文艺出版社','4分','￥48.0','￥25.0','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/4.jpg'),(5,2,'金阁寺','（日本）三岛由纪夫','江苏文艺出版社','4分','￥28.0','￥19.0','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/5.jpg'),(6,2,'名著名译丛书:好兵帅克历险记(精装版)','（捷克）雅·哈谢克','江苏文艺出版社','4分','￥58.0','￥39.4','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/6.jpg'),(7,2,'七年','巫马赫连','江苏文艺出版社','4分','￥28.0','￥19.0','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/7.jpg'),(8,3,'随风飘舞的塑料布','[日]森绘都 著,竺家荣 译','江苏文艺出版社','4分','￥29.8','￥8.1','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/8.jpg'),(9,3,'和我们女儿的谈话','王朔 著','江苏文艺出版社','4分','￥26.0','￥10.9','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/9.jpg'),(10,3,'我们-反乌托邦小说系列·插图珍藏','[俄]叶·伊·扎米亚金 著,顾亚玲 译','江苏文艺出版社','4分','￥29.8','￥8.9','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/1.jpg'),(11,3,'无影灯:渡边淳一自选集','[日]渡边淳一 著','江苏文艺出版社','4分','￥35.0','￥11.2','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/10.jpg'),(12,3,'灰故事-楚尘文化','于','江苏文艺出版社','4分','￥29.8','￥8.9','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/11.jpg'),(13,3,'泡沫-渡边淳一自选集','于','江苏文艺出版社','4分','￥39.0','￥15.6','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/12.jpg'),(14,3,'多斯的城堡','于','江苏文艺出版社','4分','￥29.8','￥11.3','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/13.jpg'),(15,3,'边城','于','江苏文艺出版社','4分','￥28.0','￥9.0','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/14.jpg'),(16,3,'爱伦·坡暗黑故事全集','于','江苏文艺出版社','4分','￥29.8','￥15.5','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/15.jpg'),(17,3,'啼笑因缘','于','江苏文艺出版社','4分','￥25.5','￥11.5','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/16.jpg'),(18,3,'七声','于','江苏文艺出版社','4分','￥28.0','￥13.7','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/17.jpg'),(19,3,'尴尬风流','于','江苏文艺出版社','4分','￥39.0','￥14.0','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/18.jpg'),(20,3,'刺青时代','于','江苏文艺出版社','4分','￥23.0','￥11.3','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/19.jpg'),(21,3,'闷与狂','于','江苏文艺出版社','4分','￥38.0','￥15.5','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/20.jpg'),(22,3,'施托姆中短篇小说经典-新陆文库·德语卷>','于','江苏文艺出版社','4分','￥45.0','￥25.5','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/21.jpg'),(23,3,'天行者','于','江苏文艺出版社','4分','￥18.0','￥7.7','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/22.jpg'),(24,3,'渡边淳一自选集002－白色猎人','于','江苏文艺出版社','4分','￥22.0','￥9.9','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/23.jpg'),(25,3,'洞灵小志 续志 补志-民国的聊斋 最后的搜神','于','江苏文艺出版社','4分','￥48.6','￥18.0','1.0000','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/24.jpg'),(26,3,'海琳日记','于','江苏文艺出版社','4分','￥25.0','￥9.0','￥9.0','3.0折','1.0','1.0','1条','销售','../images/bestdetails-imgs/25.jpg'),(27,4,'随风飘舞的塑料布','[日]森绘都 著,竺家荣 译','重庆大学出版社','4.6分','￥29.8','￥8.1','￥8.1','2.7折','3','1','30条','豆瓣8分，日本人气绘本天后森绘都献给年轻人的励志小说，直木奖获奖作品。著名译者竺家荣继《一个人的好天气》、《窗灯》后又一安静的励志译作。','../images/bestdetails-imgs/8.jpg'),(28,5,'无影灯:渡边淳一自选集','[日]渡边淳一 著','文汇出版社','4.8分','￥35.0','￥12.6','￥12.6','3.6折','2','1','31条','经典日剧《白影》原著小说，渡边“死亡美学”的极致表现。','../images/bestdetails-imgs/10.jpg'),(29,6,'南腔北调集_鲁迅自编文集','鲁迅 著','北京联合出版公司','','￥21.0','￥10.3','￥10.3','4.9折','3','1','3条','南腔北调集_鲁迅自编文集','../images/bestseller-imgs/best04.jpg');
/*!40000 ALTER TABLE `bestdetails` ENABLE KEYS */;
