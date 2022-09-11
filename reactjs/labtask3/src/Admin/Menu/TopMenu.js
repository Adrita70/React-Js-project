import MenuItem from "./MenuItem";
const TopMenu=()=>
{
    return (
        <div>
            <MenuItem url="/home" title="Home"/>
            <MenuItem url="/studentdetails" title="Student"/>
            <MenuItem url="/teacherdetails" title="Tutor"/>
            <MenuItem url="/admin" title="Admin"/>
            <MenuItem url="/course" title="Course List"/>
            <MenuItem url="/schedule" title="Schedule List"/>
            <MenuItem url="/token" title="Token List"/>

        </div>
    )
}
export default TopMenu;