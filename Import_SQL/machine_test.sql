-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2022 at 02:22 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `machine_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brand_name`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
(1, 'turtle', 'images\\2021-10-20T16-42-47.661Z-images (46).jpeg', '2021-11-27 18:52:46', '2021-11-27 18:52:46'),
(2, 'Kawasaki', 'images\\2022-01-11T15-29-58.178Z-images (40).jpeg', '2022-01-11 15:29:58', '2022-01-11 15:29:58'),
(3, 'hoffman', 'images\\2022-01-21T10-27-41.678Z-7c07ede2865baa8deeeb717af1a2a684.jpg', '2022-01-21 10:27:41', '2022-01-21 10:27:41'),
(4, 'Philips', 'images\\2022-02-11T19-39-24.609Z-images (25).jpeg', '2022-02-11 19:39:24', '2022-02-11 19:39:24'),
(5, 'Tesla', 'C:\\Mern_By_KD\\backend\\images\\1690176c-709c-41da-90e2-72ca67386266-_dc01d136-3dcc-11e6-86cd-639e2418d1d4.JPG', '2022-02-11 20:47:26', '2022-02-11 20:47:26'),
(6, 'Titan', 'C:\\Mern_By_KD\\uploads\\8af807df-7ca8-49e9-9475-3ecb5914fe43-603964-308302-tabu.jpg', '2022-02-11 20:54:47', '2022-02-11 20:54:47'),
(7, 'Lotus', 'C:\\Mern_By_KD\\uploads\\8c56e8c9-3f14-4dad-8a18-7b2e272913b8-2a0a80a1-6ee5-4492-add5-1e1d0c37dffe.jpeg', '2022-02-11 21:28:25', '2022-02-11 21:28:25'),
(8, 'Samsung', 'C:\\Mern_By_KD\\uploads\\a9127f4c-dee4-4007-b879-71bd30a34cc8-422ede9b98454079300ee8b61d4f13a1.jpg', '2022-02-11 21:30:12', '2022-02-11 21:30:12'),
(9, 'Roxy', 'uploads\\63cca33c-6e22-4f37-95bb-d48756bc940d-akshay-kumar-in-different-look-14.png', '2022-02-12 08:54:50', '2022-02-12 08:54:50'),
(10, 'Dell', 'uploads\\132293a0-1456-4f7e-88a4-5cdfbaf87d52-7c07ede2865baa8deeeb717af1a2a684.jpg', '2022-02-12 09:11:24', '2022-02-12 09:11:24'),
(11, 'Reebok', 'uploads\\d49064bf-a569-41f8-85b1-bb5193a3b1fa-82dc6_John-Abraham-body-768x768.jpg', '2022-02-12 09:22:12', '2022-02-12 09:22:12');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `createdAt`, `updatedAt`) VALUES
(1, 'style', '2021-11-27 18:59:18', '2021-11-27 18:59:18'),
(2, 'hair care', '2022-01-21 09:56:29', '2022-01-21 09:56:29'),
(3, 'Electronics', '2022-02-11 20:02:46', '2022-02-11 20:02:46'),
(4, 'Outdoor', '2022-02-12 13:31:25', '2022-02-12 13:31:25'),
(5, 'Grooming', '2022-02-13 05:50:28', '2022-02-13 05:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `selling_price` double NOT NULL,
  `discount_price` double NOT NULL,
  `product_code` int(11) NOT NULL,
  `product_qty` int(11) NOT NULL,
  `status` double NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `brandId` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `imageUrl`, `color`, `selling_price`, `discount_price`, `product_code`, `product_qty`, `status`, `description`, `createdAt`, `updatedAt`, `userId`, `brandId`, `categoryId`) VALUES
(1, 'shirt', 'images\\2021-10-20T16-42-47.661Z-images (46).jpeg', 'red', 750, 550, 58745, 21, 30, 'must buy amazing product', '2021-11-27 19:01:46', '2021-11-27 19:01:46', 1, 1, 1),
(2, 'car', 'images\\2021-11-23T06-00-55.377Z-download.jpeg', 'white', 1500, 1000, 5478, 30, 30, 'jddgdgdh  hdhdh  sjsh', '2021-11-27 19:07:20', '2021-11-27 19:07:20', 1, 1, 1),
(3, 'coat', 'images\\2021-10-20T16-42-47.661Z-images (46).jpeg', 'black', 9000, 7500, 1254, 20, 20, 'jdhdh shshs nshsh', '2021-11-27 19:11:29', '2021-11-27 19:11:29', 1, 1, 1),
(4, 'Shirt', 'images\\2021-10-20T16-42-47.661Z-images (46).jpeg', 'blue', 1350, 1110, 5428, 50, 50, 'dhddj shshs shsh', '2021-11-27 19:13:55', '2021-11-27 19:13:55', 1, 1, 1),
(5, 'Blazer', 'images\\2021-10-20T16-42-47.661Z-images (46).jpeg', 'grey', 2500, 1999, 5478, 30, 30, 'ksjs hdhd mssh', '2021-11-27 19:16:18', '2021-11-27 19:16:18', 1, 1, 1),
(6, 'shoe', 'images\\2022-01-11T16-59-48.186Z-Dodge Challenger.jpeg', 'black', 2500, 2000, 55421, 3, 3, 'juytr vfds', '2022-01-11 16:59:48', '2022-01-11 16:59:48', 6, 1, 1),
(9, 'Celling Fan', 'uploads\\3380dd5e-f0ec-4917-8a95-abba3b91ded2-2017-audi-r8-spyder-instrumented-test-review-car-and-driver-photo-683069-s-original.jpg', 'White', 2541, 213, 5478, 213, 213, 'Nice Fan Awesome Quality', '2022-02-12 09:51:10', '2022-02-12 09:51:10', 6, 9, 3),
(10, 'Smart Android TV', 'uploads\\534ac468-1bf8-48da-980f-01fdc05054f4-21042016-Moto-Harley-Davidson.jpg', 'Redish', 1245, 200, 2222, 54522, 54522, 'jhynb nvcd', '2022-02-12 09:52:55', '2022-02-12 13:29:08', 6, 10, 3),
(15, 'Samsung On8', 'uploads\\c3a7478f-a8fb-41cd-80aa-932ab7a9327f-Samsung-Galaxy-On8-2018.jpg', 'Blue', 18000, 12500, 3254, 33, 33, 'Smooth to use and Amazing Viewing Experience.', '2022-02-24 13:09:36', '2022-02-24 13:09:36', 6, 8, 3);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('42Rb6PpwtI8tZVLfYjCCCS8pOsWNUNVo', '2022-02-25 08:58:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}', '2022-02-24 08:58:55', '2022-02-24 08:58:55'),
('8eb-STI9GWhLseC_-hoGhIfVALuZVlVM', '2022-02-25 13:09:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":6,\"name\":\"Hariom\",\"email\":\"hariom42@gmail.com\",\"password\":\"$2a$12$WOZxAidcV/fkma.3n9v17O.WHTkWJ6I7TiXlMI/CVCPuu826j4MWC\",\"isAdmin\":true,\"createdAt\":\"2022-02-24T09:51:04.000Z\",\"updatedAt\":\"2022-02-24T09:51:04.000Z\"}}', '2022-02-24 13:07:35', '2022-02-24 13:09:42'),
('XU3Phg0jsyCtXIYdrdLkEA827GhU8ppO', '2022-02-25 08:58:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}', '2022-02-24 08:58:55', '2022-02-24 08:58:55');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'Rahul', 'rahul21@gmail.com', '$2a$12$RRdQpLxcTTC8uDHfxosQIOzgRUQMjfyIjBLEEydhvgFBfuNS9Ad0q', 1, '2022-02-24 09:51:04', '2022-02-24 09:51:04'),
(6, 'Hariom', 'hariom42@gmail.com', '$2a$12$WOZxAidcV/fkma.3n9v17O.WHTkWJ6I7TiXlMI/CVCPuu826j4MWC', 1, '2022-02-24 09:51:04', '2022-02-24 09:51:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `brandId` (`brandId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
