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

    private _points : Point[];

    constructor(private _geolocation : Geolocation) {
        this._points = [];
    }

    /**
     * Instanciate the map
     * @param map html element to bind
     * @param dep start position
     * @return service instance
     */
    public init(map : ElementRef, dep : Point) : MapService {
        if (!window.navigator.geolocation) {
            window.alert("Error : geolocation not enabled");
            return;
        }
        this._map = new google.maps.Map(map.nativeElement, {
            zoom: 15,
            center: dep.coords.googleCoords(),
            mapTypeId: 'ROADMAP'
        });
        return this;
    }

    /**
     * Add steps cursors
     * @param steps steps to add
     * @return service instance
     */
    public steps(steps : Steps, dep : Point, arr : Point) : MapService {
        if (this._map) {
            this.mark(dep).mark(arr);
            steps.points.forEach(p => this.mark(p));
        }
        return this;
    }

    /**
     * Start watching user position
     * @return service instance
     */
    public watch() : MapService {
        if (this._map) {
            const watcher = this._geolocation.watchPosition();
            let infos = new google.maps.InfoWindow({ map: this._map });

            watcher.subscribe(data => {
                let pos = new Coords(data.coords.latitude, data.coords.longitude);
                this.unmark(pos);
                this._map.setCenter(pos.googleCoords());
                infos.setPosition(pos.googleCoords());
                infos.setContent('You are here');
            });
        }
        return this;
    }

    /**
     * Check if the user is on a marker, if he is
     * then it's deleted
     * @param coords current user position
     * @return service instance
     */
    private unmark(coords : Coords) : MapService {
        this._points = this._points.filter(p => p.coords === coords);
        return this;
    }

    /**
     * Add a marker on the map
     * @param location point to add
     * @return service instance
     */
    private mark(location : Point) : MapService {
        location.marker = new google.maps.Marker({
            map: this._map,
            position: location.coords.googleCoords(),
            title: location.desc
        });
        this._points.push(location);
        return this;
    }
}