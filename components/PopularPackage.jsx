"use client";

import React, { useState } from "react";
import {
    Heart,
    MapPin,
    Calendar,
    Users,
    ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PopularPackage = () => {
    const [favorites, setFavorites] = useState(new Set());
    const [hoveredCard, setHoveredCard] = useState(null);

    const packages = [
        {
            id: 1,
            name: "London",
            country: "United Kingdom",
            duration: "3 Days 2 Nights",
            price: 35000,
            groupSize: "2-8 people",
            highlights: ["Big Ben", "Tower Bridge", "British Museum"],
            image:
                "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
        },
        {
            id: 2,
            name: "Bali",
            country: "Indonesia",
            duration: "4 Days 3 Nights",
            price: 24000,
            groupSize: "2-6 people",
            highlights: ["Ubud Rice Terraces", "Beach Resorts"],
            image:
                "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
        },
        {
            id: 3,
            name: "Malaysia",
            country: "Malaysia",
            duration: "3 Days 2 Nights",
            price: 25000,
            groupSize: "2-10 people",
            highlights: ["Petronas Towers", "Street Food", "Cultural Sites"],
            image:
                "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop",
        },
        {
            id: 4,
            name: "Dubai",
            country: "UAE",
            duration: "4 Days 3 Nights",
            price: 20000,
            groupSize: "2-12 people",
            highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping"],
            image:
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
        },
    ];

    const toggleFavorite = (packageId) => {
        setFavorites((prev) => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(packageId)) {
                newFavorites.delete(packageId);
            } else {
                newFavorites.add(packageId);
            }
            return newFavorites;
        });
    };

    const handleViewPackage = (pkg) => {
        console.log(`Viewing package: ${pkg.name}`);
    };

    return (
        <section className="px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Popular Packages
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover our most loved destinations with carefully curated experiences that create unforgettable memories
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {packages.map((pkg) => (
                        <Card
                            key={pkg.id}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            onMouseEnter={() => setHoveredCard(pkg.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-110"
                                />
                                <button
                                    onClick={() => toggleFavorite(pkg.id)}
                                    className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                                >
                                    <Heart
                                        className={`w-5 h-5 transition-colors duration-200 ${favorites.has(pkg.id)
                                                ? "fill-red-500 text-red-500"
                                                : "text-gray-600 hover:text-red-500"
                                            }`}
                                    />
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{pkg.country}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-200">
                                    {pkg.name}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>{pkg.groupSize}</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p className="text-xs text-gray-500 mb-1 font-medium">HIGHLIGHTS</p>
                                    <div className="flex flex-wrap gap-1">
                                        {pkg.highlights?.slice(0, 2).map((highlight, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                        {pkg.highlights?.length > 2 && (
                                            <span className="text-xs text-gray-500">
                                                +{pkg.highlights.length - 2} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-2xl font-bold text-gray-900">₹{pkg.price}</span>
                                    <span className="text-xs text-gray-600">per person</span>
                                </div>
                                <Button
                                    onClick={() => handleViewPackage(pkg)}
                                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        View Package
                                        <ArrowRight
                                            className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === pkg.id ? "translate-x-1" : ""
                                                }`}
                                        />
                                    </span>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularPackage;