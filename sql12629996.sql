-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Waktu pembuatan: 09 Jul 2023 pada 16.00
-- Versi server: 8.0.33
-- Versi PHP: 7.4.3-4ubuntu2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION*_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql12629996`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `sender_name` varchar(250) NOT NULL,
  `sender_mail` varchar(250) NOT NULL,
  `sender_phone` varchar(250) NOT NULL,
  `origin_city` varchar(250) NOT NULL,
  `origin_address` varchar(250) NOT NULL,
  `receiver_name` varchar(250) NOT NULL,
  `receiver_phone` varchar(250) NOT NULL,
  `destination_city` varchar(250) NOT NULL,
  `destination_address` varchar(250) NOT NULL,
  `goods_type` varchar(250) NOT NULL,
  `goods_count` int NOT NULL,
  `goods_weight` int NOT NULL,
  `goods_length` int NOT NULL,
  `goods_width` int NOT NULL,
  `goods_info` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `sender_name`, `sender_mail`, `sender_phone`, `origin_city`, `origin_address`, `receiver_name`, `receiver_phone`, `destination_city`, `destination_address`, `goods_type`, `goods_count`, `goods_weight`, `goods_length`, `goods_width`, `goods_info`, `created_at`) VALUES
(1, 'asdasd', 'asd@asd.com', '0812341234', 'Medan', 'asdasdasdasd', 'asdasd', '08123123123', 'DKI Jakarta & Jawa Barat Full Charter Truck Besar Tronton Standard', 'asdasdasda', 'asdad', 1, 1, 1, 1, 'asdasdasdasd', '2023-07-09 13:57:48'),
(2, 'kaban', 'kaban@pantek.com', '0812341234', 'Medan', 'pantek panten pantek', 'pan pan pan pantek', '0812341234', 'Tangerang Full Charter Truck Besar Tronton Standard', 'asdasdasda', 'asdaoasd', 1, 1, 1, 1, 'asdasdasda', '2023-07-09 13:59:46');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
