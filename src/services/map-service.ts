import { Injectable, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { google } from '@agm/core/services/google-maps-types';

/**
 * Maps service
 * handle geolocation and hikings management
 */
@Injectable()
export class MapService {

    private _map;

    private _routeService;

    constructor(private _geolocation : Geolocation) { 
        this._routeService = new google.maps().DirectionsService();
    }

    /**
     * Start watching position
     */
    watch() {
        if (!this._map) return;
        let infos =  new google.maps.InfoWindow({
            map: this._map
        });
        this._geolocation.watchPosition().subscribe(data => {
            const pos = {
                lng: data.coords.longitude,
                lat: data.coords.latitude
            }
            this._map.setCenter(pos);
            infos.setPosition(pos);
            infos.setContent('You are here');
        });
    }

    /**
     * Generate trip tracker 
     * @param map element to bind
     * @param dep start position
     * @param end end position
     */
    track(map: ElementRef, dep: any, end: any) {
        const startPos = new google.maps.LatLng(dep.latitude, dep.longitude);
        const endPos = new google.maps.LatLng(end.latitude, end.longitude);
        const opts = {
            center: startPos,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        let dirs = new google.maps.DirectionsRenderer();
        this._map = new google.maps.Map(map.nativeElement, opts);
        dirs.setMap(this._map);
        const tripOpts = {
            travelMode: 'WALKING',
            origin: startPos,
            destination: endPos
        }
        this._routeService.route(tripOpts, (res, status) => {
            if (status === 'OK') {
                dirs.setDirections(res);
            }
        });
    }
}