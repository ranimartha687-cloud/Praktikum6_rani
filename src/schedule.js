 let schedules = [];

function addSchedule(title, date) {
  if (!title || !date) {
    return "Data tidak lengkap";
  }
  schedules.push({ title, date });
  return "Jadwal berhasil ditambahkan";
}

function getSchedules() {
  return schedules;
}

function removeSchedule(title) {
  const index = schedules.findIndex(schedule => schedule.title === title);
  if (index !== -1) {
    schedules.splice(index, 1);
    return "Jadwal berhasil dihapus";
  }
  return "Jadwal tidak ditemukan";
}

module.exports = { addSchedule, getSchedules, removeSchedule };
