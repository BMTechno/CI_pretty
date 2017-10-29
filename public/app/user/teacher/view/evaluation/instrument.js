var viewItem = {title:"Instrumen Tes",target:"teacher/grid/",head:["Aspek","Ranah","Tingkat Kesulitan"],dropdown:{primary:[{name:"classroom_id-course_id-quiz_id",target:"teacher/dropdown/dropdown_classroomCourseQuiz",label:"Pilih Tes"},{name:"domain-difficulty",option:{"0":"Ranah",c1:{label:"Pengetahuan (C1)",data:{"1_1":"Pengetahuan - Mudah","1_2":"Pengetahuan - Sedang","1_3":"Pengetahuan - Sulit"}},c2:{label:"Pemahaman (C2)",data:{"2_1":"Pengetahuan - Mudah","2_2":"Pengetahuan - Sedang","2_3":"Pengetahuan - Sulit"}},c3:{label:"Penerapan (C3)",data:{"3_1":"Penerapan - Mudah","3_2":"Penerapan - Sedang","3_3":"Penerapan - Sulit"}},c4:{label:"Analisis (C4)",data:{"4_1":"Analisis - Mudah","4_2":"Analisis - Sedang","4_3":"Analisis - Sulit"}},c5:{label:"Sintesis (C5)",data:{"5_1":"Sintesis - Mudah","5_2":"Sintesis - Sedang","5_3":"Sintesis - Sulit"}},c6:{label:"Evaluasi (C6)",data:{"6_1":"Evaluasi - Mudah","6_2":"Evaluasi - Sedang","6_3":"Evaluasi - Sulit"}},c7:{label:"Mencipta (C7)",data:{"7_1":"Mencipta - Mudah","7_2":"Mencipta - Sedang","7_3":"Mencipta - Sulit"}},}}],secondary:{name:"instrument_id",target:"teacher/dropdown/dropdown_quizAvailable",label:"Pilih item"}},grid:{indicator:{type:"cell"},domain:{type:"cell"},difficulty:{type:"cell"}},action:[{target:"teacher/remove/",icon:"fa fa-trash",type:"btn-delete",label:"Hapus"},{target:"teacher/read/",icon:"fa fa-edit",type:"btn-edit",label:"Perbaiki"},{target:"teacher/read/",icon:"fa fa-eye",type:"btn-read",label:"Baca"}]}
var viewType = {evaluation_instrument:true}
