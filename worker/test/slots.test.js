import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeOpenSlots, zonedToUtc } from '../src/slots.js';

const base = {
  timezone: 'America/Chicago', workStart: '09:00', workEnd: '17:00',
  workDays: [1, 2, 3, 4, 5], daysAhead: 0, minNoticeHours: 0, minSlotMinutes: 30, snapMinutes: 15,
};
// Tue 2026-10-13 06:00 Chicago (CDT, UTC-5)
const now = Date.parse('2026-10-13T11:00:00Z');

test('zonedToUtc handles CDT and CST', () => {
  assert.equal(new Date(zonedToUtc(2026, 10, 13, 9, 0, 'America/Chicago')).toISOString(), '2026-10-13T14:00:00.000Z');
  assert.equal(new Date(zonedToUtc(2026, 12, 1, 9, 0, 'America/Chicago')).toISOString(), '2026-12-01T15:00:00.000Z');
});

test('empty calendar gives the full working day', () => {
  const s = computeOpenSlots([], { ...base, now });
  assert.deepEqual(s, [{ start: '2026-10-13T14:00:00.000Z', end: '2026-10-13T22:00:00.000Z' }]);
});

test('busy blocks split the day; overlapping blocks merge', () => {
  const busy = [
    { start: '2026-10-13T15:00:00Z', end: '2026-10-13T16:00:00Z' },
    { start: '2026-10-13T15:30:00Z', end: '2026-10-13T17:00:00Z' },
  ];
  const s = computeOpenSlots(busy, { ...base, now });
  assert.deepEqual(s, [
    { start: '2026-10-13T14:00:00.000Z', end: '2026-10-13T15:00:00.000Z' },
    { start: '2026-10-13T17:00:00.000Z', end: '2026-10-13T22:00:00.000Z' },
  ]);
});

test('gaps shorter than the minimum are dropped', () => {
  const busy = [
    { start: '2026-10-13T14:00:00Z', end: '2026-10-13T14:50:00Z' },
    { start: '2026-10-13T15:10:00Z', end: '2026-10-13T22:00:00Z' },
  ];
  assert.deepEqual(computeOpenSlots(busy, { ...base, now }), []);
});

test('weekends are skipped and minimum notice applies', () => {
  const sat = Date.parse('2026-10-17T15:00:00Z');
  assert.deepEqual(computeOpenSlots([], { ...base, now: sat }), []);
  const s = computeOpenSlots([], { ...base, now: Date.parse('2026-10-13T14:00:00Z'), minNoticeHours: 4 });
  assert.equal(s[0].start, '2026-10-13T18:00:00.000Z');
});
