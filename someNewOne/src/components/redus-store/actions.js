export const CHANGETITLE = "CHANGETITLE";


export const changeTitleCreator = (value) =>{
    return {
        type: CHANGETITLE,
        payload: value
    }
}