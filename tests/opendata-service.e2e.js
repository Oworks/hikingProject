describe('OpenDataService', () => {
    let service;

    beforeAll(() => { 
        service = new OpenDataService(); 
    });

    it('should fetch open data and map into array', () => {
        service.fetch().suscribe(parsed => {
            const hasData = parsed.length != 0;
            expect(hasData).toBe(true); 
        });
    });
});