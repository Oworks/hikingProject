describe('TimerService', () => {
  let service;

  beforeAll(() => { 
    service = new TimerService(); 
  });

  it('should start the timer', () => {
    service.start();
    setTimeout(() => {
      const val = service.current();
      expect(val).toBe('0:1');
    }, 1000);
  });

  it('should stop the timer', () => {
    const base = service.current();
    service.stop();
    setTimeout(() => {
      const val = service.current();
      expect(val).toBe(base);
    }, 1000)
  });

  it('should reset the timer', () => {
    const val = service.reset().current();
    expect(val).toBe('0:0');
  });
});