const { updateTime } = require('../time');

describe('Time Functions', () => {
  beforeEach(() => {
    // Reset DOM before each test
    document.body.innerHTML = '<span id="datetime"></span>';
  });

  it('should update datetime element with current time', () => {
    updateTime();
    const datetime = document.getElementById('datetime').innerHTML;
    expect(datetime).to.match(/\d{1,2}:\d{2}:\d{2} (AM|PM)/);
  });
});