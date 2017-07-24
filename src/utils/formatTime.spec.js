import formatTime from './formatTime';

test('formatTime', () => {
    expect(formatTime(0)).toBe('00:00');
    expect(formatTime(1)).toBe('00:01');
    expect(formatTime(119)).toBe('01:59');
    expect(formatTime(600)).toBe('10:00');
});