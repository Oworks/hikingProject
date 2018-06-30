import { Injectable, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Steps } from '../model/steps';
import { Point } from '../model/point';
import { Coords } from '../model/coords';

declare var google;

/**
 * Maps service
 * handle geolocation and steps management
 */
@Injectable()
export class MapService {

    private _map;

    constructor(private _geolocation : Geolocation) {}

    /**
     * Instanciate the map
     * @param map html element to bind
     * @param dep start position
     * @return service instance
     */
    public init(map : ElementRef, dep : Point) : MapService {
        if (!window.navigator.geolocation) {
            window.alert('Error : geolocation not enabled');
            return;
        }
        this._map = new google.maps.Map(map.nativeElement, {
            zoom: 5,
            center: dep.coords.googleCoords,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        return this;
    }

    /**
     * Start watching user position
     * @return service instance
     */
    public watch() : MapService {
        if (this._map) {
            const watcher = this._geolocation.watchPosition();
            const infos = new google.maps.InfoWindow({ map: this._map });
            watcher.subscribe(data => {
                let pos = new Coords(data.coords.latitude, data.coords.longitude);
                this._map.setCenter(pos.googleCoords);
                infos.setPosition(pos.googleCoords);
                infos.setContent('You are here');
            });
        }
        return this;
    }

    /**
     * Set travel options
     * @param steps steps to add
     * @return service instance
     */
    public travel(steps : Steps, dep : Point, arr : Point) : MapService {
        const dirService = new google.maps.DirectionsService();
        const dirRenderer = new google.maps.DirectionsRenderer();
        const opts = {
            origin: dep.coords.googleCoords,
            destination: arr.coords.googleCoords,
            waypoints: this.buildWaypoints(steps),
            travelMode: 'WALKING'
        }
        dirRenderer.setMap(this._map);
        dirService.route(opts, (res, status) => {
            if (status === 'OK') {
                dirRenderer.setDirections(res);
            } else {
                window.alert('Error setting up waypoints');
            }
        });
        return this;
    }

    /**
     * Build waypoints array for google api
     * @param steps points to add
     * @return waypoints array
     */
    private buildWaypoints(steps: Steps) : object[] {
        const waypoints = [];
        steps.points.forEach(p => {
            waypoints.push({
                location: p.coords.googleCoords,
                stopover: true
            });
        });
        return waypoints;
    }
}