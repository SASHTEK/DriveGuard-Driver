import './New.css';
import TabNavigation from "../../components/navbar/TabNavigation";
import Card from "../../components/objects/Card/Card";
import Label from "../../components/objects/Label/Label";
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";

const New = () => {
    return ( 
        <div className="container">
            <div>
                <HeaderBox headertext={"Alerts"}/>
            </div>

            <div className="new-offense-acceptance">
                <Label text={"New Offense Acceptance"}/>
            </div>

            <div className="new-offense-response-pending">
                <Card subject={"Response Pending"} message={"This is a test work"} subbgcolor={"red"} subtextcolor={"white"} msgbgcolor={"lightgray"} msgtextcolor={"red"}/>
            </div>

            <div className="new-fine">
                <Label text={"New Fines"}/>
            </div>

            <div className="new-fine-settle">
                <Card subject={"To be settled"} message={"This is a test work"} subbgcolor={"red"} subtextcolor={"white"} msgbgcolor={"lightgray"} msgtextcolor={"red"}/>
            </div>
            
            <div className="navposition-new">
                <TabNavigation bgnew={"rgb(10, 55, 202)"}/>
            </div>
        </div>
     );
}
 
export default New;