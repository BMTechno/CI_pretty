var viewItem = {title:"Instrumen Penilaian Proyek",target:"teacher/grid/",head:["Aspek"],dropdown:{primary:[{name:"classroom_id-course_id-project_id",target:"teacher/dropdown/dropdown_projectList",label:"Pilih Proyek"}],secondary:{name:"instrument_id",target:"teacher/dropdown/dropdown_projectInstrumentAvailable",label:"Pilih item"}},grid:{aspect:{type:"text"}},action:[{target:"teacher/remove/",icon:"fa fa-trash",type:"btn-delete",label:"Hapus"},{target:"teacher/read/",icon:"fa fa-edit",type:"btn-edit",label:"Perbaiki"},{target:"teacher/read/",icon:"fa fa-eye",type:"btn-read",label:"Baca"}]}
var viewType = {project_instrument:true}
