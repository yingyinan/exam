let express=require("express");
let route=express.Router();
let subjectDB=require("../db/subjectDB");

route.get("/getAllSubjectType",(req,resp)=>{
    subjectDB.getAllSubjectType().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
route.get("/getAllSubjectLevel",(req,resp)=>{
    subjectDB.getAllSubjectLevel().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
route.get("/getAllDepartmentes",(req,resp)=>{
    subjectDB.getAllDepartmentes().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
route.get("/getAllTopics",(req,resp)=>{
    subjectDB.getAllTopics().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
route.post("/getAllSubjects",(req,resp)=>{
    var typeId=req.body.typeId;
    var levelId=req.body.levelId;
    var departmentId=req.body.departmentId;
    var topicId=req.body.topicId;
    console.log(typeId,levelId,departmentId,topicId);
    subjectDB.getAllSubjects(typeId,levelId,departmentId,topicId).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
route.post("/checkSubject",(req,resp)=>{
    var id=req.body.subjectId;
    var check=req.body.subjectCheckState;
    // console.log(id,check);
    subjectDB.checkSubject(id,check).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
route.post("/getCheckState",(req,resp)=>{
    var id=req.body.subjectId;
    // console.log(id);
    subjectDB.getCheckState(id).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
route.post("/getChoice",(req,resp)=>{
    var subjectId=req.body.subjectId;
    // console.log(subjectId);
    subjectDB.getChoice(subjectId).then((data)=>{
        resp.send(data);
        console.log(data);
    }).catch((error)=>{
        resp.send(error);
    });
});


module.exports=route;