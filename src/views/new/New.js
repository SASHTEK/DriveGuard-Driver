import './New.css';
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import TabNavigation from "../../components/navbar/TabNavigation";
import Card from "../../components/objects/Card/Card";
import Label from "../../components/objects/Label/Label";

const New = () => {
    return ( 
        <div className="container">
            <HeaderBox headertext={"Alerts"}/>

            <div className='page-content-new'>        
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
            </div> 

            <TabNavigation bgnew={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default New;