import {SchoolData} from "../models/SchoolData.ts"

interface UpdateDataProps {
    schoolData : SchoolData
    setScholData: any
}

export default function UpdateData(props : UpdateDataProps){
    function updateSchool() {
        const newShoolData = new SchoolData()
        Object.assign(newShoolData, props.schoolData)
        newShoolData.setPraimary(Number((document.getElementById("primary") as HTMLInputElement).value))
        newShoolData.setSecondary(Number((document.getElementById("secondary") as HTMLInputElement).value))
        newShoolData.setHigth(Number((document.getElementById("high-school") as HTMLInputElement).value))
        props.setScholData(newShoolData)

        console.log("primary " +props.schoolData.getPrimary())
        console.log("second " +props.schoolData.getSecondary())
        console.log("hight " +props.schoolData.getHigth())
    }


    return <div className={"row"}>
        <input type="number" placeholder="Primary" id={"primary"} onChange={updateSchool}/>
        <input type="number" placeholder="Secondary" id={"secondary"} onChange={updateSchool}/>
        <input type="number" placeholder="High school" id={"high-school"} onChange={updateSchool}/>
    </div>
}

