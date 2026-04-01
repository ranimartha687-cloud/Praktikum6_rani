 const { addSchedule, getSchedules, removeSchedule } = require('../src/schedule');

test('menambahkan jadwal berhasil', () => {
  const result = addSchedule('Rapat UKM', '2026-03-26');
  expect(result).toBe('Jadwal berhasil ditambahkan');
});

test('gagal menambahkan jadwal karena kosong', () => {
  const result = addSchedule('', '');
  expect(result).toBe('Data tidak lengkap');
});

test('menampilkan jadwal', () => {
  addSchedule('Kuliah PBO', '2026-03-27');
  const schedules = getSchedules();
  expect(schedules.length).toBeGreaterThan(0);
});

test('menghapus jadwal berhasil', () => {
  const result = removeSchedule('Rapat UKM');
  expect(result).toBe('Jadwal berhasil dihapus');
});
