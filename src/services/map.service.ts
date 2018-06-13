import { Injectable, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

/**
 * Maps service
 * handle geolocation and hikings management
 */
@Injectable()
export class MapService {

    private _map;

    private _routeService;

    constructor(private _geolocation : Geolocation) { 
        this._routeService = new google.maps.DirectionsService();
    }

    /**
     * Start watching position
     * @return service instance
     */
    watch() : MapService {
        if (this._map) {
            let infos =  new google.maps.InfoWindow({
                map: this._map
            });
            const watcher = this._geolocation.watchPosition();
            watcher.subscribe(data => {
                const pos = {
                    lng: data.coords.longitude,
                    lat: data.coords.latitude
                }
                this._map.setCenter(pos);
                infos.setPosition(pos);
                infos.setContent('You are here');
            });
        }
        return this;
    }

    /**
     * Generate trip tracker 
     * @param map element to bind
     * @param dep start position
     * @param end end position
     * @return service instance
     */
    track(map: ElementRef, dep: any, end: any) : MapService {
        const endPos = new google.maps.LatLng(end.latitude, end.longitude);
        const startPos = new google.maps.LatLng(dep.latitude, dep.longitude);
        this._map = new google.maps.Map(map.nativeElement, {
            center: startPos,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 10
        });
        let dirs = new google.maps.DirectionsRenderer();
        dirs.setMap(this._map);
        this._routeService.route({
            travelMode: 'WALKING',
            origin: startPos,
            destination: endPos
        }, function(res, status) {
            if (status === 'OK') {
                dirs.setDirections(res);
            }
        });
        return this;
    }
}