let pool=require("./pool");

module.exports={
    getAllSubjectType(){
        var sql="select * from tbl_exam_subjecttype";
        return pool.execute(sql);
    },
    getAllSubjectLevel(){
        var sql="select * from tbl_exam_subjectlevel";
        return pool.execute(sql);
    },
    getAllDepartmentes(){
        var sql="select * from tbl_exam_epartment";
        return pool.execute(sql);
    },
    getAllTopics(){
        var sql="select * from tbl_exam_topic";
        return pool.execute(sql);
    },
    getAllSubjects(a,b,c,d){
        var sql="select * from tbl_exam_subject where subjectType_id="
        +a+" and subjectLevel_id="
        +b+" and department_id="
        +c+" and topic_id="
        +d;
        return pool.execute(sql);
    },
    checkSubject(id,check){
        var sql="update tbl_exam_subject set checkState='"+check+"' where id="+id;
        return pool.execute(sql);
    },
    getCheckState(id){
        var sql="select * from tbl_exam_subject where id="+id;
        return pool.execute(sql);
    },
    getChoice(subjectId){
        var sql="select * from tbl_exam_choice where subject_id="+subjectId;
        return pool.execute(sql);
    },
    saveSubject(analysis,answer,stem,department_id,subjectLevel_id,subjectType_id,topic_id){
        var sql="insert into tbl_exam_subject(analysis,answer,checkState,stem,department_id,subjectLevel_id,subjectType_id,topic_id)values('"
        +analysis+"','"+answer+"','未审核','"
        +stem+"',"+department_id+","
        +subjectLevel_id+","+subjectType_id+","+topic_id+")";
        return pool.execute(sql);
    }

}