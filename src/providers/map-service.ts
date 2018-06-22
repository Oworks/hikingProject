import { Injectable, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Steps } from '../model/steps';

declare var google;

/**
 * Maps service
 * handle geolocation and steps management
 */
@Injectable()
export class MapService {

    private _map;

    private _tripDisplay;
    private _dirService;

    constructor(private _geolocation : Geolocation) { 
        this._tripDisplay = new google.maps.DirectionsRenderer();
        this._dirService = new google.maps.DirectionsService();
    }

    /**
     * Add steps cursors
     * @param steps steps to add
     * @return service instance
     */
    public steps(steps : Steps, dep : any, arr : any) : MapService {
        if (this._map) {
            this._tripDisplay.setMap(this._map);
            this._dirService.route({
                origin: new google.maps.LatLng(dep.latitude, dep.longitude),
                destination: new google.maps.LatLng(arr.latitude, arr.longitude),
                travelMode: 'WALKING'
            }, function(res, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    this._tripDisplay.setDirections(res);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
        return this;
    }

    /**
     * Start watching user position
     * @return service instance
     */
    public watch() : MapService {
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
     * Instanciate the map
     * @param map html element to bind
     * @param dep start position
     * @return service instance
     */
    public init(map: ElementRef, dep: any) : MapService {
        if (!navigator.geolocation) {
            window.alert("Error : geolocation not enabled");
            return;
        }
        this._map = new google.maps.Map(map.nativeElement, {
            zoom: 15,
            center: {
                lat: dep.latitude,
                lng: dep.longitude
            },
            mapTypeId: 'ROADMAP'
        });
        return this;
    }
}