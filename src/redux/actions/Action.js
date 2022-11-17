export const add_chapter = (newChapterName) => {
    return {
        type: "ADD",
        payload: {
            newChapterName
        }
    }

}

export const filter_standards=(wholeData)=>{
    return{
        type:"FILTER_STANDARDS",
        payload:{
            wholeData
        }
    }
}

export const filter_subjects=(standard)=>{
    return{
        type:"FILTER_SUBJECTS",
        payload:{
            standard
        }
    }
}

export const filter_chapters=(standardId,subjectId)=>{
    return{
        type:"FILTER_CHAPTERS",
        payload:{
            standardId,
            subjectId
        }
    }
}
