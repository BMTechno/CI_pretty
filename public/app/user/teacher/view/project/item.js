var viewItem = {title:"Item Instrumen Penilaian Proyek",target:"teacher/grid/",head:["Aspek"],button:{addnew:{target:"teacher/form/",icon:"fa fa-file-o",label:"Buat Baru"},save:{target:"teacher/submit/",icon:"fa fa-floppy-o",label:"Simpan"}},dropdown:{primary:[{name:"classroom_id-course_id",target:"teacher/dropdown/dropdown_classroomCourse",label:"Pilih Mata Pelajaran"},{name:"competence_id",target:"teacher/dropdown/dropdown_skillCompetence",label:"Pilih Kompetensi"}]},grid:{aspect:{type:"text"}},action:[{target:"teacher/delete/",icon:"fa fa-trash",type:"btn-delete",label:"Hapus"},{target:"teacher/read/",icon:"fa fa-edit",type:"btn-edit",label:"Perbaiki"},{target:"teacher/read/",icon:"fa fa-eye",type:"btn-read",label:"Baca"}]}
var viewType = {project_item:true}
