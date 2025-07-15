describe('Time Functions', () => {
  let updateTime;

  beforeEach(() => {
    // Reset and set up DOM
    document.body.innerHTML = '';
    const element = document.createElement('span');
    element.id = 'datetime';
    document.body.appendChild(element);
    // Dynamically require after DOM setup
    updateTime = require('../time.js').updateTime;
  });

  it('should update datetime element with current time', () => {
    updateTime();
    const datetime = document.getElementById('datetime').innerHTML;
    expect(datetime).toBeDefined(); // Check if defined first
    expect(datetime).toMatch(/\d{1,2}:\d{2}:\d{2} (AM|PM)/);
  });
});