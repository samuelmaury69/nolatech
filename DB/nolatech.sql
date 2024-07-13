-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-07-2024 a las 12:55:50
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nolatech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `phone` int(11) NOT NULL,
  `name` varchar(28) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `phone`, `name`) VALUES
(2, 'asdasd2222', 'asdas@asdas.com', '$2a$10$FlBNksvQOPE2UN3kwDIm9OfK665k8Ll96TicIsAEf2e2c8iR3dkAC', 2134234, 'asdasd333333'),
(3, 'asdasd', 'asdas@asdas.com', '$2a$10$VR8e1ZLMiOxXJI0348Vrl.5miE9Z1eb4Iuo3R6FfCuIhPDaChpkMq', 2134234, 'asdasd0000'),
(5, 'asdasd', 'asd@asdas.com', '$2a$10$dgBSugqCVVW3n3u9AEhePuBhINeAbnIGnyr0pRW19BFoMVXatXaRC', 544654, 'asdasd'),
(10, '321321', '321321@64654.com', '$2a$10$TR5WmvWHtciGYOTZ/IOogOWvg.krvSP5cW4OZRTRFGuoyB2CZp9S2', 321321, '3213'),
(11, 'asdasd', '321351@2222', '$2a$10$VPQyUabHFoaHIRoqAbv4POw13hCLbmPGKiUUkaaaI35xuuhiA23Ky', 2134234, 'asdasd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
