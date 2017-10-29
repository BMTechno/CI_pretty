var viewItem = {
  title: "Proyek: Sedang Berjalan",
  target: "student/grid/",
  head: ["Judul Proyek", "History", "Jadwal", "Penilaian"],
  grid: {
    span: [
      [{
        label: "Mata Pelajaran",
        data: "course"
      }, {
        label: 'Pengampu',
        data: "teacher"
      }],
      [{
        label: "Plagiarism",
        data: "plagiarism"
      }, {
        label: "Konsistensi",
        data: "consistency"
      }, {
        label: "Koherensi",
        data: "cohesion"
      }, {
        label: "Banyak Paragraf",
        data: "paragraf"
      }, {
        label: "Banyak Figure (Gambar, tabel, video)",
        data: "figure"
      }],
      [{
        label: "Mulai",
        data: "submission"
      }, {
        label: "Penilaian Teman",
        data: "peer"
      }, {
        label: "Perbaikan",
        data: "revision"
      }, {
        label: "Selesai",
        data: "finish"
      }],
      [{
        label: "Skor Penilaian Diri",
        data: "mean_score"
      }, {
        label: "Banyak Item Yang Dinilai",
        data: "num_score"
      }, {
        label: "Banyak Instrumen",
        data: "instrument"
      }]
    ]
  },
  action: [{
    target: "student/read/",
    icon: "fa fa-eye",
    type: "btn-read",
    label: "Deskripsi Proyek"
  }, {
    target: "student/read/project_product/",
    icon: "fa fa-edit",
    type: "btn-edit",
    label: "Submit Laporan"
  }, {
    target: "student/read/project_summary/",
    icon: "fa fa-edit",
    type: "btn-edit",
    label: "Submit Abstrak"
  }, {
    target: "student/assessment/project_instrument/",
    icon: "fa fa-pencil",
    type: "btn-assessment",
    label: "Penilaian Diri"
  }]
}
var viewType = {
  project_submission: true
}
