var formItem = {title:"Form Proyek",button:{save:{target:"teacher/save/",icon:"fa fa-floppy-o",class:"btn btn-info btn-save",value:"",type:"btn-save-one"}},field:{title:{field:"title",type:"text",label:"Judul Kegiatan",validation:"required",err:"Wajib diisi",data:""},submission:{field:"submission",type:"date",label:"Submisi",validation:'required min="'+minDateFormal+'" max="'+maxDateFormal+'"',err:message,data:today},peer:{field:"peer",type:"date",label:"Penilaian Teman",validation:'required min="'+minDate+'" max="'+maxDate+'"',err:message,data:today},revision:{field:"revision",type:"date",label:"Perbaikan",validation:'required min="'+minDate+'" max="'+maxDate+'"',err:message,data:today},finish:{field:"finish",type:"date",label:"Selesai",validation:'required min="'+minDate+'" max="'+maxDate+'"',err:message,data:today}}}
var formType = {teacher:{project_list:true}}