import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface MapComponentProps {
    height: string;
    width: string;
    lat: number;
    long: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ height, width, lat, long }) => {
    const containerStyle = {
        width: width,
        height: height,
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyARKNZYKNP0zTfIBtlXbs7XA3hBRvAJo1E", // Replace with your actual API key
    });
    const center = useMemo(() => ({ lat: lat, lng: long }), []);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return <Map center={center} styles={containerStyle} />;
};

interface MapProps {
    center: {
        lat: number;
        lng: number;
    };
    styles: React.CSSProperties;
}

const Map: React.FC<MapProps> = ({ center, styles }) => {
    return (
        <GoogleMap zoom={10} center={center} mapContainerStyle={styles}>
            <Marker position={center} />
        </GoogleMap>
    );
};

export default MapComponent;
