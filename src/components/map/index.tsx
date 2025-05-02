// components/MapClient.tsx
"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MapComponent = dynamic(
	() => import("./MapClient").then((mod) => mod.MapClient),
	{
		ssr: false,
		loading: () => (
			<div
				style={{
					height: "100%",
					width: "100%",
					borderRadius: "15px",
					background: "#f0f0f0",
				}}
			/>
		),
	}
);

export function Map() {
	return (
		<Suspense
			fallback={
				<div
					style={{
						height: "100%",
						width: "100%",
						borderRadius: "15px",
						background: "#f0f0f0",
					}}
				/>
			}
		>
			<MapComponent />
		</Suspense>
	);
}
