/*
Navicat MySQL Data Transfer

Source Server         : ss
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : db_chaoshi_manger

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2021-04-18 20:49:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin', '123123', '系统管理员', '小王', '1232343234', '34344565', '38489459@qq.com', '女', '阿搜达搜谱');
INSERT INTO `admin` VALUES ('2', 'admin1', '123123', '会计', '1233443545', '212188834', '323432432', '1929939@126.com', '男', '哈圣诞节奥斯卡级');
INSERT INTO `admin` VALUES ('3', 'qqq', '123', '销售员', '孙子', '1738849956', '383949956', '123@123.com', '女', '北京三里屯');
INSERT INTO `admin` VALUES ('4', 'lewis', '123', '库管员', '小李子', null, null, null, null, null);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `price` varchar(101) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('2', '西瓜', '71', '18', 'null');
INSERT INTO `goods` VALUES ('3', '苹果', '135', '12', null);
INSERT INTO `goods` VALUES ('4', '毛巾', '20', '18', 'null');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shoplist` varchar(999) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `ctime` varchar(111) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('2', '[{\"id\":1,\"name\":\"搜索\",\"status\":\"库存正常\",\"num\":\"1\",\"price\":\"111\",\"img\":\"http://192.168.2.103:8080/1612255138022.jpg\"}]', '111', '2021-03-30 18:30:26', '4');
INSERT INTO `orders` VALUES ('3', '[{\"id\":1,\"name\":\"搜索\",\"status\":\"库存正常\",\"num\":\"1\",\"price\":\"111\",\"img\":\"http://192.168.2.103:8080/1612255138022.jpg\"}]', '111', '2021-03-29 18:30:26', '4');
INSERT INTO `orders` VALUES ('4', '[{\"id\":2,\"name\":\"西瓜\",\"status\":\"库存正常\",\"num\":\"1\",\"price\":\"18\",\"img\":\"null\"},{\"id\":4,\"name\":\"毛巾\",\"status\":\"库存正常\",\"num\":\"1\",\"price\":\"18\",\"img\":null}]', '36', '2021-04-01 10:08:11', '5');
INSERT INTO `orders` VALUES ('5', '[{\"id\":2,\"name\":\"西瓜\",\"status\":\"库存正常\",\"num\":\"10\",\"price\":\"18\",\"img\":\"null\"}]', '171', '2021-04-07 16:17:21', '5');
INSERT INTO `orders` VALUES ('6', '[{\"id\":2,\"name\":\"西瓜\",\"status\":\"库存正常\",\"num\":\"9\",\"price\":\"18\",\"img\":\"null\"}]', '153.9', '2021-04-07 16:32:10', '5');
INSERT INTO `orders` VALUES ('7', '[{\"id\":2,\"name\":\"西瓜\",\"status\":\"库存正常\",\"num\":\"5\",\"price\":\"18\",\"img\":\"null\"}]', '85.5', '2021-04-07 17:07:38', '5');
INSERT INTO `orders` VALUES ('8', '[{\"id\":2,\"name\":\"西瓜\",\"status\":\"库存正常\",\"num\":\"5\",\"price\":\"18\",\"img\":\"null\"}]', '85.5', '2021-04-07 17:12:09', '5');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `jifen` varchar(255) DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('4', '1334234233432', 'hah', '110', '113', '324325435435', '3748488@qq.com', '男');
INSERT INTO `user` VALUES ('5', '1213212123234', '孙大圣', '18.0', '4808.1', '343445654654', '234455@163.com', '女');
