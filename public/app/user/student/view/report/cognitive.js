var viewItem = {title:"Laporan Hasil: Tes",target:"student/grid/",head:["Tes","Hasil"],button:{print:{target:"student/print/",icon:"fa fa-print"}},dropdown:{primary:[{name:"classroom_id-course_id",target:"student/dropdown/dropdown_classroomCourse",label:"Pilih Mata Pelajaran"}]},grid:{span:[[{label:"Tes",data:"title"},{label:'Mulai',data:"start"},{label:"Selesai",data:"finish"},{label:"Banyak Item",data:"instrument"}],[{label:"Betul",data:"trueA"},{label:"Salah",data:"falseA"},{label:"Tidak Dijawab",data:"nihil"},{label:"Nilai",data:"score"}]]}}
var viewType = {report_cognitive:true}