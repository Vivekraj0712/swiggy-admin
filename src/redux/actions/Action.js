export const add_chapter = (newChapterName) => {
    return {
        type: "ADD",
        payload: {
            newChapterName
        }
    }

}
