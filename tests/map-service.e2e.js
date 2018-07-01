import { MockElementRef } from "./mocks/MockElementRef";

describe('MapService', () => {
    let service;
    let afterState;

    const data = fakeDataSet();
    
    beforeAll(() => { 
        service = new MapService();
    });

    afterEach(() => {
        expect(afterState).toBeDefined();
        expect(afterState).not.toBeNull();
    });
   
    it('should initialize the map without errors', () => {
        const mapElement = new MockElementRef();
        afterState = service.init(mapElement, data.dep);
    });

    it('should display hike and step points on map', () => {
        afterState = service.travel(data.steps, data.dep, data.arr);
    });

    it('should display cursor binded to user position', () => {
        afterState = service.watch();
    });
});

const fakeDataSet = () => {
    const steps = new Steps();
    steps.add('fake step', 12.78, 13.01);
    return {
        dep: new Point('dep', 12.34, 11.98),
        arr: new Point('arr', 14.21, 14.19),
        steps: steps
    }
}