const { updateTime } = require('../time.js');

describe('Time Functions', () => {
  it('should update datetime element with current time', () => {
    document.body.innerHTML = '<span id="datetime"></span>';
    updateTime();
    const datetime = document.getElementById('datetime').innerHTML;
    expect(datetime).to.match(/\d{1,2}:\d{2}:\d{2} (AM|PM)/);
  });
});